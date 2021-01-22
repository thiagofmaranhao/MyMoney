﻿using AutoMapper;
using MyMoney.Api.Business.Models;
using MyMoney.Api.WebApi.ViewModel;

namespace MyMoney.Api.WebApi.Configuration
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<ContaAPagar, ContaAPagarViewModel>().ReverseMap();
        }
    }
}
