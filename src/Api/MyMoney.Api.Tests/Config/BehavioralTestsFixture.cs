using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Castle.Core.Internal;
using MyMoney.Api.Data.Repository;
using MyMoney.Api.Tests.UnitTests.Data.Repository;
using MyMoney.Api.WebApi;
using MyMoney.Api.WebApi.ViewModels;
using Newtonsoft.Json;
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
        public readonly string Email;
        public LoginResponseViewModel LoginResponse { get; private set; }
        private const string Password = "Teste@123";

        public BehavioralTestsFixture()
        {
            Factory = new MyMoneyApiFactory<TStartup>();
            Client = Factory.CreateClient();
            RepositoryTests = new RepositoryTestsBase();
            ContaAPagarRepository = new ContaAPagarRepository(RepositoryTests.GetContext());
            Email = "teste@teste.com";
        }

        public async Task<HttpResponseMessage> RealizarAutenticacaoAsync()
        {
            var loginUser = new LoginUserViewModel
            {
                Email = Email,
                Password = Password
            };

            var response = await Client.PostAsJsonAsync("api/v1/auth", loginUser);

            var retorno = await response.Content.ReadFromJsonAsync<RetornoSucessoViewModel>();
            LoginResponse = JsonConvert.DeserializeObject<LoginResponseViewModel>(retorno.Data.ToString());

            AplicarTokenNoClienteHttp(LoginResponse.AccessToken);

            return response;
        }

        private void AplicarTokenNoClienteHttp(string token)
        {
            Client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }

        public void Dispose()
        {
            Client.Dispose();
            Factory.Dispose();
        }
    }
}
