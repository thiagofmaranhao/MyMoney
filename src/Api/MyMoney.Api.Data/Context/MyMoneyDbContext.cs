using Microsoft.EntityFrameworkCore;
using MyMoney.Api.Business.Models;
using MyMoney.Api.Data.Mappings;

namespace MyMoney.Api.Data.Context
{
    public class MyMoneyDbContext : DbContext
    {
        public MyMoneyDbContext(DbContextOptions<MyMoneyDbContext> options) : base(options) { }

        public DbSet<ContaAPagar> ContasAPagar { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ContaAPagarMapping());
        }
    }
}
