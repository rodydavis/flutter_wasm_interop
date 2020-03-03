initSidebarItems({"enum":[["AioCancelStat","Return values for `AioCb::cancel` and `aio_cancel_all`"],["AioFsyncMode","Mode for `AioCb::fsync`.  Controls whether only data or both data and metadata are synced."],["Buffer","Owns (uniquely or shared) a memory buffer to keep it from `Drop`ing while the kernel has a pointer to it."],["LioMode","Mode for `lio_listio`"],["LioOpcode","When used with `lio_listio`, determines whether a given `aiocb` should be used for a read operation, a write operation, or ignored.  Has no effect for any other aio functions."]],"fn":[["aio_cancel_all","Cancels outstanding AIO requests for a given file descriptor."],["aio_suspend","Suspends the calling process until at least one of the specified `AioCb`s has completed, a signal is delivered, or the timeout has passed."]],"struct":[["AioCb","AIO Control Block."]]});