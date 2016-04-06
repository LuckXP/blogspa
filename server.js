var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport =require('passport');
var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/blogpost');
var router = express.Router();
var blogPostRouter = require('./routes/blogposts');
var tweetRoutes = require('./routes/tweet');
var BlogPost = require('./models/blogpost');
var flash = require('connect-flash');
var session = require('express-session');

app.set('view engine', 'html');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
};

app.use(session({
 secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
app.use(flash());

require('./config/passport')(passport);


// routes ======================================================================

require('./routes/user.js')(app, passport);

app.use('/api', blogPostRouter);
app.use('/api/tweets', tweetRoutes);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var port = process.env.PORT || 8080;

app.listen(port);
console.log('👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹\n💀   Blog is up on port ' + port +' 💀\n👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹 👹');