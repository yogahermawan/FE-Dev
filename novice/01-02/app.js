var nilai = []

try {
  try {
    throw new Error('input salah!'); //error bisa terserah kita
    //statement dijalankan dulu
  }
  catch (err) {
    console.error('mohon maaf', err.message);
  }
  finally {
    console.log('Apapun kondisinya finaly dijalankan');
  }
}
catch (ex) {
  console.error('penanganan error Ex', ex.message);
}