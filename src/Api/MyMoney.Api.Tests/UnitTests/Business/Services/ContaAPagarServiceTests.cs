using System;
using System.Threading.Tasks;
using FluentAssertions;
using Moq;
using Moq.AutoMock;
using MyMoney.Api.Business.Interfaces;
using MyMoney.Api.Business.Models;
using MyMoney.Api.Business.Notifications;
using MyMoney.Api.Business.Services;
using Xunit;

namespace MyMoney.Api.Tests.UnitTests.Business.Services
{
    public class ContaAPagarServiceTests
    {
        [Fact(DisplayName = "Adicionar Conta a Pagar com Sucesso")]
        [Trait("Unidade - Business", nameof(ContaAPagarService))]
        public async Task Adicionar_ContaAPagarValida_SucessoAsync()
        {
            // Arrange
            var mock = new AutoMocker();
            var contaAPagarService = mock.CreateInstance<ContaAPagarService>();

            mock.GetMock<IContaAPagarRepository>()
                .Setup(r => r.Adicionar(It.IsAny<ContaAPagar>()));

            mock.GetMock<IUnitOfWork>()
                .Setup(r => r.CommitAsync())
                .Returns(Task.FromResult(true));

            var contaAPagar = new ContaAPagar
            {
                Nome = "Energia",
                Descricao = "Conta de Energia - Energisa",
                DataVencimento = DateTime.Today,
                Valor = 100
            };

            // Act
            var itemAdicionado = await contaAPagarService.AdicionarAsync(contaAPagar);

            // Assert
            itemAdicionado.Should().BeTrue();
            mock.GetMock<INotificador>()
                .Verify(n => n.Handle(It.IsAny<Notificacao>()), Times.Never);
            mock.GetMock<IContaAPagarRepository>()
                .Verify(n => n.Adicionar(It.IsAny<ContaAPagar>()), Times.Once);
            mock.GetMock<IUnitOfWork>()
                .Verify(n => n.CommitAsync(), Times.Once);
        }

        [Fact(DisplayName = "Adicionar Conta a Pagar Inválida")]
        [Trait("Unidade - Business", nameof(ContaAPagarService))]
        public async Task Adicionar_ContaAPagarInvalida_ErroAsync()
        {
            // Arrange
            var mock = new AutoMocker();
            var contaAPagarService = mock.CreateInstance<ContaAPagarService>();
            var contaAPagar = new ContaAPagar();

            // Act
            var itemAdicionado = await contaAPagarService.AdicionarAsync(contaAPagar);

            // Assert
            itemAdicionado.Should().BeFalse();
            mock.GetMock<INotificador>()
                .Verify(n => n.Handle(It.IsAny<Notificacao>()), Times.Exactly(2));
            mock.GetMock<IContaAPagarRepository>()
                .Verify(n => n.Adicionar(It.IsAny<ContaAPagar>()), Times.Never);
            mock.GetMock<IUnitOfWork>()
                .Verify(n => n.CommitAsync(), Times.Never);
        }
    }
}
