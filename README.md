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
- Web
- App

## Detalhes Técnicos
- IDE: Visual Studio Community 2019
- Linguagem: C#
- Framework: .NET Core 3.1
- Extensions
  - Code Cracker for C# (2019)
  - Editor Guidelines
  - ReSharper
  - SpecFlow for Visual Studio 2019
  - Fine Code Coverage
- Integração Contínua (Actions do GitHub) 

## Atividades de Implementação
- Api
  - Funcionalidades
    - Contas à Pagar 
      - Obter
      - ObterTodas
      - Criar 
      - Alterar
      - Excluir
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
    - Testes
      - TDD
      - Testes de Unidade
      - Testes de api usando pacotes AspNetCore
      - Teste de Carga
    - Segurança
      - Autenticação via Identity
      - Customização de mensagens do Identity para Português
      - JWT
      - Autorização baseada em Claims
    - Deploy
      - IIS Local
      - [Pendente] Cloud
- [Pendente] Web
  - [Pendente] Gerenciamento das Contas à pagar em aplicação Web
- [Pendente] App
  - [Pendente] Gerenciamento das Contas à pagar em mobile app
