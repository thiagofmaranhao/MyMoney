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
    - [ ] Contas à Pagar 
      - [X] Criar 
      - [ ] Alterar
      - [ ] Excluir
      - [ ] Obter
      - [ ] ObterTodas
  - Arquitetura do Software (Projetos)
    - [X] MyMoney.Api (WebApi)
    - [X] MyMoney.Business (Camada de negócio)
    - [X] MyMoney.Data (Camada de Acesso a Dados)
  - Tecnologias & Frameworks Utilizados:
    - [X] Versionamento de API
    - [X] Swagger (gerado automaticamente)
    - [X] EntityFramework
    - [X] BDD (SpecFLow)			
    - [X] EntityFramework + UnitOfWork
    - [X] AutoMapper    
    - [X] Log (KissLog)
    - [X] HealthCheck
    - [X] Integração com Telegram (erros)    
    - [X] Postman (teste da API)
    - [X] Testes
      - [X] TDD
      - [X] Testes de Unidade
      - [X] Testes de api usando pacotes AspNetCore
      - [X] Teste de Carga
    - [X] Deploy IIS 
    - [ ] RabbitMQ (eventos de criação, alteração e exclusão) CQRS
    - [ ] Autenticação de usuário
- GerenciadorDeAlertas [Não Iniciado]
  - Tipos de Alertas
    - [ ] Enviar Alertas ao iniciar serviço
    - [ ] Enviar Alerta diário em horário específico
    - [ ] Enviar Alerta após receber evento de inclusão, alteração e exclusão
- Web [Não Iniciado]
  - [ ] Gerenciamento das Contas à pagar em aplicação Web
- App [Não Iniciado]
  - [ ] Gerenciamento das Contas à pagar em mobile app
