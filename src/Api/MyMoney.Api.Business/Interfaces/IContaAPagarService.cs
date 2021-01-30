using MyMoney.Api.Business.Models;
using System;
using System.Threading.Tasks;

namespace MyMoney.Api.Business.Interfaces
{
    public interface IContaAPagarService : IDisposable
    {
        Task<bool> AdicionarAsync(ContaAPagar contaAPagar);

        Task<bool> RemoverAsync(Guid id);

        Task<bool> AtualizarAsync(ContaAPagar contaAPagar);
    }
}
