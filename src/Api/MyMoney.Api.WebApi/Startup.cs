using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyMoney.Api.Data.Context;
using MyMoney.Api.WebApi.Configuration;

namespace MyMoney.Api.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApiConfig();

            services.AddDbContext<MyMoneyDbContext>(options =>
            {
                options
                    .EnableSensitiveDataLogging()
                    .UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            });

            services.AddIdentityConfig(Configuration);

            services.AddAutoMapper(typeof(Startup));

            services.AddSwaggerConfig();

            services.AddTelegramConfig();

            services.AddHealthCheck();

            services.ResolveDependencies();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IApiVersionDescriptionProvider provider)
        {
            app.UseApiConfig(env, Configuration);

            app.UseSwaggerConfig(provider);

            app.UseHealthCheck();
        }
    }
}
