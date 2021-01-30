using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using MyMoney.Api.Data.Context;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace MyMoney.Api.WebApi.Configuration
{
    public static class HealthCheckConfig
    {
        public static IServiceCollection AddHealthCheck(this IServiceCollection services)
        {
            services.AddHealthChecks()
                .AddDbContextCheck<MyMoneyDbContext>();

            services.Configure<HealthCheckPublisherOptions>(options =>
            {
                options.Delay = TimeSpan.FromSeconds(2);
            });

            services.AddSingleton<IHealthCheckPublisher, TelegramPublisher>();

            return services;
        }

        public static IApplicationBuilder UseHealthCheck(this IApplicationBuilder app)
        {
            app.UseHealthChecks("/api/hc");

            return app;
        }
    }

    internal class TelegramPublisher : IHealthCheckPublisher
    {
        private readonly IMyMoneyBot _myMoneyBot;

        private Dictionary<string, HealthStatus> Status { get; set; }

        public TelegramPublisher(IMyMoneyBot myMoneyBot)
        {
            _myMoneyBot = myMoneyBot;

            Status = new Dictionary<string, HealthStatus>
            {
                [nameof(MyMoneyDbContext)] = HealthStatus.Healthy
            };
        }

        public Task PublishAsync(HealthReport report, CancellationToken cancellationToken)
        {
            foreach (var entrie in report.Entries)
            {
                if (entrie.Value.Status == HealthStatus.Unhealthy && Status[entrie.Key] == HealthStatus.Healthy)
                {
                    var mensagemErro = $"Falha no HealthCheck para {entrie.Key}";
                    _myMoneyBot.EnviarMensagem(mensagemErro);

                    Status[entrie.Key] = entrie.Value.Status;
                }

                if (entrie.Value.Status == HealthStatus.Healthy && Status[entrie.Key] == HealthStatus.Unhealthy)
                {
                    var mensagemNormalizacao = $"HealthCheck normalizado para {entrie.Key}";
                    _myMoneyBot.EnviarMensagem(mensagemNormalizacao);

                    Status[entrie.Key] = entrie.Value.Status;
                }
            }

            cancellationToken.ThrowIfCancellationRequested();

            return Task.CompletedTask;
        }
    }
}
