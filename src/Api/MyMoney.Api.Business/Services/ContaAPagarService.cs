using MyMoney.Api.Business.Interfaces;
using MyMoney.Api.Business.Models;
using MyMoney.Api.Business.Models.Validations;
using System;
using System.Threading.Tasks;

namespace MyMoney.Api.Business.Services
{
    public class ContaAPagarService : BaseService, IContaAPagarService
    {
        private readonly IContaAPagarRepository _contaAPagarRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ContaAPagarService(INotificador notificador,
            IUnitOfWork unitOfWork,
            IContaAPagarRepository contaAPagarRepository) : base(notificador)
        {
            _contaAPagarRepository = contaAPagarRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<bool> AdicionarAsync(ContaAPagar contaAPagar)
        {
            if (!ExecutarValidacao(new ContaAPagarValidation(), contaAPagar)) return false;

            _contaAPagarRepository.Adicionar(contaAPagar);

            return await _unitOfWork.CommitAsync();
        }

        public void Dispose()
        {
            _contaAPagarRepository.Dispose();
        }
    }
}
