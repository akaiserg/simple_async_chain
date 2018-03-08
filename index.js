const a = require('./function-a');
const b = require('./function-b');
const b0 = require('./function-b0');
const c = require('./function-c');
const d = require('./function-d');
(async function () {
  try{
    let result= await a();
	  console.info(result);
	  result= await b(result);
	  console.info(result);
	  result= await c(result);
	  console.info(result);
	  result= await d(result);
    console.info(result);
    console.info('with error');
    result = '';
    result= await a();
	  console.info(result);
	  result= await b(result);
    console.info(result);
    result= await b0(result);
	  result= await c(result);
	  console.info(result);
	  result= await d(result);
    console.info(result);
}catch(er){
	console.info(er)
}		
})();