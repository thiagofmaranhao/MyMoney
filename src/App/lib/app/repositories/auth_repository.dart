import 'dart:convert';

import 'package:mymoney_app/app/models/login_user_model.dart';
import 'package:mymoney_app/app/models/response_login_model.dart';

class AuthRepository {
  //Dio _dio;
  //final url = 'https://10.0.2.2:80/api/v1/auth';

  //AuthRepository([Dio dio]) : _dio = dio ?? Dio();

  Future<ResponseLoginModel> autenticar(LoginUserModel login) async {
    //final response = await _dio.post(url, data: login.toJson());
    //return ResponseLoginModel.fromJson(response.data);
    if (login.email == 'teste@teste.com' && login.password == 'Teste@123')
      return ResponseLoginModel.fromJson(jsonDecode(jsonData));

    throw (Exception('Erro login'));
  }
}

// TODO: Remover quando a api de login estiver disponível na web
String jsonData = ''' 

{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDb250YXNBUGFnYXIiOiJDcmlhcixBdHVhbGl6YXIsUmVtb3ZlcixDb25zdWx0YXIiLCJzdWIiOiI5OTc3ZmNkZi04NDE3LTRlZTctYWI5MC1lOWY4MmZkYjVjYjAiLCJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImp0aSI6IjBhMDM0NjJhLTI2YzgtNDllYi04NGJiLWNhNjhiYzdmZGYyMiIsIm5iZiI6MTYxMzE2ODE5OSwiaWF0IjoxNjEzMTY4MTk5LCJleHAiOjE2MTMxNzUzOTksImlzcyI6Ik15TW9uZXkiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.wlo594E_zRDIIzihD7IVWcSMligTr34ra-JxbldQjP8",
    "expiresIn": 7200,
    "userToken": {
      "id": "9977fcdf-8417-4ee7-ab90-e9f82fdb5cb0",
      "email": "teste@teste.com",
      "claims": [
        {
          "value": "Criar,Atualizar,Remover,Consultar",
          "type": "ContasAPagar"
        },
        {
          "value": "9977fcdf-8417-4ee7-ab90-e9f82fdb5cb0",
          "type": "sub"
        },
        {
          "value": "teste@teste.com",
          "type": "email"
        },
        {
          "value": "0a03462a-26c8-49eb-84bb-ca68bc7fdf22",
          "type": "jti"
        },
        {
          "value": "1613168200",
          "type": "nbf"
        },
        {
          "value": "1613168200",
          "type": "iat"
        }
      ]
    }
  }
}

''';
