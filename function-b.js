async function b (resultBeforeThis) { 
  return  new Promise (resolve => {
    setTimeout(()=>{
		resolve(resultBeforeThis+' function b()');
	}, 2000)
  });
}

module.exports = b;
