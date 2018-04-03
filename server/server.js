const express = require('express');
const path = require('path');
const parser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const db = require('../db/db.js');

const app = express();
const PORT = 3000;

app.use(parser.json());

app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use(express.static(path.join(__dirname, '../dist')))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const isUserLoggedIn = function(req, res, next) {
	console.log(req.session.user);
	if (!req.session.user) {
		res.redirect('/login');
	}
	next()
}

app.post('/login', function(req, res) {
	console.log('Login POST REQ', req.body);

  var getResponse = function(responseBool) {
      var userInfo = {
        username: req.body.username,
        userId: 1, //??????
      }
      req.session.user = userInfo;

      var responseObj = {
        success: responseBool
      }
      console.log('----Response Obj: ', responseObj)
      res.send(responseObj);
  }
	
  var queryString = `SELECT username, password FROM users WHERE users.username = "${req.body.username}"`
	db.query(queryString, function(err, result) {
		if (err) {
			console.log('Login User Query error: ', err)
		} else {
      if (result[0] !== undefined) {
        if (result[0].password === req.body.password) {
          console.log('login password MATCHED!')
          getResponse(true);

        } else {
          console.log('INCORRECT login password!')
          getResponse(false);
        }
      } else {
        getResponse(false);
      }
      
    }
	})
	
})

app.post('/signup', function(req, res) {
  console.log('SignUp POST REQ: ', req.body)
  var responseBool;
  var getSignUpRes = function(responseBool) {
    var responseObj = {
      success: responseBool,
    }
    res.send(responseObj);
  }

  var queryString = `SELECT username FROM users WHERE users.username = "${req.body.username}"`
  db.query(queryString, function(err, result) {
    if (err) {
      console.log('Signup User Query Error: ', err)
    } 
    console.log('SIGN UP QUERY Result: ', result)
    if (!result.length) {
      var insertString = `INSERT INTO users (username, password) VALUES ("${req.body.username}", "${req.body.password}")`;
      db.query(insertString, function(err, result) {
        getSignUpRes(true);
      })
    } else {
      getSignUpRes(false);
    }
  })

})

app.get('/checker', function(req, res) {
	console.log(req.session.user)
	console.log(req.session);
	res.send("cool")
})

app.get('/login', function(req, res) {
	if (req.session.user) {
		res.redirect('/dashboard/statistics');
	}
	res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('*', isUserLoggedIn, function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})
