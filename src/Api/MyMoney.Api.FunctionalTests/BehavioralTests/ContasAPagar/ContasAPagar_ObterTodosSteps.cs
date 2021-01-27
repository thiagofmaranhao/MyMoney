using FluentAssertions;
using MyMoney.Api.Business.Models;
using MyMoney.Api.FunctionalTests.Config;
using MyMoney.Api.WebApi;
using MyMoney.Api.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Threading.Tasks;
using TechTalk.SpecFlow;
using Xunit;

namespace MyMoney.Api.FunctionalTests.BehavioralTests.ContasAPagar
{
    [Binding]
    [Collection(nameof(BehavioralTestsFixtureCollection))]
    public class ContasAPagar_ObterTodosSteps
    {
        private readonly BehavioralTestsFixture<StartupTests> _testsFixture;

        public ContasAPagar_ObterTodosSteps(BehavioralTestsFixture<StartupTests> testsFixture)
        {
            _testsFixture = testsFixture;
        }

        [When(@"existirem contas à pagar cadastradas")]
        public async Task QuandoExistiremContasAPagarCadastradasAsync()
        {
            // Arrange&Act
            await _testsFixture.CriarContaAPagarValidaAsync();

            // Assert
            _testsFixture.Response.EnsureSuccessStatusCode();
        }

        [When(@"for enviada requisição para obter todas as contas à pagar")]
        public async Task QuandoForEnviadaRequisicaoParaObterTodasAsContasAPagarAsync()
        {
            await _testsFixture.ObterTodasContasAPagarAsync();
        }

        [When(@"não existirem contas à pagar cadastradas")]
        public async Task QuandoNaoExistiremContasAPagarCadastradasAsync()
        {
            // Arrange&Act
            await _testsFixture.ObterTodasContasAPagarAsync();

            var contasAPagar =
                (await _testsFixture.Response.Content.ReadFromJsonAsync<IEnumerable<ContaAPagarViewModel>>())
                .ToList();

            contasAPagar.ForEach(async c => await _testsFixture.RemoverContaAPagarDaBaseAsync(c.Id));
        }

        [Then(@"todas as contas à pagar serão retornadas")]
        public async Task EntaoTodasAsContasAPagarSeraoRetornadasAsync()
        {
            // Arrange&Act
            var contasAPagar =
                (await _testsFixture.Response.Content.ReadFromJsonAsync<IEnumerable<ContaAPagarViewModel>>())
                .ToList();

            // Assert
            contasAPagar.Should().NotBeNull();
            contasAPagar.Count.Should().BePositive();

            contasAPagar.ForEach(async c => await _testsFixture.RemoverContaAPagarDaBaseAsync(c.Id));
        }

        [Then(@"será retornada uma lista vazia de contas à pagar")]
        public async Task EntaoSeraRetornadaUmaListaVaziaDeContasAPagarAsync()
        {
            // Arrange&Act
            var contasAPagar =
                (await _testsFixture.Response.Content.ReadFromJsonAsync<IEnumerable<ContaAPagarViewModel>>())
                .ToList();

            // Assert
            contasAPagar.Should().NotBeNull();
            contasAPagar.Count.Should().Be(0);
        }
    }
}
