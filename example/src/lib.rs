use wasmer_runtime::{error, imports, instantiate, Func};
use bytes::{BytesMut, BufMut};

// #[no_mangle]
// pub extern "C" fn load_wasm() -> error::Result<()> {
//     // Let's get the .wasm file as bytes
//     let wasm_bytes = include_bytes!("add.wasm");

//     // Our import object, that allows exposing functions to our Wasm module.
//     // We're not importing anything, so make an empty import object.
//     let import_object = imports! {};

//     // Let's create an instance of Wasm module running in the wasmer-runtime
//     let instance = instantiate(wasm_bytes, &import_object)?;

//     // Let's get `add_one` as a function which takes one `u32` and returns one `u32`
//     let add_one: Func<u32, u32> = instance.func("add_one")?;
//     let result = add_one.call(42)?;

//     // Log the new value
//     println!("Result: {}", result);

//     // Asserting that the returned value from the function is our expected value.
//     assert_eq!(result, 43);

//     // Return OK since everything executed successfully!
//     Ok(())
// }

#[no_mangle]
pub extern "C" fn load_wasm() -> error::Result<()> {
    // Let's get the .wasm file as bytes
    let wasm_bytes = include_bytes!("add.wasm");

    // Our import object, that allows exposing functions to our Wasm module.
    // We're not importing anything, so make an empty import object.
    let import_object = imports! {};

    // Let's create an instance of Wasm module running in the wasmer-runtime
    let instance = instantiate(wasm_bytes, &import_object)?;

    // Let's get `add_one` as a function which takes one `u32` and returns one `u32`
    let add_one: Func<u32, u32> = instance.func("add_one")?;
    let result = add_one.call(42)?;

    // Log the new value
    println!("Result: {}", result);

    // Asserting that the returned value from the function is our expected value.
    assert_eq!(result, 43);

    // Return OK since everything executed successfully!
    Ok(())
}

#[no_mangle]
pub extern "C" fn call_function_string_param(value: Option<String>) {}

#[no_mangle]
pub extern "C" fn call_function_string_param_return_int(wasm_bytes: Option<bytes>, path: Option<String>) -> u32 {
    // let wasm_bytes = include_bytes!("add.wasm");
    let import_object = imports! {};
    let instance = instantiate(wasm_bytes, &import_object).expect("Failed to load wasm");
    let add_one: Func<u32, u32> = instance.func("add_one").expect("Failed to find func");
    let result = add_one.call(42).expect("Failed to call func");
    return result;
}
