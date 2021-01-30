Funcionalidade: Conta A Pagar - Excluir
	Como cliente da API do MyMoney
	Eu gostaria de excluir uma conta a pagar

Cenario: Excluir Conta A Pagar com sucesso
	Quando for realizada a autenticação com um usuário válido
	E for enviada exclusão de uma conta a pagar existente
	Entao será devolvida a conta a pagar excluída

Cenario: Alterar Conta A Pagar Inexistente
	Quando for realizada a autenticação com um usuário válido
	E for enviada exclusão de uma conta a pagar inexistente
	Entao será devolvido NotFound