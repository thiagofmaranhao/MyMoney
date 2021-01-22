using MyMoney.Api.Business.Interfaces;
using MyMoney.Api.Business.Models;
using MyMoney.Api.Data.Context;

namespace MyMoney.Api.Data.Repository
{
    public class ContaAPagarRepository : Repository<ContaAPagar>, IContaAPagarRepository
    {
        public ContaAPagarRepository(MyMoneyDbContext db) : base(db)
        {
        }
    }
}
