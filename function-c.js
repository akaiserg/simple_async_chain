async function c (resultBeforeThis) { 
  return  new Promise (resolve => {
    setTimeout(()=>{
		resolve(resultBeforeThis+' function c()');
	}, 2000)
  });
}

module.exports = c;
