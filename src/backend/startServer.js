const {app} = require('./appServer')
const {app2} = require('./authServer')

const start = () => {
    app.start();
    app2.start();
}