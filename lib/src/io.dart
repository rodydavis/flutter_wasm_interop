import 'dart:async';
import 'dart:ffi' as ffi;
import 'dart:io' show File, Platform;
import 'dart:io';

import 'package:flutter/services.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

import 'impl.dart';

// Create a typedef with the FFI type signature of the C function.
// Commonly used types defined by dart:ffi library include Double, Int32, NativeFunction, Pointer, Struct, Uint8, and Void.
typedef run_wasm_func = ffi.Void Function();

// Create a typedef for the variable that you’ll use when calling the C function.
typedef RunWasm = void Function();

FutureOr<void> runWasm(String libName, String method) async {
  ffi.DynamicLibrary dylib;
  // Open the dynamic library that contains the C function.
  String _file;
  if (Platform.isMacOS || Platform.isIOS) {
    _file = await copyAssetFile('target/debug/$libName.dylib');
  }
  if (Platform.isWindows) {
    _file = await copyAssetFile('target/debug/$libName.dll');
  }
  if (Platform.isLinux) {
    _file = await copyAssetFile('target/debug/$libName.so');
  }
  if (_file == null) {
    print('Could Not Load File..');
    return;
  }
  dylib = ffi.DynamicLibrary.open(_file);

  // Get a reference to the C function, and put it into a variable. This code uses the typedefs defined in steps 2 and 3, along with the dynamic library variable from step 4.
  final RunWasm run_wasm =
      dylib.lookup<ffi.NativeFunction<run_wasm_func>>(method).asFunction();

  // Call the C function.
  run_wasm();
}

Map<String, String> _cachedLibs = {};

Future<String> copyAssetFile(String path, [bool cache = false]) async {
  String _result;
  if (!cache || _cachedLibs[path] == null) {
    String _dir = Directory.current.path;
    if (Platform.isIOS) {
      _dir = await _localPath;
    }
    if (Platform.isMacOS || Platform.isLinux || Platform.isWindows) {
      _dir = await _localPath;
    }
    final _file = File(p.joinAll([_dir, path.split('/').last]));
    final _filePath = _file.path;
    print('File Path: $_filePath');
    if (!_file.existsSync()) await _file.createSync(recursive: true);
    final _lib = await rootBundle.load('$path');
    _file.writeAsBytesSync(_lib.buffer.asUint8List());
    _cachedLibs[path] = _filePath;
    _result = _filePath;
  }
  return _result;
}

Future<String> get _localPath async {
  final directory = await getApplicationDocumentsDirectory();
  return directory.path;
}

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
