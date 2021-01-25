# Teste de Carga da API My Money
Instruções para execução dos testes de carga da API MyMoney

# Ambiente do teste de Carga

Obs: Essas instruções são válidas para o cenário em que será compartilhado o ambiente de Homlogação e de Teste de Carga.

Como o ambiente será compartilhado, é necessário fazer algumas alterações para evitar impacto no ambiente de homologação, como:
- Uso do banco de dados de homologação

# Instruções para preparação do ambiente do teste de carga
- Acessar o IIS e parar o site mymoney.api
- Copiar o arquivo appsettings.Homologacao.json localizado na pasta MyMoney/src/Api/MyMoney.Api.Tests/LoadTests/appSettings para o diretório da aplicação no IIS C:\inetpub\wwwroot\mymoney.api
- Iniciar o site mymoney.api

# Gerar relatório do teste de carga no JMeter (UI)
- Acessar o menu Tools -> Generate HTML Report
- No campo Results file, colocar o caminho do arquivo de resultado .csv do View Results Tree
- No campo user.propeties file. colocar o caminho do arquivo user.properties dentro da pasta bin do jmeter
- No campo Output directory, colocar o caminho da pasta do relatório a ser gerado

# Execução do teste de carga via linha de comando
```cmd
jmeter -n -t C:\repos\MyMoney\src\Api\MyMoney.Api.Tests\LoadTests\ContasAPagar\ContasAPagar.Carga.Criar.jmx -l C:\repos\MyMoney\src\Api\MyMoney.Api.Tests\LoadTests\ContasAPagar\ContasAPagar.Carga.Criar.Result.csv -e -o C:\repos\MyMoney\src\Api\MyMoney.Api.Tests\LoadTests\ContasAPagar\ContasAPagar.Carga.Criar.Relatorio
```
