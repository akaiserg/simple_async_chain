async function d (resultBeforeThis) { 
  return  new Promise (resolve => {
    setTimeout(()=>{
		resolve(resultBeforeThis+' function d()');
	}, 2000)
  });
}

module.exports = d;
