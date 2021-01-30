using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MyMoney.Api.Data.Context;
using System.IO;

namespace MyMoney.Api.FunctionalTests.Config
{
    public class RepositoryTestsBase
    {
        private readonly MyMoneyDbContext _context;

        private static string Section => "ConnectionStrings";
        private static string SectionValue => "DefaultConnection";
        private static string ConfigFileName => "appsettings.Testing.json";

        public RepositoryTestsBase()
        {
            var iConfig = GetIConfigurationRoot();

            var connectionString = iConfig.GetSection(Section).GetValue<string>(SectionValue);

            var options = new DbContextOptionsBuilder<MyMoneyDbContext>()
                .UseSqlServer(connectionString)
                .Options;

            _context = new MyMoneyDbContext(options);
        }

        public MyMoneyDbContext GetContext()
        {
            return _context;
        }

        private static IConfigurationRoot GetIConfigurationRoot()
        {
            var projectDir = Directory.GetCurrentDirectory();

            return new ConfigurationBuilder()
                .SetBasePath(projectDir)
                .AddJsonFile(ConfigFileName, true)
                .AddEnvironmentVariables()
                .Build();
        }
    }
}
