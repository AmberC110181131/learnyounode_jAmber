const http = require('http');
const bl = require('bl');

http.get(process.argv[2],function(response){
    response.pipe(bl(function (err, data){
        if(err){
            return console.err(err);
        }
        response.on("data",function(data){
            const str = data.toString();
            console.log(str);
        });
    }));
});
