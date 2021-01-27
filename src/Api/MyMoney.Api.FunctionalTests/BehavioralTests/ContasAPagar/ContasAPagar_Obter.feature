Funcionalidade: Conta A Pagar - Obter Conta à Pagar
Como cliente da API do MyMoney
Eu gostaria de obter uma conta à pagar

Cenario: Obter conta à pagar - Conta existente
Quando for realizada a autenticação com um usuário válido
E existir uma conta à pagar
E for enviada requisição para obter a conta à pagar existente
Entao a conta à pagar será retornada

Cenario: Obter conta à pagar - Conta inexistente
Quando for realizada a autenticação com um usuário válido
E for enviada requisição para obter a conta à pagar inexistente
Entao será retornado StatusCode 404_Not_Found