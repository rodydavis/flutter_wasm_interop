var N = null;var sourcesIndex = {};
sourcesIndex["adder"] = {"name":"","files":["lib.rs"]};
sourcesIndex["arrayref"] = {"name":"","files":["lib.rs"]};
sourcesIndex["arrayvec"] = {"name":"","files":["array.rs","array_string.rs","char.rs","errors.rs","lib.rs","maybe_uninit.rs"]};
sourcesIndex["bincode"] = {"name":"","dirs":[{"name":"de","files":["mod.rs","read.rs"]},{"name":"ser","files":["mod.rs"]}],"files":["config.rs","error.rs","internal.rs","lib.rs"]};
sourcesIndex["bitflags"] = {"name":"","files":["lib.rs"]};
sourcesIndex["blake2b_simd"] = {"name":"","files":["avx2.rs","blake2bp.rs","guts.rs","lib.rs","many.rs","portable.rs","sse41.rs"]};
sourcesIndex["byteorder"] = {"name":"","files":["io.rs","lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["constant_time_eq"] = {"name":"","files":["lib.rs"]};
sourcesIndex["cranelift_bforest"] = {"name":"","files":["lib.rs","map.rs","node.rs","path.rs","pool.rs","set.rs"]};
sourcesIndex["cranelift_codegen"] = {"name":"","dirs":[{"name":"binemit","files":["memorysink.rs","mod.rs","relaxation.rs","shrink.rs","stackmap.rs"]},{"name":"ir","files":["builder.rs","constant.rs","dfg.rs","entities.rs","extfunc.rs","extname.rs","framelayout.rs","function.rs","globalvalue.rs","heap.rs","immediates.rs","instructions.rs","jumptable.rs","layout.rs","libcall.rs","memflags.rs","mod.rs","progpoint.rs","sourceloc.rs","stackslot.rs","table.rs","trapcode.rs","types.rs","valueloc.rs"]},{"name":"isa","dirs":[{"name":"x86","files":["abi.rs","binemit.rs","enc_tables.rs","mod.rs","registers.rs","settings.rs","unwind.rs"]}],"files":["call_conv.rs","constraints.rs","enc_tables.rs","encoding.rs","mod.rs","registers.rs","stack.rs"]},{"name":"legalizer","files":["boundary.rs","call.rs","globalvalue.rs","heap.rs","libcall.rs","mod.rs","split.rs","table.rs"]},{"name":"regalloc","files":["affinity.rs","branch_splitting.rs","coalescing.rs","coloring.rs","context.rs","diversion.rs","live_value_tracker.rs","liveness.rs","liverange.rs","mod.rs","pressure.rs","register_set.rs","reload.rs","safepoint.rs","solver.rs","spilling.rs","virtregs.rs"]},{"name":"verifier","files":["cssa.rs","flags.rs","liveness.rs","locations.rs","mod.rs"]}],"files":["abi.rs","bitset.rs","cfg_printer.rs","constant_hash.rs","context.rs","cursor.rs","dbg.rs","dce.rs","divconst_magic_numbers.rs","dominator_tree.rs","flowgraph.rs","fx.rs","iterators.rs","lib.rs","licm.rs","loop_analysis.rs","nan_canonicalization.rs","partition_slice.rs","postopt.rs","predicates.rs","print_errors.rs","redundant_reload_remover.rs","result.rs","scoped_hash_map.rs","settings.rs","simple_gvn.rs","simple_preopt.rs","stack_layout.rs","timing.rs","topo_order.rs","unreachable_code.rs","value_label.rs","write.rs"]};
sourcesIndex["cranelift_codegen_shared"] = {"name":"","dirs":[{"name":"isa","dirs":[{"name":"x86","files":["encoding_bits.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["condcodes.rs","constant_hash.rs","constants.rs","lib.rs"]};
sourcesIndex["cranelift_entity"] = {"name":"","files":["boxed_slice.rs","iter.rs","keys.rs","lib.rs","list.rs","map.rs","packed_option.rs","primary.rs","set.rs","sparse.rs"]};
sourcesIndex["cranelift_native"] = {"name":"","files":["lib.rs"]};
sourcesIndex["crossbeam_deque"] = {"name":"","files":["lib.rs"]};
sourcesIndex["crossbeam_epoch"] = {"name":"","dirs":[{"name":"sync","files":["list.rs","mod.rs","queue.rs"]}],"files":["atomic.rs","collector.rs","default.rs","deferred.rs","epoch.rs","guard.rs","internal.rs","lib.rs"]};
sourcesIndex["crossbeam_queue"] = {"name":"","files":["array_queue.rs","err.rs","lib.rs","seg_queue.rs"]};
sourcesIndex["crossbeam_utils"] = {"name":"","dirs":[{"name":"atomic","files":["atomic_cell.rs","consume.rs","mod.rs","seq_lock.rs"]},{"name":"sync","files":["mod.rs","parker.rs","sharded_lock.rs","wait_group.rs"]}],"files":["backoff.rs","cache_padded.rs","lib.rs","thread.rs"]};
sourcesIndex["digest"] = {"name":"","files":["digest.rs","errors.rs","lib.rs"]};
sourcesIndex["either"] = {"name":"","files":["lib.rs"]};
sourcesIndex["errno"] = {"name":"","files":["lib.rs","unix.rs"]};
sourcesIndex["generic_array"] = {"name":"","files":["arr.rs","functional.rs","hex.rs","impls.rs","iter.rs","lib.rs","sequence.rs"]};
sourcesIndex["hex"] = {"name":"","files":["lib.rs"]};
sourcesIndex["indexmap"] = {"name":"","files":["equivalent.rs","lib.rs","macros.rs","map.rs","mutable_keys.rs","serde.rs","set.rs","util.rs"]};
sourcesIndex["lazy_static"] = {"name":"","files":["inline_lazy.rs","lib.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"unix","dirs":[{"name":"bsd","dirs":[{"name":"apple","dirs":[{"name":"b64","files":["align.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["fixed_width_ints.rs","lib.rs","macros.rs"]};
sourcesIndex["lock_api"] = {"name":"","files":["lib.rs","mutex.rs","remutex.rs","rwlock.rs"]};
sourcesIndex["log"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["maybe_uninit"] = {"name":"","files":["lib.rs"]};
sourcesIndex["memmap"] = {"name":"","files":["lib.rs","unix.rs"]};
sourcesIndex["memoffset"] = {"name":"","files":["lib.rs","offset_of.rs","span_of.rs"]};
sourcesIndex["nix"] = {"name":"","dirs":[{"name":"net","files":["if_.rs","mod.rs"]},{"name":"sys","dirs":[{"name":"ioctl","files":["bsd.rs","mod.rs"]},{"name":"ptrace","files":["bsd.rs","mod.rs"]},{"name":"socket","files":["addr.rs","mod.rs","sockopt.rs"]}],"files":["aio.rs","event.rs","mman.rs","mod.rs","pthread.rs","select.rs","sendfile.rs","signal.rs","stat.rs","statfs.rs","statvfs.rs","termios.rs","time.rs","uio.rs","utsname.rs","wait.rs"]}],"files":["dir.rs","errno.rs","fcntl.rs","features.rs","ifaddrs.rs","lib.rs","macros.rs","poll.rs","pty.rs","sched.rs","unistd.rs"]};
sourcesIndex["num_cpus"] = {"name":"","files":["lib.rs"]};
sourcesIndex["page_size"] = {"name":"","files":["lib.rs"]};
sourcesIndex["parking_lot"] = {"name":"","files":["condvar.rs","deadlock.rs","elision.rs","lib.rs","mutex.rs","once.rs","raw_mutex.rs","raw_rwlock.rs","remutex.rs","rwlock.rs","util.rs"]};
sourcesIndex["parking_lot_core"] = {"name":"","dirs":[{"name":"thread_parker","files":["mod.rs","unix.rs"]}],"files":["lib.rs","parking_lot.rs","spinwait.rs","util.rs","word_lock.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["fallback.rs","lib.rs","strnom.rs","wrapper.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]};
sourcesIndex["raw_cpuid"] = {"name":"","files":["lib.rs"]};
sourcesIndex["rayon"] = {"name":"","dirs":[{"name":"collections","files":["binary_heap.rs","btree_map.rs","btree_set.rs","hash_map.rs","hash_set.rs","linked_list.rs","mod.rs","vec_deque.rs"]},{"name":"compile_fail","files":["cannot_collect_filtermap_data.rs","cannot_zip_filtered_data.rs","cell_par_iter.rs","mod.rs","must_use.rs","no_send_par_iter.rs","rc_par_iter.rs"]},{"name":"iter","dirs":[{"name":"collect","files":["consumer.rs","mod.rs"]},{"name":"find_first_last","files":["mod.rs"]},{"name":"plumbing","files":["mod.rs"]}],"files":["chain.rs","chunks.rs","cloned.rs","copied.rs","empty.rs","enumerate.rs","extend.rs","filter.rs","filter_map.rs","find.rs","flat_map.rs","flatten.rs","fold.rs","for_each.rs","from_par_iter.rs","inspect.rs","interleave.rs","interleave_shortest.rs","intersperse.rs","len.rs","map.rs","map_with.rs","mod.rs","multizip.rs","noop.rs","once.rs","panic_fuse.rs","par_bridge.rs","product.rs","reduce.rs","repeat.rs","rev.rs","skip.rs","splitter.rs","sum.rs","take.rs","try_fold.rs","try_reduce.rs","try_reduce_with.rs","unzip.rs","update.rs","while_some.rs","zip.rs","zip_eq.rs"]},{"name":"slice","files":["mergesort.rs","mod.rs","quicksort.rs"]}],"files":["delegate.rs","lib.rs","math.rs","option.rs","par_either.rs","prelude.rs","private.rs","range.rs","range_inclusive.rs","result.rs","split_producer.rs","str.rs","vec.rs"]};
sourcesIndex["rayon_core"] = {"name":"","dirs":[{"name":"compile_fail","files":["mod.rs","quicksort_race1.rs","quicksort_race2.rs","quicksort_race3.rs","rc_return.rs","rc_upvar.rs","scope_join_bad.rs"]},{"name":"join","files":["mod.rs"]},{"name":"scope","files":["mod.rs"]},{"name":"sleep","files":["mod.rs"]},{"name":"spawn","files":["mod.rs"]},{"name":"thread_pool","files":["mod.rs"]}],"files":["job.rs","latch.rs","lib.rs","log.rs","private.rs","registry.rs","unwind.rs","util.rs"]};
sourcesIndex["scopeguard"] = {"name":"","files":["lib.rs"]};
sourcesIndex["serde"] = {"name":"","dirs":[{"name":"de","files":["from_primitive.rs","ignored_any.rs","impls.rs","mod.rs","utf8.rs","value.rs"]},{"name":"private","files":["de.rs","macros.rs","mod.rs","ser.rs"]},{"name":"ser","files":["impls.rs","impossible.rs","mod.rs"]}],"files":["export.rs","integer128.rs","lib.rs","macros.rs"]};
sourcesIndex["serde_bench"] = {"name":"","files":["de.rs","error.rs","lib.rs","ser.rs"]};
sourcesIndex["serde_bytes"] = {"name":"","files":["bytebuf.rs","bytes.rs","de.rs","lib.rs","ser.rs"]};
sourcesIndex["serde_derive"] = {"name":"","dirs":[{"name":"internals","files":["ast.rs","attr.rs","case.rs","check.rs","ctxt.rs","mod.rs","symbol.rs"]}],"files":["bound.rs","de.rs","dummy.rs","fragment.rs","lib.rs","pretend.rs","ser.rs","try.rs"]};
sourcesIndex["smallvec"] = {"name":"","files":["lib.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["gen_helper.rs","visit.rs"]}],"files":["attr.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","error.rs","export.rs","expr.rs","ext.rs","generics.rs","group.rs","ident.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","path.rs","print.rs","punctuated.rs","sealed.rs","span.rs","spanned.rs","thread.rs","token.rs","ty.rs"]};
sourcesIndex["target_lexicon"] = {"name":"","files":["host.rs","lib.rs","parse_error.rs","targets.rs","triple.rs"]};
sourcesIndex["thiserror"] = {"name":"","files":["aserror.rs","display.rs","lib.rs"]};
sourcesIndex["thiserror_impl"] = {"name":"","files":["ast.rs","attr.rs","expand.rs","fmt.rs","lib.rs","prop.rs","valid.rs"]};
sourcesIndex["typenum"] = {"name":"","files":["array.rs","bit.rs","int.rs","lib.rs","marker_traits.rs","operator_aliases.rs","private.rs","type_operators.rs","uint.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["void"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmer_clif_backend"] = {"name":"","dirs":[{"name":"signal","files":["mod.rs","unix.rs"]}],"files":["cache.rs","code.rs","lib.rs","libcalls.rs","module.rs","relocation.rs","resolver.rs","trampoline.rs"]};
sourcesIndex["wasmer_clif_fork_frontend"] = {"name":"","files":["frontend.rs","lib.rs","ssa.rs","switch.rs","variable.rs"]};
sourcesIndex["wasmer_clif_fork_wasm"] = {"name":"","dirs":[{"name":"environ","files":["dummy.rs","mod.rs","spec.rs"]},{"name":"state","files":["func_state.rs","mod.rs","module_state.rs"]}],"files":["code_translator.rs","func_translator.rs","lib.rs","module_translator.rs","sections_translator.rs","translation_utils.rs"]};
sourcesIndex["wasmer_runtime"] = {"name":"","files":["cache.rs","lib.rs"]};
sourcesIndex["wasmer_runtime_core"] = {"name":"","dirs":[{"name":"memory","files":["dynamic.rs","mod.rs","ptr.rs","static_.rs","view.rs"]},{"name":"structures","files":["boxed.rs","map.rs","mod.rs","slice.rs"]},{"name":"sys","dirs":[{"name":"unix","files":["memory.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"table","files":["anyfunc.rs","mod.rs"]}],"files":["backend.rs","backing.rs","cache.rs","codegen.rs","error.rs","export.rs","fault.rs","global.rs","import.rs","instance.rs","lib.rs","loader.rs","macros.rs","module.rs","parse.rs","sig_registry.rs","state.rs","trampoline_x64.rs","typed_func.rs","types.rs","units.rs","vm.rs","vmcalls.rs"]};
sourcesIndex["wasmparser"] = {"name":"","dirs":[{"name":"readers","files":["code_section.rs","data_count_section.rs","data_section.rs","element_section.rs","export_section.rs","function_section.rs","global_section.rs","import_section.rs","init_expr.rs","linking_section.rs","memory_section.rs","mod.rs","module.rs","name_section.rs","operators.rs","producers_section.rs","reloc_section.rs","section_reader.rs","sourcemappingurl_section.rs","start_section.rs","table_section.rs","type_section.rs"]}],"files":["binary_reader.rs","lib.rs","limits.rs","operators_validator.rs","parser.rs","primitives.rs","tests.rs","validator.rs"]};
createSourceSidebar();
