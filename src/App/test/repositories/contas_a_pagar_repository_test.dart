import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:mymoney_app/app/repositories/contas_a_pagar_repository.dart';

main() {
  test('deve retornar lista de contas a pagar', () async {
    final repository = ContasAPagarRepository();

    var lista = await repository.obterTodasContasAPagar();
    print(jsonEncode(lista));
  });
}
