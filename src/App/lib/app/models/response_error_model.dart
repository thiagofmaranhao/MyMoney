class ResponseErrorModel {
  bool success;
  List<String> errors;

  ResponseErrorModel({this.success, this.errors});

  ResponseErrorModel.fromJson(Map<String, dynamic> json) {
    success = json['success'];
    errors = json['errors'].cast<String>();
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['success'] = this.success;
    data['errors'] = this.errors;
    return data;
  }
}
