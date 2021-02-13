import 'package:mymoney_app/app/models/login_user_model.dart';
import 'package:mymoney_app/app/models/response_login_model.dart';
import 'package:mymoney_app/app/repositories/auth_repository.dart';

class LoginController {
  ResponseLoginModel respostaLogin;
  final AuthRepository _repository;

  LoginController([AuthRepository repository])
      : _repository = repository ?? AuthRepository();

  Future login(LoginUserModel login) async {
    try {
      respostaLogin = await _repository.autenticar(login);
    } catch (e) {
      respostaLogin = null;
    }
  }
}
