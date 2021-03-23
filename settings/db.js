const mongoose = require('mongoose');

module.exports.conectMongo = () => {
    mongoose.connect(process.env.URL_DB, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err, res) => {
        if (err) {
            throw new Error('Data Base is not conected');
        }
        return console.log('Data Base conected');
    });
}

// module.exports = { conectMongo };