using System;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using MyMoney.Api.WebApi.ViewModels;

namespace MyMoney.Api.FunctionalTests.BehavioralTests.ContasAPagar
{
    public class ContasAPagarHelper
    {
        private readonly HttpClient _client;

        public HttpResponseMessage Response { get; private set; }
        public ContaAPagarViewModel ContaAPagar { get; private set; }

        public ContasAPagarHelper(HttpClient client)
        {
            _client = client;
        }

        public ContaAPagarViewModel GerarContaAPagar()
        {
            ContaAPagar = new ContaAPagarViewModel
            {
                Nome = "Energia",
                Descricao = "Conta de Energia - Energisa",
                DataVencimento = DateTime.Today,
                Valor = 100
            };

            return ContaAPagar;
        }

        public ContaAPagarViewModel GerarContaAPagarInvalida()
        {
            ContaAPagar = new ContaAPagarViewModel
            {
                Nome = "A",
                Descricao = "C",
                DataVencimento = DateTime.Today,
                Valor = -1
            };

            return ContaAPagar;
        }

        public async Task CriarContaAPagarAsync(ContaAPagarViewModel contaAPagar)
        {
            Response = await _client.PostAsJsonAsync("api/v1/contasapagar", contaAPagar);
        }

        public async Task ObterTodasContasAPagarAsync()
        {
            Response = await _client.GetAsync("api/v1/contasapagar");
        }
    }
}
