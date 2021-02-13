import 'package:flutter_test/flutter_test.dart';
import 'package:mymoney_app/app/models/login_user_model.dart';
import 'package:mymoney_app/app/repositories/auth_repository.dart';

main() {
  test('login com sucesso', () async {
    final repository = AuthRepository();
    final login =
        LoginUserModel(email: 'teste@teste.com', password: 'Teste@123');
    final responseLogin = await repository.autenticar(login);
    expect(responseLogin.success, true);
  });

  test('login com erro', () async {
    final repository = AuthRepository();
    final login =
        LoginUserModel(email: 'asasasteste.com', password: 'Teste@123');

    expect(() async => await repository.autenticar(login), throwsException);
  });
}
