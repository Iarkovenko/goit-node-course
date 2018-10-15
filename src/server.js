const bodeParser = require('body-parser');
const app = require('./modules/app')
const morgan = require("morgan");
const router = require("./routes/router");

const errorHandler = (err, req, res) => {
  console.log(err.stack);
  res.status(500); 
  res.send('Something broke!');
};

const startServer = port => {
  app
  .use(bodeParser.urlencoded({extended: false}))
  .use(bodeParser.json())
  .use(morgan('dev'))
  .use('/', router)
  .use(errorHandler)

  app.listen(port);

  console.log('Server was started at http://localhost:' + port)
}

module.exports = startServer;
