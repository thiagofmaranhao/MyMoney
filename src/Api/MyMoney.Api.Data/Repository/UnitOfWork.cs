using MyMoney.Api.Business.Interfaces;
using MyMoney.Api.Data.Context;
using System.Threading.Tasks;

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
