import 'package:flutter/material.dart';
import 'package:mymoney_app/app/controllers/login_controller.dart';
import 'package:mymoney_app/app/models/login_user_model.dart';
import 'package:mymoney_app/app/models/response_login_model.dart';

class LoginView extends StatefulWidget {
  String email;

  @override
  _LoginViewState createState() => _LoginViewState();
}

class _LoginViewState extends State<LoginView> {
  final _loginController = LoginController();

  ResponseLoginModel responseLogin;

  String email = '';
  String senha = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: SizedBox(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  width: 400,
                  height: 80,
                  child: Image.asset('assets/images/logo.png'),
                ),
                Container(height: 10),
                Card(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Column(
                      children: [
                        TextField(
                          onChanged: (text) {
                            email = text;
                          },
                          keyboardType: TextInputType.emailAddress,
                          decoration: InputDecoration(
                              labelText: 'Email', border: OutlineInputBorder()),
                        ),
                        SizedBox(height: 10),
                        TextField(
                          onChanged: (text) {
                            senha = text;
                          },
                          obscureText: true,
                          decoration: InputDecoration(
                              labelText: 'Senha', border: OutlineInputBorder()),
                        ),
                        SizedBox(height: 15),
                        RaisedButton(
                          textColor: Colors.white,
                          color: Colors.lightBlueAccent,
                          onPressed: () async {
                            await _loginController.login(
                                LoginUserModel(email: email, password: senha));

                            if (_loginController.respostaLogin != null) {
                              widget.email = _loginController
                                  .respostaLogin.data.userToken.email;
                              Navigator.of(context)
                                  .pushReplacementNamed('/home');
                            } else {
                              _showDialog(context);
                            }
                          },
                          child: Container(
                              width: double.infinity,
                              child: Text(
                                'Entrar',
                                textAlign: TextAlign.center,
                              )),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

void _showDialog(BuildContext context) {
  showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Erro'),
          content: Text('Usuário e/ou senha inválido(s)'),
          actions: [
            FlatButton(
              child: Text('Fechar'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      });
}
