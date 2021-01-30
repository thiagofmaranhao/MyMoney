using MyMoney.Api.Business.Notifications;
using System.Collections.Generic;

namespace MyMoney.Api.Business.Interfaces
{
    public interface INotificador
    {
        bool TemNotificacao();
        List<Notificacao> ObterNotificacoes();
        void Handle(Notificacao notificacao);
    }
}
