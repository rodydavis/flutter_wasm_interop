// Import dart:ffi.
import 'dart:async';
import 'package:flutter/services.dart';
import 'package:wasm_interop/wasm_interop.dart';

import 'impl.dart';

class WasmLoader extends WasmImpl {
  Instance _wasm;
  String _path;

  WasmLoader.fromAssets(String path)
      : _path = path,
        super.fromAssets(path);

  @override
  Future function(String name) {
    final _func = _wasm.functions[name];
    final _result = _func.call();
    return _result;
  }

  @override
  Future functionParam(String name, input) {
    final _func = _wasm.functions[name];
    final _result = _func.call(input);
    return _result;
  }

  @override
  bool get isReady => _wasm != null;

  @override
  Future<bool> init() async {
    assert(_path != null);
    final _data = await rootBundle.load(_path);
    _wasm = await Instance.fromBufferAsync(_data.buffer);
    return isReady;
  }
}
