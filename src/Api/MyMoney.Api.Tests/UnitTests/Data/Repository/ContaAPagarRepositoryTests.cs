using MyMoney.Api.Business.Models;
using MyMoney.Api.Data.Repository;
using MyMoney.Api.Tests.Config;
using System;
using System.Threading.Tasks;
using Xunit;

namespace MyMoney.Api.Tests.UnitTests.Data.Repository
{
    public class ContaAPagarRepositoryTests : RepositoryTestsBase
    {
        private readonly ContaAPagarRepository _repository;

        public ContaAPagarRepositoryTests()
        {
            _repository = new ContaAPagarRepository(GetContext());
        }

        [Fact(DisplayName = "Adicionar Conta a Pagar com Sucesso")]
        [Trait("Unidade - Data", nameof(ContaAPagarRepository))]
        public void AdicionarContaAPagar_Sucesso()
        {
            // Arrange
            var contaAPagar = new ContaAPagar
            {
                Nome = "Energia",
                Descricao = "Conta de Energia - Energisa",
                DataVencimento = DateTime.Today,
                Valor = 100
            };

            // Act&Assert
            _repository.Adicionar(contaAPagar);
        }
    }
}
