using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Threading.Tasks;
using FluentAssertions;
using MyMoney.Api.Business.Models;
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
    public class ContasAPagar_ObterTodosSteps
    {
        private readonly BehavioralTestsFixture<StartupTests> _testsFixture;
        private readonly ContasAPagarHelper _contasAPagarHelper;

        public ContasAPagar_ObterTodosSteps(BehavioralTestsFixture<StartupTests> testsFixture)
        {
            _testsFixture = testsFixture;
            _contasAPagarHelper = new ContasAPagarHelper(_testsFixture.Client);
        }

        [When(@"existirem contas à pagar cadastradas")]
        public async Task QuandoExistiremContasAPagarCadastradasAsync()
        {
            var contasAPagar = await _testsFixture.ContaAPagarRepository.ObterTodosAsync();

            if (contasAPagar == null || contasAPagar.Count == 0)
            {
                _testsFixture.ContaAPagarRepository.Adicionar(
                    new ContaAPagar
                    {
                        Nome = "Conta Teste",
                        Descricao = "Descricao Conta Teste",
                        DataVencimento = DateTime.Now,
                        Valor = 50
                    }
                    );
                await _testsFixture.Context.SaveChangesAsync();
            }
        }

        [When(@"for enviada requisição para obter todas as contas à pagar")]
        public async Task QuandoForEnviadaRequisicaoParaObterTodasAsContasAPagarAsync()
        {
            await _contasAPagarHelper.ObterTodasContasAPagarAsync();
        }

        [When(@"não existirem contas à pagar cadastradas")]
        public async Task QuandoNaoExistiremContasAPagarCadastradasAsync()
        {
            var contasAPagar = await _testsFixture.ContaAPagarRepository.ObterTodosAsync();

            if (contasAPagar != null && contasAPagar.Count > 0)
            {
                contasAPagar.ForEach(c => _testsFixture.ContaAPagarRepository.Remover(c.Id));
            }

            await _testsFixture.Context.SaveChangesAsync();
        }

        [Then(@"todas as contas à pagar serão retornadas")]
        public async Task EntaoTodasAsContasAPagarSeraoRetornadasAsync()
        {
            // Arrange&Act
            var contasAPagar =
                (await _contasAPagarHelper.Response.Content.ReadFromJsonAsync<IEnumerable<ContaAPagarViewModel>>())
                .ToList();

            // Assert
            contasAPagar.Should().NotBeNull();
            contasAPagar.Count.Should().BePositive();
        }

        [Then(@"será retornada uma lista vazia de contas à pagar")]
        public async Task EntaoSeraRetornadaUmaListaVaziaDeContasAPagarAsync()
        {
            // Arrange&Act
            var contasAPagar =
                (await _contasAPagarHelper.Response.Content.ReadFromJsonAsync<IEnumerable<ContaAPagarViewModel>>())
                .ToList();

            // Assert
            contasAPagar.Should().NotBeNull();
            contasAPagar.Count.Should().Be(0);
        }
    }
}
