abstract class WasmImpl {
  WasmImpl.fromAssets(String path);
  Future<bool> init();
  bool get isReady;
  Future function(String name);
  Future functionParam(String name, dynamic input);
}
