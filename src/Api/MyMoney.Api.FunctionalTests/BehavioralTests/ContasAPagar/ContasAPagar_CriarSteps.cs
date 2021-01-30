using FluentAssertions;
using MyMoney.Api.FunctionalTests.Config;
using MyMoney.Api.WebApi;
using MyMoney.Api.WebApi.ViewModels;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net;
using System.Net.Http.Json;
using System.Threading.Tasks;
using TechTalk.SpecFlow;
using Xunit;

namespace MyMoney.Api.FunctionalTests.BehavioralTests.ContasAPagar
{
    [Binding]
    [Collection(nameof(BehavioralTestsFixtureCollection))]
    public class ContasAPagar_CriarSteps
    {
        private readonly BehavioralTestsFixture<StartupTests> _testsFixture;

        public ContasAPagar_CriarSteps(BehavioralTestsFixture<StartupTests> testsFixture)
        {
            _testsFixture = testsFixture;
        }

        [When(@"for adiconada uma nova conta a pagar")]
        public async Task QuandoForAdiconadaUmaNovaContaAPagarAsync()
        {
            // Arrange&Act
            await _testsFixture.CriarContaAPagarValidaAsync();

            // Assert
            _testsFixture.Response.EnsureSuccessStatusCode();
        }

        [Then(@"a nova conta a pagar será adicionada à base de dados")]
        public async Task EntaoANovaContaAPagarSeraAdicionadaABaseDeDadosAsync()
        {
            // Arrange&Act
            await _testsFixture.ObterContaAPagarAsync(_testsFixture.ContaAPagarViewModel.Id);
            var contaAPagarViewModel = await _testsFixture.Response.Content.ReadFromJsonAsync<ContaAPagarViewModel>();

            // Assert
            contaAPagarViewModel.Should().NotBeNull();
        }

        [Then(@"será devolvida a nova conta a pagar")]
        public async Task EntaoSeraDevolvidaANovaContaAPagarAsync()
        {
            // Arrange&Act
            var retorno =
                await _testsFixture.Response.Content.ReadFromJsonAsync<RetornoSucessoViewModel>();

            // Assert
            retorno.Should().NotBeNull();
            retorno.Success.Should().BeTrue();
            retorno.Data.Should().NotBeNull();

            var contaAPagarRecebida = JsonConvert.DeserializeObject<ContaAPagarViewModel>(retorno.Data.ToString());
            contaAPagarRecebida.Nome.Should().Be(_testsFixture.ContaAPagarViewModel.Nome);
            contaAPagarRecebida.Descricao.Should().Be(_testsFixture.ContaAPagarViewModel.Descricao);
            contaAPagarRecebida.DataVencimento.Should().Be(_testsFixture.ContaAPagarViewModel.DataVencimento);
            contaAPagarRecebida.Valor.Should().Be(_testsFixture.ContaAPagarViewModel.Valor);
            contaAPagarRecebida.Id.Should().NotBeEmpty();

            await _testsFixture.RemoverContaAPagarAsync(contaAPagarRecebida.Id);
        }
        [When(@"for adiconada uma nova conta a pagar com dados inválidos")]
        public async Task QuandoForAdiconadaUmaNovaContaAPagarComDadosInvalidosAsync()
        {
            // Arrange&Act
            await _testsFixture.CriarContaAPagarInvalidaAsync();

            // Assert
            _testsFixture.Response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Then(@"será devolvida mensagem de erro")]
        public async Task EntaoSeraDevolvidaMensagemDeErroAsync()
        {
            // Arrange&Act
            var retorno =
                await _testsFixture.Response.Content.ReadFromJsonAsync<RetornoErroViewModel>();

            // Assert
            retorno.Should().NotBeNull();
            retorno.Success.Should().BeFalse();
            retorno.Errors.Should().NotBeNull();

            var erros = JsonConvert.DeserializeObject<List<string>>(retorno.Errors.ToString());
            erros.Count.Should().Be(2);
        }
    }
}
