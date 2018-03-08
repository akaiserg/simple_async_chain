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
	result= await b0(result);
	console.info(result);
	result= await c(result);
	console.info(result);
	result= await d(result);
	console.info(result);
}catch(er){
	console.info(er)
}		
})();

/*const rp = require('request-promise')
async function main () {
  const result = await rp('https://google.com')
  const twenty = await 20
  
  // sleeeeeeeeping  for a second 
  await new Promise (resolve => {
    setTimeout(resolve, 1000)
  })
  return result
}
main()
  .then(console.log)
  .catch(console.error)

*/



