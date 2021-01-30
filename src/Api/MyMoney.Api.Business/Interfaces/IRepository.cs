using MyMoney.Api.Business.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace MyMoney.Api.Business.Interfaces
{
    public interface IRepository<TEntity> : IDisposable where TEntity : Entity
    {
        void Adicionar(TEntity entity);
        Task<TEntity> ObterPorIdAsync(Guid id);
        Task<List<TEntity>> ObterTodosAsync();
        void Atualizar(TEntity entity);
        void Remover(Guid id);
        Task<IEnumerable<TEntity>> BuscarAsync(Expression<Func<TEntity, bool>> predicate);
    }
}
