const http = require('http');

http.get(process.argv[2],function(response){
    response.on("data",function(data){
        const str = data.toString();
        console.log(str);
    });
    response.on("error",function(error){
        console.error(err);
    });
});