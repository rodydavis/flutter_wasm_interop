library flutter_wasm_interop;

export 'src/unsupported.dart'
    if (dart.library.html) 'src/web.dart'
    if (dart.library.io) 'src/io.dart';
