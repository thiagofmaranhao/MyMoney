using FluentValidation;

namespace MyMoney.Api.Business.Models.Validations
{
    public class ContaAPagarValidation : AbstractValidator<ContaAPagar>
    {
        public static string ErroCampoObrigatorio
            => "O campo {PropertyName} precisa ser fornecido";
        public static string ErroTamanhoCampo
            => "O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres";
        public static string ErroValorMinimo
            => "O campo {PropertyName} precisa ser maior do que 0";
        public static int TamanhoMinimoNome => 2;
        public static int TamanhoMaximoNome => 100;
        public static int TamanhoMinimoDescricao => 2;
        public static int TamanhoMaximoDescricao => 500;
        public static int ValorMinimo => 0;

        public ContaAPagarValidation()
        {
            RuleFor(c => c.Nome)
                .NotEmpty()
                    .WithMessage(ErroCampoObrigatorio)
                .Length(TamanhoMinimoNome, TamanhoMaximoNome)
                    .WithMessage(ErroTamanhoCampo);

            RuleFor(c => c.Descricao)
                .Length(TamanhoMinimoDescricao, TamanhoMaximoDescricao)
                    .WithMessage(ErroTamanhoCampo);

            RuleFor(c => c.Valor)
                .NotEmpty()
                    .WithMessage(ErroCampoObrigatorio)
                .GreaterThanOrEqualTo(ValorMinimo)
                    .WithMessage(ErroValorMinimo);
        }
    }
}
