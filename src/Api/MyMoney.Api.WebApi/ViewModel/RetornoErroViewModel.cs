using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMoney.Api.WebApi.ViewModel
{
    public class RetornoErroViewModel
    {
        public bool Success { get; set; }

        public object Errors { get; set; }
    }
}
