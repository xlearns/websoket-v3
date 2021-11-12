import {VITE_WEBSOCKET_IP } from "@/utils/config"
function useWebSocket(
  handleMessage: (this: WebSocket, ev: MessageEvent<any>) => any,
  closeFn:(e:any)=>any,
  errorFn:(e:any)=>any
) {
  const ws = new WebSocket(VITE_WEBSOCKET_IP)

  const init = () => {
    bindEvent()
  }

  function bindEvent() {
    ws.addEventListener('open', handleOpen, false)
    ws.addEventListener('close', handleClose, false)
    ws.addEventListener('error', handleError, false)
    ws.addEventListener('message', handleMessage, false)
  }

  function handleOpen(e: any) {
    console.log('socket 已打开', e)
  }
  
  function handleClose(e: any) {
    console.log('socket 已关闭', e)
    closeFn&&closeFn(e)
  }

  function handleError(e: any) {
    console.log('socket error', e)
    errorFn&&errorFn(e)
  }

  init()

  return ws
}

export default useWebSocket