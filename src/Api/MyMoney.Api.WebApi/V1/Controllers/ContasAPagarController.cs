using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using KissLog;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyMoney.Api.Business.Interfaces;
using MyMoney.Api.Business.Models;
using MyMoney.Api.WebApi.Controllers;
using MyMoney.Api.WebApi.Extensions;
using MyMoney.Api.WebApi.ViewModels;

namespace MyMoney.Api.WebApi.V1.Controllers
{
    [Authorize]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/contasapagar")]
    public class ContasAPagarController : MainController
    {
        private readonly IContaAPagarService _contaAPagarService;
        private readonly IContaAPagarRepository _contaAPagarRepository;
        private readonly IMapper _mapper;

        public ContasAPagarController(INotificador notificador,
            IMapper mapper,
            IContaAPagarService contaAPagarService,
            IContaAPagarRepository contaAPagarRepository) : base(notificador)
        {
            _contaAPagarService = contaAPagarService;
            _contaAPagarRepository = contaAPagarRepository;
            _mapper = mapper;
        }

        [ClaimsAuthorize("ContasAPagar","Criar")]
        [HttpPost]
        public async Task<ActionResult<ContaAPagarViewModel>> CriarAsync(ContaAPagarViewModel contaAPagarViewModel)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var contaAPagar = _mapper.Map<ContaAPagar>(contaAPagarViewModel);

            await _contaAPagarService.AdicionarAsync(contaAPagar);

            return CustomResponse(_mapper.Map<ContaAPagarViewModel>(contaAPagar));
        }

        [ClaimsAuthorize("ContasAPagar","Consultar")]
        [HttpGet]
        public async Task<IEnumerable<ContaAPagarViewModel>> ObterTodosAsync()
        {
            return _mapper.Map<IEnumerable<ContaAPagarViewModel>>(await _contaAPagarRepository.ObterTodosAsync());
        }

        [ClaimsAuthorize("ContasAPagar","Consultar")]
        [HttpGet("{id:guid}")]
        public async Task<ActionResult<ContaAPagarViewModel>> ObterPorIdAsync(Guid id)
        {
            var contaAPagarViewModel =
                _mapper.Map<ContaAPagarViewModel>(await _contaAPagarRepository.ObterPorIdAsync(id));

            if (contaAPagarViewModel == null) return NotFound();

            return contaAPagarViewModel;
        }
    }
}
