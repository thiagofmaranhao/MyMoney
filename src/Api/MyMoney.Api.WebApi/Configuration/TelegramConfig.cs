using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RestSharp;
using System;

namespace MyMoney.Api.WebApi.Configuration
{
    public static class TelegramConfig
    {
        public static IServiceCollection AddTelegramConfig(this IServiceCollection services)
        {
            services.AddSingleton<IMyMoneyBot, MyMoneyBot>();

            return services;
        }
    }

    internal interface IMyMoneyBot
    {
        void EnviarMensagem(string mensagem);
    }

    internal class MyMoneyBot : IMyMoneyBot
    {
        private readonly IRestClient _restClient;

        private string ChatIdParameterName => "chat_id";
        private string ChatIdParameterValue => "-1001446413625";
        private string TextParameterName => "text";
        private string ResourceSendMessage => "sendmessage";
        private string Bot => "bot";

        public MyMoneyBot(IConfiguration configuration)
        {
            var identificadorBot = Bot + Environment.GetEnvironmentVariable("TELEGRAM_TOKEN_BOT_MYMONEY");

            var baseUrl = configuration["Telegram.ApiUrl"] + "/" + identificadorBot;

            _restClient = new RestClient(baseUrl);
        }

        public void EnviarMensagem(string mensagem)
        {
            var request = new RestRequest(ResourceSendMessage);

            request.AddQueryParameter(ChatIdParameterName, ChatIdParameterValue);
            request.AddQueryParameter(TextParameterName, mensagem);

            _restClient.Post(request);
        }
    }
}
