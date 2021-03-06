﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyMoney.Api.Business.Interfaces;
using MyMoney.Api.Business.Models;
using MyMoney.Api.WebApi.Controllers;
using MyMoney.Api.WebApi.Extensions;
using MyMoney.Api.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

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

        [ClaimsAuthorize("ContasAPagar", "Consultar")]
        [HttpGet]
        public async Task<IEnumerable<ContaAPagarViewModel>> ObterTodosAsync()
        {
            return _mapper.Map<IEnumerable<ContaAPagarViewModel>>(await _contaAPagarRepository.ObterTodosAsync());
        }

        [ClaimsAuthorize("ContasAPagar", "Consultar")]
        [HttpGet("{id:guid}")]
        public async Task<ActionResult<ContaAPagarViewModel>> ObterPorIdAsync(Guid id)
        {
            var contaAPagarViewModel = await ObterContaAPagarViewModelAsync(id);

            if (contaAPagarViewModel == null) return NotFound();

            return contaAPagarViewModel;
        }

        [ClaimsAuthorize("ContasAPagar", "Criar")]
        [HttpPost]
        public async Task<ActionResult<ContaAPagarViewModel>> CriarAsync(ContaAPagarViewModel contaAPagarViewModel)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var contaAPagar = _mapper.Map<ContaAPagar>(contaAPagarViewModel);

            await _contaAPagarService.AdicionarAsync(contaAPagar);

            return CustomResponse(_mapper.Map<ContaAPagarViewModel>(contaAPagar));
        }

        [ClaimsAuthorize("ContasAPagar", "Atualizar")]
        [HttpPut("{id:guid}")]
        public async Task<ActionResult<ContaAPagarViewModel>> AlterarAsync(Guid id,
            ContaAPagarViewModel contaAPagarViewModel)
        {
            if (id != contaAPagarViewModel.Id)
            {
                NotificarErro("O id informado não é o mesmo que foi passado na query");
                return CustomResponse(contaAPagarViewModel);
            }

            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var contaAPagarBase = await ObterContaAPagarViewModelAsync(id);

            if (contaAPagarBase == null) return NotFound();

            var contaAPagar = _mapper.Map<ContaAPagar>(contaAPagarViewModel);

            await _contaAPagarService.AtualizarAsync(contaAPagar);

            return CustomResponse(contaAPagarViewModel);
        }

        [ClaimsAuthorize("ContasAPagar", "Remover")]
        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<ContaAPagarViewModel>> RemoverAsync(Guid id)
        {
            var contaAPagarViewModel = await ObterContaAPagarViewModelAsync(id);

            if (contaAPagarViewModel == null) return NotFound();

            await _contaAPagarService.RemoverAsync(id);

            return CustomResponse(contaAPagarViewModel);
        }

        private async Task<ContaAPagarViewModel> ObterContaAPagarViewModelAsync(Guid id)
        {
            return _mapper.Map<ContaAPagarViewModel>(await _contaAPagarRepository.ObterPorIdAsync(id));
        }
    }
}
