using MyMoney.Api.Business.Models;
using MyMoney.Api.Data.Context;
using MyMoney.Api.Data.Repository;
using MyMoney.Api.WebApi;
using MyMoney.Api.WebApi.ViewModels;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Xunit;

namespace MyMoney.Api.FunctionalTests.Config
{
    [CollectionDefinition(nameof(BehavioralTestsFixtureCollection))]
    public class BehavioralTestsFixtureCollection : ICollectionFixture<BehavioralTestsFixture<StartupTests>> { }

    public class BehavioralTestsFixture<TStartup> : IDisposable where TStartup : class
    {
        public readonly MyMoneyApiFactory<TStartup> Factory;
        public readonly HttpClient Client;
        public readonly RepositoryTestsBase RepositoryTests;
        public readonly ContaAPagarRepository ContaAPagarRepository;
        public readonly MyMoneyDbContext Context;
        public readonly string Email;
        private const string Password = "Teste@123";
        public HttpResponseMessage Response { get; private set; }
        public LoginResponseViewModel LoginResponse { get; private set; }
        public ContaAPagarViewModel ContaAPagarViewModel { get; private set; }

        public BehavioralTestsFixture()
        {
            Factory = new MyMoneyApiFactory<TStartup>();
            Client = Factory.CreateClient();
            RepositoryTests = new RepositoryTestsBase();
            Context = RepositoryTests.GetContext();
            ContaAPagarRepository = new ContaAPagarRepository(Context);
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

        public async Task CriarContaAPagarValidaAsync()
        {
            ContaAPagarViewModel = new ContaAPagarViewModel
            {
                Nome = "Energia",
                Descricao = "Conta de Energia - Energisa",
                DataVencimento = DateTime.Today,
                Valor = 100
            };

            Response = await Client.PostAsJsonAsync("api/v1/contasapagar", ContaAPagarViewModel);
        }

        public async Task CriarContaAPagarInvalidaAsync()
        {
            ContaAPagarViewModel = new ContaAPagarViewModel
            {
                Nome = "A",
                Descricao = "C",
                DataVencimento = DateTime.Today,
                Valor = -1
            };

            Response = await Client.PostAsJsonAsync("api/v1/contasapagar", ContaAPagarViewModel);
        }

        public async Task RemoverContaAPagarDaBaseAsync(Guid id)
        {
            ContaAPagarRepository.Remover(id);

            await Context.SaveChangesAsync();
        }

        public async Task<ContaAPagar> ObterNaBaseContaAPagarAdicionadaAsync()
        {
            return (await ContaAPagarRepository.BuscarAsync(
                c =>
                    c.Valor == ContaAPagarViewModel.Valor &&
                    c.Descricao == ContaAPagarViewModel.Descricao &&
                    c.Nome == ContaAPagarViewModel.Nome &&
                    c.DataVencimento == ContaAPagarViewModel.DataVencimento)).FirstOrDefault();
        }

        public async Task ObterTodasContasAPagarAsync()
        {
            Response = await Client.GetAsync("api/v1/contasapagar");
        }

        public async Task ObterContaAPagarAsync(Guid id)
        {
            Response = await Client.GetAsync($"api/v1/contasapagar/{id}");
        }

        public void Dispose()
        {
            Client?.Dispose();
            Factory?.Dispose();
            Context?.Dispose();
            ContaAPagarRepository?.Dispose();
        }
    }
}
