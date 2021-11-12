# 使用
```js
<script setup>
  const socket = useWebSocket(handleMessage,closeFn,errorFn);
  function handleMessage(wx,msg){}
  function closeFn(e){}
  funcion errorFn(e){}
</script>
```
