Funcionalidade: Conta A Pagar - Obter Todos
	Como cliente da API do MyMoney
	Eu gostaria de obter todas as contas à pagar

Cenario: Obter todas as contas à pagar com sucesso - Contas à pagar existentes
	Quando for realizada a autenticação com um usuário válido
	E existirem contas à pagar cadastradas
	E for enviada requisição para obter todas as contas à pagar
	Entao todas as contas à pagar serão retornadas