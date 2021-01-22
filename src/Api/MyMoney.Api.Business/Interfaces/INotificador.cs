using System.Collections.Generic;
using MyMoney.Api.Business.Notifications;

namespace MyMoney.Api.Business.Interfaces
{
    public interface INotificador
    {
        bool TemNotificacao();
        List<Notificacao> ObterNotificacoes();
        void Handle(Notificacao notificacao);
    }
}
