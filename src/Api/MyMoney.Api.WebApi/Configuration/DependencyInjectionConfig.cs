using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using MyMoney.Api.Business.Interfaces;
using MyMoney.Api.Business.Notifications;
using MyMoney.Api.Business.Services;
using MyMoney.Api.Data.Context;
using MyMoney.Api.Data.Repository;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace MyMoney.Api.WebApi.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static IServiceCollection ResolveDependencies(this IServiceCollection services)
        {
            services.AddScoped<MyMoneyDbContext>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IContaAPagarRepository, ContaAPagarRepository>();

            services.AddScoped<INotificador, Notificador>();
            services.AddScoped<IContaAPagarService, ContaAPagarService>();

            services.AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureSwaggerOptions>();

            return services;
        }
    }
}
