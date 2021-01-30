using System;
using System.Net;
using System.Net.Http.Json;
using System.Threading.Tasks;
using FluentAssertions;
using MyMoney.Api.FunctionalTests.Config;
using MyMoney.Api.WebApi;
using MyMoney.Api.WebApi.ViewModels;
using Newtonsoft.Json;
using TechTalk.SpecFlow;
using Xunit;

namespace MyMoney.Api.FunctionalTests.BehavioralTests.ContasAPagar
{
    [Binding]
    [Collection(nameof(BehavioralTestsFixtureCollection))]
    public class ContasAPagar_ExcluirSteps
    {
        private readonly BehavioralTestsFixture<StartupTests> _testsFixture;

        public ContasAPagar_ExcluirSteps(BehavioralTestsFixture<StartupTests> testsFixture)
        {
            _testsFixture = testsFixture;
        }

        [When(@"for enviada exclusão de uma conta a pagar existente")]
        public async Task QuandoForEnviadaExclusaoDeUmaContaAPagarExistenteAsync()
        {
            // Arrange
            await _testsFixture.CriarContaAPagarValidaAsync();
            var retorno = await _testsFixture.Response.Content.ReadFromJsonAsync<RetornoSucessoViewModel>();
            var contaAPagarViewModel = JsonConvert.DeserializeObject<ContaAPagarViewModel>(retorno.Data.ToString());

            // Act
            await _testsFixture.RemoverContaAPagarAsync(contaAPagarViewModel.Id);

            // Assert
            _testsFixture.Response.EnsureSuccessStatusCode();
        }

        [When(@"for enviada exclusão de uma conta a pagar inexistente")]
        public async Task QuandoForEnviadaExclusaoDeUmaContaAPagarInexistenteAsync()
        {
            // Arrange&Act&Assert
            await _testsFixture.RemoverContaAPagarAsync(Guid.NewGuid());
        }

        [Then(@"será devolvida a conta a pagar excluída")]
        public async Task EntaoSeraDevolvidaAContaAPagarExcluidaAsync()
        {
            // Arrange&Act
            var retorno = await _testsFixture.Response.Content.ReadFromJsonAsync<RetornoSucessoViewModel>();
            var contaAPagarViewModel = JsonConvert.DeserializeObject<ContaAPagarViewModel>(retorno.Data.ToString());

            // Assert
            contaAPagarViewModel.Nome.Should().Be(_testsFixture.ContaAPagarViewModel.Nome);
            contaAPagarViewModel.Descricao.Should().Be(_testsFixture.ContaAPagarViewModel.Descricao);
            contaAPagarViewModel.DataVencimento.Should().Be(_testsFixture.ContaAPagarViewModel.DataVencimento);
            contaAPagarViewModel.Valor.Should().Be(_testsFixture.ContaAPagarViewModel.Valor);
        }

        [Then(@"será devolvido NotFound")]
        public void EntaoSeraDevolvidoNotFound()
        {
            // Arrange&Act&Assert
            _testsFixture.Response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }
    }
}
