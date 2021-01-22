using System.Threading.Tasks;
using AutoMapper;
using KissLog;
using Microsoft.AspNetCore.Mvc;
using MyMoney.Api.Business.Interfaces;
using MyMoney.Api.Business.Models;
using MyMoney.Api.WebApi.Controllers;
using MyMoney.Api.WebApi.ViewModel;

namespace MyMoney.Api.WebApi.V1.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/contasapagar")]
    public class ContasAPagarController : MainController
    {
        private readonly IContaAPagarService _contaAPagarService;
        private readonly IMapper _mapper;

        public ContasAPagarController(INotificador notificador,
            IMapper mapper,
            IContaAPagarService contaAPagarService) : base(notificador)
        {
            _contaAPagarService = contaAPagarService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult<ContaAPagarViewModel>> CriarAsync(ContaAPagarViewModel contaAPagarViewModel)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var contaAPagar = _mapper.Map<ContaAPagar>(contaAPagarViewModel);

            await _contaAPagarService.AdicionarAsync(contaAPagar);

            return CustomResponse(_mapper.Map<ContaAPagarViewModel>(contaAPagar));
        }
    }
}
