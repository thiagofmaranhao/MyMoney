using System;
using System.Net.Http;
using MyMoney.Api.Data.Repository;
using MyMoney.Api.Tests.UnitTests.Data.Repository;
using MyMoney.Api.WebApi;
using Xunit;

namespace MyMoney.Api.Tests.Config
{
    [CollectionDefinition(nameof(BehavioralTestsFixtureCollection))]
    public class BehavioralTestsFixtureCollection : ICollectionFixture<BehavioralTestsFixture<StartupTests>> { }

    public class BehavioralTestsFixture<TStartup> : IDisposable where TStartup : class
    {
        public readonly MyMoneyApiFactory<TStartup> Factory;
        public readonly HttpClient Client;
        public readonly RepositoryTestsBase RepositoryTests;
        public readonly ContaAPagarRepository ContaAPagarRepository;

        public BehavioralTestsFixture()
        {
            Factory = new MyMoneyApiFactory<TStartup>();
            Client = Factory.CreateClient();
            RepositoryTests = new RepositoryTestsBase();
            ContaAPagarRepository = new ContaAPagarRepository(RepositoryTests.GetContext());
        }

        public void Dispose()
        {
            Client.Dispose();
            Factory.Dispose();
        }
    }
}
