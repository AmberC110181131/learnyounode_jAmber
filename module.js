const myModule = require('./my-module.js');
const dir = process.argv[2];
const ext = process.argv[3];

myModule(dir, ext, callback);

function callback(err, list){
    if(err) {
        return console.err(err);
    }
	for(let i = 0; i <= list.length -1; i++){
		console.log(list[i]) ;
	}
}
