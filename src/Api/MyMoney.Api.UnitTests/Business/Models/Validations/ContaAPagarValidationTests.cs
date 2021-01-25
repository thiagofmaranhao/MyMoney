using System;
using System.Linq;
using FluentAssertions;
using MyMoney.Api.Business.Models;
using MyMoney.Api.Business.Models.Validations;
using Xunit;

namespace MyMoney.Api.UnitTests.Business.Models.Validations
{
    public class ContaAPagarValidationTests
    {
        [Fact(DisplayName = "Conta a pagar válida")]
        [Trait("Unidade - Business", nameof(ContaAPagarValidation))]
        public void Validation_ContaAPagarValida_Sucesso()
        {
            // Arrange
            var contaAPagar = new ContaAPagar
            {
                Nome = "Energia",
                Descricao = "Conta de Energia - Energisa",
                DataVencimento = DateTime.Today,
                Valor = 100
            };

            var contaAPagarValidation = new ContaAPagarValidation();

            // Act
            var validator = contaAPagarValidation.Validate(contaAPagar);

            // Assert
            validator.IsValid.Should().BeTrue();
        }

        [Fact(DisplayName = "Conta a pagar sem nome")]
        [Trait("Unidade - Business", nameof(ContaAPagarValidation))]
        public void Validation_ContaAPagarSemNome_Erro()
        {
            // Arrange
            var contaAPagar = new ContaAPagar
            {
                Descricao = "Conta de Energia - Energisa",
                DataVencimento = DateTime.Today,
                Valor = 100
            };

            var contaAPagarValidation = new ContaAPagarValidation();

            // Act
            var validator = contaAPagarValidation.Validate(contaAPagar);

            // Assert
            validator.IsValid.Should().BeFalse();
            validator.Errors.Count.Should().Be(1);

            var erroEsperado = ContaAPagarValidation.ErroCampoObrigatorio
                .Replace("{PropertyName}", nameof(ContaAPagar.Nome));

            validator.Errors.Select(e => e.ErrorMessage == erroEsperado)?.Count().Should().Be(1);
        }

        [Fact(DisplayName = "Conta a pagar com nome de tamanho 1")]
        [Trait("Unidade - Business", nameof(ContaAPagarValidation))]
        public void Validation_ContaAPagarComNomeTamanho1_Erro()
        {
            // Arrange
            var contaAPagar = new ContaAPagar
            {
                Nome = "A",
                Descricao = "Conta de Energia - Energisa",
                DataVencimento = DateTime.Today,
                Valor = 100
            };

            var contaAPagarValidation = new ContaAPagarValidation();

            // Act
            var validator = contaAPagarValidation.Validate(contaAPagar);

            // Assert
            validator.IsValid.Should().BeFalse();
            validator.Errors.Count.Should().Be(1);

            var erroEsperado = ContaAPagarValidation.ErroTamanhoCampo
                .Replace("{PropertyName}", nameof(ContaAPagar.Nome))
                .Replace("{MinLength}", ContaAPagarValidation.TamanhoMinimoNome.ToString())
                .Replace("{MaxLength}", ContaAPagarValidation.TamanhoMaximoNome.ToString());

            validator.Errors.Select(e => e.ErrorMessage == erroEsperado)?.Count().Should().Be(1);
        }

        [Fact(DisplayName = "Conta a pagar com nome de tamanho maio que 100")]
        [Trait("Unidade - Business", nameof(ContaAPagarValidation))]
        public void Validation_ContaAPagarComNomeTamanhoMaiorQue100_Erro()
        {
            // Arrange
            var contaAPagar = new ContaAPagar
            {
                Nome = "".PadRight(101, 'A'),
                Descricao = "Conta de Energia - Energisa",
                DataVencimento = DateTime.Today,
                Valor = 100
            };

            var contaAPagarValidation = new ContaAPagarValidation();

            // Act
            var validator = contaAPagarValidation.Validate(contaAPagar);

            // Assert
            validator.IsValid.Should().BeFalse();
            validator.Errors.Count.Should().Be(1);

            var erroEsperado = ContaAPagarValidation.ErroTamanhoCampo
                .Replace("{PropertyName}", nameof(ContaAPagar.Nome))
                .Replace("{MinLength}", ContaAPagarValidation.TamanhoMinimoNome.ToString())
                .Replace("{MaxLength}", ContaAPagarValidation.TamanhoMaximoNome.ToString());

            validator.Errors.Select(e => e.ErrorMessage == erroEsperado)?.Count().Should().Be(1);
        }

        [Fact(DisplayName = "Conta a pagar com descricao de tamanho 1")]
        [Trait("Unidade - Business", nameof(ContaAPagarValidation))]
        public void Validation_ContaAPagarComDescricaoTamanho1_Erro()
        {
            // Arrange
            var contaAPagar = new ContaAPagar
            {
                Nome = "Energia",
                Descricao = "E",
                DataVencimento = DateTime.Today,
                Valor = 100
            };

            var contaAPagarValidation = new ContaAPagarValidation();

            // Act
            var validator = contaAPagarValidation.Validate(contaAPagar);

            // Assert
            validator.IsValid.Should().BeFalse();
            validator.Errors.Count.Should().Be(1);

            var erroEsperado = ContaAPagarValidation.ErroTamanhoCampo
                .Replace("{PropertyName}", nameof(ContaAPagar.Descricao))
                .Replace("{MinLength}", ContaAPagarValidation.TamanhoMinimoNome.ToString())
                .Replace("{MaxLength}", ContaAPagarValidation.TamanhoMaximoNome.ToString());

            validator.Errors.Select(e => e.ErrorMessage == erroEsperado)?.Count().Should().Be(1);
        }

        [Fact(DisplayName = "Conta a pagar com descrição de tamanho maio que 100")]
        [Trait("Unidade - Business", nameof(ContaAPagarValidation))]
        public void Validation_ContaAPagarComDescricaoTamanhoMaiorQue100_Erro()
        {
            // Arrange
            var contaAPagar = new ContaAPagar
            {
                Nome = "Energia",
                Descricao = "".PadRight(501, 'A'),
                DataVencimento = DateTime.Today,
                Valor = 100
            };

            var contaAPagarValidation = new ContaAPagarValidation();

            // Act
            var validator = contaAPagarValidation.Validate(contaAPagar);

            // Assert
            validator.IsValid.Should().BeFalse();
            validator.Errors.Count.Should().Be(1);

            var erroEsperado = ContaAPagarValidation.ErroTamanhoCampo
                .Replace("{PropertyName}", nameof(ContaAPagar.Descricao))
                .Replace("{MinLength}", ContaAPagarValidation.TamanhoMinimoNome.ToString())
                .Replace("{MaxLength}", ContaAPagarValidation.TamanhoMaximoNome.ToString());

            validator.Errors.Select(e => e.ErrorMessage == erroEsperado)?.Count().Should().Be(1);
        }

        [Fact(DisplayName = "Conta a pagar sem valor")]
        [Trait("Unidade - Business", nameof(ContaAPagarValidation))]
        public void Validation_ContaAPagarSemValor_Erro()
        {
            // Arrange
            var contaAPagar = new ContaAPagar
            {
                Nome = "Energia",
                Descricao = "Conta de Energia - Energisa",
                DataVencimento = DateTime.Today
            };

            var contaAPagarValidation = new ContaAPagarValidation();

            // Act
            var validator = contaAPagarValidation.Validate(contaAPagar);

            // Assert
            validator.IsValid.Should().BeFalse();
            validator.Errors.Count.Should().Be(1);

            var erroEsperado = ContaAPagarValidation.ErroCampoObrigatorio
                .Replace("{PropertyName}", nameof(ContaAPagar.Valor));

            validator.Errors.Select(e => e.ErrorMessage == erroEsperado)?.Count().Should().Be(1);
        }

        [Fact(DisplayName = "Conta a pagar com valor negativo")]
        [Trait("Unidade - Business", nameof(ContaAPagarValidation))]
        public void Validation_ContaAPagarComValorNegativo_Erro()
        {
            // Arrange
            var contaAPagar = new ContaAPagar
            {
                Nome = "Energia",
                Descricao = "Conta de Energia - Energisa",
                DataVencimento = DateTime.Today,
                Valor = -1
            };

            var contaAPagarValidation = new ContaAPagarValidation();

            // Act
            var validator = contaAPagarValidation.Validate(contaAPagar);

            // Assert
            validator.IsValid.Should().BeFalse();
            validator.Errors.Count.Should().Be(1);

            var erroEsperado = ContaAPagarValidation.ErroValorMinimo
                .Replace("{PropertyName}", nameof(ContaAPagar.Valor));

            validator.Errors.Select(e => e.ErrorMessage == erroEsperado)?.Count().Should().Be(1);
        }
    }
}
