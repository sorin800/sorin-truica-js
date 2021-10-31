function domLog(...parameters) {
  for (let i = 0; i < parameters.length; i++) {
    console.log(parameters[i]);
  }
}

domLog('test', 'test2');
