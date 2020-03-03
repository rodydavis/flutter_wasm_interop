import 'impl.dart';

class WasmLoader extends WasmImpl {
  @override
  Future function(String name) {
    // TODO: implement function
    throw UnimplementedError();
  }

  @override
  Future functionParam(String name, input) {
    // TODO: implement functionParam
    throw UnimplementedError();
  }

  @override
  // TODO: implement isReady
  bool get isReady => throw UnimplementedError();

  WasmLoader.fromAssets(String path) : super.fromAssets(path);

  @override
  Future<bool> init() {
    // TODO: implement init
    throw UnimplementedError();
  }
}
