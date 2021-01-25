using Microsoft.EntityFrameworkCore;
using MyMoney.Api.Business.Interfaces;
using MyMoney.Api.Business.Models;
using MyMoney.Api.Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace MyMoney.Api.Data.Repository
{
    public abstract class Repository<TEntity> : IRepository<TEntity> where TEntity : Entity, new()
    {
        protected readonly MyMoneyDbContext Db;
        protected readonly DbSet<TEntity> DbSet;

        protected Repository(MyMoneyDbContext db)
        {
            Db = db;
            DbSet = db.Set<TEntity>();
        }

        public async Task<IEnumerable<TEntity>> BuscarAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await DbSet.AsNoTracking().Where(predicate).ToListAsync();
        }

        public virtual async Task<TEntity> ObterPorIdAsync(Guid id)
        {
            return await DbSet.FindAsync(id);
        }

        public virtual async Task<List<TEntity>> ObterTodosAsync()
        {
            return await DbSet.AsNoTracking().ToListAsync();
        }

        public virtual void Adicionar(TEntity entity)
        {
            DbSet.Add(entity);
        }

        public virtual void Atualizar(TEntity entity)
        {
            DbSet.Update(entity);
        }

        public virtual void Remover(Guid id)
        {
            DbSet.Remove(new TEntity { Id = id });
        }

        public void Dispose()
        {
            Db?.Dispose();
        }
    }
}
