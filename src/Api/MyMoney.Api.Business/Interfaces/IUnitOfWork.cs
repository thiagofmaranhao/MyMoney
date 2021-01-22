using System.Threading.Tasks;

namespace MyMoney.Api.Business.Interfaces
{
    public interface IUnitOfWork
    {
        Task<bool> CommitAsync();
    }
}
