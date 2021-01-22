using MyMoney.Api.Business.Interfaces;
using System.Threading.Tasks;
using MyMoney.Api.Data.Context;

namespace MyMoney.Api.Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MyMoneyDbContext _context;

        public UnitOfWork(MyMoneyDbContext context)
        {
            _context = context;
        }

        public async Task<bool> CommitAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
