using FluentAssertions;
using MyMoney.Api.FunctionalTests.Config;
using MyMoney.Api.WebApi;
using MyMoney.Api.WebApi.ViewModels;
using Newtonsoft.Json;
using System;
using System.Net.Http.Json;
using System.Threading.Tasks;
using TechTalk.SpecFlow;
using Xunit;

namespace MyMoney.Api.FunctionalTests.BehavioralTests.ContasAPagar
{
    [Binding]
    [Collection(nameof(BehavioralTestsFixtureCollection))]
    public class ContaAPagar_ObterContaAPagarSteps
    {
        private readonly BehavioralTestsFixture<StartupTests> _testsFixture;

        public ContaAPagar_ObterContaAPagarSteps(BehavioralTestsFixture<StartupTests> testsFixture)
        {
            _testsFixture = testsFixture;
        }

        [When(@"existir uma conta à pagar")]
        public async Task QuandoExistirUmaContaAPagarAsync()
        {
            // Arrange&Act
            await _testsFixture.CriarContaAPagarValidaAsync();

            // Assert
            _testsFixture.Response.EnsureSuccessStatusCode();
        }

        [When(@"for enviada requisição para obter a conta à pagar existente")]
        public async Task QuandoForEnviadaRequisicaoParaObterAContaAPagarExistenteAsync()
        {
            var retorno =
                await _testsFixture.Response.Content.ReadFromJsonAsync<RetornoSucessoViewModel>();

            retorno.Success.Should().BeTrue();

            var contaAPagarIncluida = JsonConvert.DeserializeObject<ContaAPagarViewModel>(retorno.Data.ToString());

            await _testsFixture.ObterContaAPagarAsync(contaAPagarIncluida.Id);
        }

        [When(@"for enviada requisição para obter a conta à pagar inexistente")]
        public async Task QuandoForEnviadaRequisicaoParaObterAContaAPagarInexistenteAsync()
        {
            await _testsFixture.ObterContaAPagarAsync(Guid.NewGuid());
        }

        [Then(@"a conta à pagar será retornada")]
        public async Task EntaoAContaAPagarSeraRetornadaAsync()
        {
            // Arrange&Act
            var contaAPagarRecebida =
                await _testsFixture.Response.Content.ReadFromJsonAsync<ContaAPagarViewModel>();

            // Assert
            contaAPagarRecebida.Should().NotBeNull();
            contaAPagarRecebida.Nome.Should().Be(_testsFixture.ContaAPagarViewModel.Nome);
            contaAPagarRecebida.Descricao.Should().Be(_testsFixture.ContaAPagarViewModel.Descricao);
            contaAPagarRecebida.DataVencimento.Should().Be(_testsFixture.ContaAPagarViewModel.DataVencimento);
            contaAPagarRecebida.Valor.Should().Be(_testsFixture.ContaAPagarViewModel.Valor);
            contaAPagarRecebida.Id.Should().NotBeEmpty();

            await _testsFixture.RemoverContaAPagarAsync(contaAPagarRecebida.Id);
        }

        [Then(@"será retornado StatusCode 404_Not_Found")]
        public void EntaoSeraRetornadoCodigoNotFound()
        {
            _testsFixture.Response.StatusCode.Should().Be(404);
        }
    }
}
