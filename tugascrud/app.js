(function() {
    'use strict';
  
    var http = require('http'),
      express = require('express'), //express
      path = require('path'), //buat path folder
      bodyParser = require('body-parser'), //handle rest
      errorhandler = require('errorhandler'), //ngehandleerror

      mongoose = require('mongoose'), //mongoose
      cookieParser = require('cookie-parser'),
      BukuRoute = require('./routes/BukuRoutes'), //routing ke buku
      app = express();
  



    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
  
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'bower_components')));
  
    app.use('/', BukuRoute);
  
    mongoose.connect('mongodb://localhost/bukucrud', function(err, res) { //masalah db disini
      if (err) {
        // return logger.error('koneksi mongodb gagal', err);
      } else {
        // return logger.info('koneksi mongodb berhasil');
      }
    });
  
    if ('development' === app.get('env')) {
      app.use(errorhandler());
    }
  
    app.use(function(err, req, res, next) {
      if (err.code !== 'EBADCSRFTOKEN') return next(err)
  
      // handle CSRF token errors here
      res.status(403)
      res.send('csrf token tidak tersedia bung');
    });
  
    var server = http.createServer(app);
    server.listen(app.get('port'), function() {
      return console.log('Server jalan pada port ' + app.get('port'));
    });
  
  }).call(this);