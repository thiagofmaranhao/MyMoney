Funcionalidade: Conta A Pagar - Criar
	Como cliente da API do MyMoney
	Eu gostaria de incluir uma conta a pagar

Cenario: Criar Nova Conta A Pagar com sucesso
	Quando for realizada a autenticação com um usuário válido
	E for adiconada uma nova conta a pagar
	Entao a nova conta a pagar será adicionada à base de dados
	E será devolvida a nova conta a pagar

Cenario: Criar Nova Conta A Pagar Erro Dados Inválidos
	Quando for realizada a autenticação com um usuário válido
	E for adiconada uma nova conta a pagar com dados inválidos
	Entao a nova conta a pagar não será adicionada à base de dados
	E será devolvida mensagem de erro