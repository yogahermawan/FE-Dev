function* generator(i) {
    yield i;
    yield i + 10; //increment
  }
  
  let gen = generator(10);
  
  console.log(gen.next().value);
  // expected output: 10
  
  console.log(gen.next().value);
  // expected output: 20

  let ambil = () => {
      console.log("hello world!");
  }

  console.log(ambil());
  
  function lempar(a,b) {
    return a+b;
  }
console.log(lempar(1,2));
