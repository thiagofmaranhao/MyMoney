using System.Collections.Generic;
using System.Linq;
using System.Net;
using FluentAssertions;
using MyMoney.Api.Tests.Config;
using MyMoney.Api.WebApi;
using MyMoney.Api.WebApi.ViewModel;
using Newtonsoft.Json;
using System.Net.Http.Json;
using System.Threading.Tasks;
using TechTalk.SpecFlow;
using Xunit;

namespace MyMoney.Api.Tests.BehavioralTests.ContasAPagar
{
    [Binding]
    [Collection(nameof(BehavioralTestsFixtureCollection))]
    public class ContaAPagar_CriarSteps
    {
        private readonly BehavioralTestsFixture<StartupTests> _testsFixture;
        private readonly ContasAPagarHelper _contasAPagarHelper;

        public ContaAPagar_CriarSteps(BehavioralTestsFixture<StartupTests> testsFixture)
        {
            _testsFixture = testsFixture;
            _contasAPagarHelper = new ContasAPagarHelper(_testsFixture.Client);
        }

        [When(@"for adiconada uma nova conta a pagar")]
        public async Task QuandoForAdiconadaUmaNovaContaAPagarAsync()
        {
            // Arrange
            var contaAPagar = _contasAPagarHelper.GerarContaAPagar();

            // Act
            await _contasAPagarHelper.CriarContaAPagarAsync(contaAPagar);

            // Assert
            _contasAPagarHelper.Response.EnsureSuccessStatusCode();
        }

        [Then(@"a nova conta a pagar será adicionada à base de dados")]
        public async Task EntaoANovaContaAPagarSeraAdicionadaABaseDeDadosAsync()
        {
            // Arrange&Act
            var contasAPagar = await _testsFixture.ContaAPagarRepository.BuscarAsync(
                c =>
                    c.Valor == _contasAPagarHelper.ContaAPagar.Valor &&
                    c.Descricao == _contasAPagarHelper.ContaAPagar.Descricao &&
                    c.Nome == _contasAPagarHelper.ContaAPagar.Nome &&
                    c.DataVencimento == _contasAPagarHelper.ContaAPagar.DataVencimento);

            // Assert
            contasAPagar.Should().NotBeNull();
        }

        [Then(@"será devolvida a nova conta a pagar")]
        public async Task EntaoSeraDevolvidaANovaContaAPagarAsync()
        {
            // Arrange&Act
            var retorno =
                await _contasAPagarHelper.Response.Content.ReadFromJsonAsync<RetornoSucessoViewModel>();

            // Assert
            retorno.Should().NotBeNull();
            retorno.Success.Should().BeTrue();
            retorno.Data.Should().NotBeNull();

            var contaAPagarRecebida = JsonConvert.DeserializeObject<ContaAPagarViewModel>(retorno.Data.ToString());
            contaAPagarRecebida.Nome.Should().Be(_contasAPagarHelper.ContaAPagar.Nome);
            contaAPagarRecebida.Descricao.Should().Be(_contasAPagarHelper.ContaAPagar.Descricao);
            contaAPagarRecebida.DataVencimento.Should().Be(_contasAPagarHelper.ContaAPagar.DataVencimento);
            contaAPagarRecebida.Valor.Should().Be(_contasAPagarHelper.ContaAPagar.Valor);
            contaAPagarRecebida.Id.Should().NotBeEmpty();
        }
        [When(@"for adiconada uma nova conta a pagar com dados inválidos")]
        public async Task QuandoForAdiconadaUmaNovaContaAPagarComDadosInvalidosAsync()
        {
            // Arrange
            var contaAPagar = _contasAPagarHelper.GerarContaAPagarInvalida();

            // Act
            await _contasAPagarHelper.CriarContaAPagarAsync(contaAPagar);

            // Assert
            _contasAPagarHelper.Response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Then(@"a nova conta a pagar não será adicionada à base de dados")]
        public async Task EntaoANovaContaAPagarNaoSeraAdicionadaABaseDeDadosAsync()
        {
            // Arrange&Act
            var contasAPagar = await _testsFixture.ContaAPagarRepository.BuscarAsync(
                c =>
                    c.Valor == _contasAPagarHelper.ContaAPagar.Valor &&
                    c.Descricao == _contasAPagarHelper.ContaAPagar.Descricao &&
                    c.Nome == _contasAPagarHelper.ContaAPagar.Nome &&
                    c.DataVencimento == _contasAPagarHelper.ContaAPagar.DataVencimento);

            // Assert
            contasAPagar.Count().Should().Be(0);
        }

        [Then(@"será devolvida mensagem de erro")]
        public async Task EntaoSeraDevolvidaMensagemDeErroAsync()
        {
            // Arrange&Act
            var retorno =
                await _contasAPagarHelper.Response.Content.ReadFromJsonAsync<RetornoErroViewModel>();

            // Assert
            retorno.Should().NotBeNull();
            retorno.Success.Should().BeFalse();
            retorno.Errors.Should().NotBeNull();

            var erros = JsonConvert.DeserializeObject<List<string>>(retorno.Errors.ToString());
            erros.Count.Should().Be(2);
        }
    }
}
