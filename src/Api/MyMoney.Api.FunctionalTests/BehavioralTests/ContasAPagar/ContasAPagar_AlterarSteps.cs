using FluentAssertions;
using MyMoney.Api.FunctionalTests.Config;
using MyMoney.Api.WebApi;
using MyMoney.Api.WebApi.ViewModels;
using Newtonsoft.Json;
using System;
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
    public class ContasAPagar_AlterarSteps
    {
        private readonly BehavioralTestsFixture<StartupTests> _testsFixture;

        public ContasAPagar_AlterarSteps(BehavioralTestsFixture<StartupTests> testsFixture)
        {
            _testsFixture = testsFixture;
        }

        [When(@"for enviada alteração de uma conta a pagar existente")]
        public async Task QuandoForEnviadaAlteracaoDeUmaContaAPagarExistenteAsync()
        {
            // Arrange
            await _testsFixture.CriarContaAPagarValidaAsync();
            var retorno = await _testsFixture.Response.Content.ReadFromJsonAsync<RetornoSucessoViewModel>();
            var contaAPagarViewModel = JsonConvert.DeserializeObject<ContaAPagarViewModel>(retorno.Data.ToString());
            contaAPagarViewModel.Nome += "Alt";
            contaAPagarViewModel.Descricao += "Alt";
            contaAPagarViewModel.DataVencimento = DateTime.Now.AddDays(1);
            contaAPagarViewModel.Valor += 10;

            // Act
            await _testsFixture.AlterarContaAPagarAsync(contaAPagarViewModel);

            // Assert
            _testsFixture.Response.EnsureSuccessStatusCode();
        }

        [When(@"for enviada alteração de uma conta a pagar inexistente")]
        public async Task QuandoForEnviadaAlteracaoDeUmaContaAPagarInexistenteAsync()
        {
            // Arrange&Act
            await _testsFixture.AlterarContaAPagarAsync(new ContaAPagarViewModel
            {
                Id = Guid.NewGuid(),
                Nome = "XXX",
                Valor = 1
            });
        }

        [When(@"for enviada alteração de uma conta a pagar com id da url diferente do id do body")]
        public async Task QuandoForEnviadaAlteracaoDeUmaContaAPagarComIdDaUrlDiferenteDoIdDoBodyAsync()
        {
            // Arrange&Act
            await _testsFixture.AlterarContaAPagarAsync(Guid.NewGuid(), new ContaAPagarViewModel
            {
                Id = Guid.NewGuid(),
                Nome = "XXX",
                Valor = 1
            });
        }

        [When(@"for enviada alteração de uma conta a pagar existente com dados inválidos")]
        public async Task QuandoForEnviadaAlteracaoDeUmaContaAPagarExistenteComDadosInvalidosAsync()
        {
            // Arrange
            await _testsFixture.CriarContaAPagarValidaAsync();
            var retorno = await _testsFixture.Response.Content.ReadFromJsonAsync<RetornoSucessoViewModel>();
            var contaAPagarViewModel = JsonConvert.DeserializeObject<ContaAPagarViewModel>(retorno.Data.ToString());
            contaAPagarViewModel.Valor = -1;

            // Act&Assert
            await _testsFixture.AlterarContaAPagarAsync(contaAPagarViewModel);
        }

        [Then(@"a conta a pagar será alterada na base de dados")]
        public async Task EntaoAContaAPagarSeraAlteradaNaBaseDeDadosAsync()
        {
            // Arrange&Act
            await _testsFixture.ObterContaAPagarAsync(_testsFixture.ContaAPagarViewModel.Id);
            var contaAPagarViewModel = await _testsFixture.Response.Content.ReadFromJsonAsync<ContaAPagarViewModel>();

            // Assert
            contaAPagarViewModel.Should().NotBeNull();
        }

        [Then(@"será devolvida a conta a pagar alterada")]
        public async Task EntaoSeraDevolvidaAContaAPagarAlteradaAsync()
        {
            // Arrange&Act
            var contaAPagarViewModel = await _testsFixture.Response.Content.ReadFromJsonAsync<ContaAPagarViewModel>();

            // Assert
            contaAPagarViewModel.Id.Should().Be(contaAPagarViewModel.Id);
            contaAPagarViewModel.Nome.Should().Be(contaAPagarViewModel.Nome);
            contaAPagarViewModel.Descricao.Should().Be(contaAPagarViewModel.Descricao);
            contaAPagarViewModel.DataVencimento.Should().Be(contaAPagarViewModel.DataVencimento);
            contaAPagarViewModel.Valor.Should().Be(contaAPagarViewModel.Valor);

            await _testsFixture.RemoverContaAPagarAsync(contaAPagarViewModel.Id);
        }

        [Then(@"será devolvida NotFound")]
        public void EntaoSeraDevolvidaNotFound()
        {
            // Arrange&Act&Assert
            _testsFixture.Response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        [Then(@"será devolvido BadRequest")]
        public async Task EntaoSeraDevolvidoBadRequestAsync()
        {
            // Arrange&Act
            var retorno =
                await _testsFixture.Response.Content.ReadFromJsonAsync<RetornoErroViewModel>();

            // Assert
            _testsFixture.Response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
            retorno.Should().NotBeNull();
            retorno.Success.Should().BeFalse();
            retorno.Errors.Should().NotBeNull();

            var erros = JsonConvert.DeserializeObject<List<string>>(retorno.Errors.ToString());
            erros.Count.Should().Be(1);
        }
    }
}
