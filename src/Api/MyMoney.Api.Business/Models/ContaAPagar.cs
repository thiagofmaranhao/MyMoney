using System;

namespace MyMoney.Api.Business.Models
{
    public class ContaAPagar : Entity
    {
        public string Nome { get; set; }

        public string Descricao { get; set; }

        public decimal Valor { get; set; }

        public DateTime? DataVencimento { get; set; }
    }
}
