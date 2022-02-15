const fs = require('fs');
fs.readFile  ( process.argv[2] , function ( err , contents ) {
    if(err){
        return console.log(err);
    }
    const str = contents.toString();
    const num = str.split("\n");
    console.log ( num.length - 1 );
});
