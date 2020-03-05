try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
    }
    finally {
      console.log('finally');
      console.log("nggak tau");
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }