async function a () { 
  return  new Promise (resolve => {
    setTimeout(()=>{
		resolve('function a()');
	}, 2000)
  });
}

module.exports = a;
