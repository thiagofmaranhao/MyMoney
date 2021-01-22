using Microsoft.AspNetCore.Mvc;
using MyMoney.Api.Business.Interfaces;
using MyMoney.Api.WebApi.Controllers;

namespace MyMoney.Api.WebApi.V2.Controllers
{
    [ApiVersion("2.0")]
    [Route("api/v{version:apiVersion}/teste")]
    public class TesteController : MainController
    {
        public TesteController(INotificador notificador) : base(notificador)
        {
        }

        [HttpGet]
        public static string Valor()
        {
            return "Estou funcionando!";
        }
    }
}
