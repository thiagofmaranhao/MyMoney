class ResponseLoginModel {
  bool success;
  Data data;

  ResponseLoginModel({this.success, this.data});

  ResponseLoginModel.fromJson(Map<String, dynamic> json) {
    success = json['success'];
    data = json['data'] != null ? new Data.fromJson(json['data']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['success'] = this.success;
    if (this.data != null) {
      data['data'] = this.data.toJson();
    }
    return data;
  }
}

class Data {
  String accessToken;
  int expiresIn;
  UserToken userToken;

  Data({this.accessToken, this.expiresIn, this.userToken});

  Data.fromJson(Map<String, dynamic> json) {
    accessToken = json['accessToken'];
    expiresIn = json['expiresIn'];
    userToken = json['userToken'] != null
        ? new UserToken.fromJson(json['userToken'])
        : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['accessToken'] = this.accessToken;
    data['expiresIn'] = this.expiresIn;
    if (this.userToken != null) {
      data['userToken'] = this.userToken.toJson();
    }
    return data;
  }
}

class UserToken {
  String id;
  String email;
  List<Claims> claims;

  UserToken({this.id, this.email, this.claims});

  UserToken.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    email = json['email'];
    if (json['claims'] != null) {
      claims = new List<Claims>();
      json['claims'].forEach((v) {
        claims.add(new Claims.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['email'] = this.email;
    if (this.claims != null) {
      data['claims'] = this.claims.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Claims {
  String value;
  String type;

  Claims({this.value, this.type});

  Claims.fromJson(Map<String, dynamic> json) {
    value = json['value'];
    type = json['type'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['value'] = this.value;
    data['type'] = this.type;
    return data;
  }
}
