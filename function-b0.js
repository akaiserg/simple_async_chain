async function b0 (resultBeforeThis) { 
  return  new Promise ((resolve,reject) => {
    setTimeout(()=>{
		reject('error function b0');
	}, 2000)
  });
}

module.exports = b0;
