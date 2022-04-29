setTimeout(() => {
  console.log('hello');
  setTimeout(() => {
    setTimeout(() => {
      console.log('hello2');
    }, 7000);
    console.log('hello1');
  }, 5000);
}, 2000);
