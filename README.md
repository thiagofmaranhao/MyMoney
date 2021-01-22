# MyMoney
Sistema de Controle Financeiro

*Sistema criado com a intenção de ser útil pessoalmente, mas com foco principal de aplicação dos conhecimentos adquiridos em cursos, palestras e eventos*

## Funcionalidades Previstas
- Contas à Pagar
  - Criar
  - Alterar
  - Excluir
  - Obter Conta à Pagar
  - Obter Todas as Contas à Pagar
  - Anexar Arquivo
  - Enviar alertas de contas à pagar
  
## Módulos Previstos
- Api
- Gerenciador de Alertas
- Web
- App

## Ferramentas Utilizadas
- IDE: Visual Studio Community 2019
- Linguagem: C#
- Framework: .NET Core 3.1
- Extensions
  - Code Cracker for C# (2019)
  - Editor Guidelines
  - ReSharper
  - SpecFlow for Visual Studio 2019
  - Fine Code Coverage

## Atividades de Implementação
- Api
  - Funcionalidades
    - [Em Desenvolvimento] Contas à Pagar 
      - Criar 
      - [Pendente] Alterar
      - [Pendente] Excluir
      - [Pendente] Obter
      - [Pendente] ObterTodas
  - Arquitetura do Software (Projetos)
    - MyMoney.Api (WebApi)
    - MyMoney.Business (Camada de negócio)
    - MyMoney.Data (Camada de Acesso a Dados)
  - Tecnologias & Frameworks Utilizados:
    - Versionamento de API
    - Swagger (gerado automaticamente)
    - EntityFramework
    - BDD (SpecFLow)			
    - EntityFramework + UnitOfWork
    - AutoMapper    
    - Log (KissLog)
    - HealthCheck
    - Integração com Telegram (aslerta de erros HelthCheck)    
    - Postman (teste da API)
    - Testes
      - TDD
      - Testes de Unidade
      - Testes de api usando pacotes AspNetCore
      - Teste de Carga
    - Deploy IIS
    - [Em Desenvolvimento] Segurança
    - [Pendente] Eventos (eventos de criação, alteração e exclusão) Definir ferramenta
- [Pendente] GerenciadorDeAlertas [Não Iniciado]
  - [Pendente] Tipos de Alertas
    - [Pendente] Enviar Alertas ao iniciar serviço
    - [Pendente] Enviar Alerta diário em horário específico
    - [Pendente] Enviar Alerta após receber evento de inclusão, alteração e exclusão
- [Pendente] Web
  - [Pendente] Gerenciamento das Contas à pagar em aplicação Web
- [Pendente] App
  - [Pendente] Gerenciamento das Contas à pagar em mobile app
