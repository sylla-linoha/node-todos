var configValues = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb+srv://${configValues.username}:${configValues.password}@node-todos-manak.mongodb.net/test?retryWrites=true&w=majority`;
    }
}