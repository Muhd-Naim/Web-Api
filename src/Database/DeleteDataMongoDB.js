const Record = require('./ConnectMongoDB');

Record.deleteOne ({ Title:'Sword Art Online'}, function(err) {
    if (err) return handleError (err);
} );
