const { server } = require(__dirname + '/../' + require(__dirname + '/../package.json').main);
const newman = require('newman')



newman.run({
    collection: require(__dirname + '/postman/Frontend Page Tests.postman_collection.json'),
    reporters: 'cli',
}, function(err, summary) {
    server.close();
    if (err || summary.run.failures.length) {
        process.exit(1);
    }
});
