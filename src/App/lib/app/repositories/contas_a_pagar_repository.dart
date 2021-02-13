import 'dart:convert';

import 'package:mymoney_app/app/models/contas_a_pagar_model.dart';

class ContasAPagarRepository {
  Future<List<ContasAPagarModel>> obterTodasContasAPagar() async {
    final list = jsonDecode(jsonData) as List;
    return list.map((json) => ContasAPagarModel.fromJson(json)).toList();
  }
}

// TODO: Remover quando a api de contas à pagar estiver disponível na web
String jsonData = ''' 

[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "nome": "Deso",
    "descricao": "Conta de Água",
    "valor": 50,
    "dataVencimento": "2021-02-13T13:31:13.695Z"
  },
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afb7",
    "nome": "Energisa",
    "descricao": "Conta de Energia",
    "valor": 300,
    "dataVencimento": "2021-02-14T13:31:13.695Z"
  },
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afc8",
    "nome": "Condomínio",
    "descricao": "Condomínio Vista Beira Mar",
    "valor": 500,
    "dataVencimento": "2021-02-15T13:31:13.695Z"
  }
]

''';
