const express = require('express');
const path = require('path');
const parser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

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

//Router for Server
app.post('/login', function(req, res) {
	console.log('POST REQ', req.body);
	// GET the Data use user namename to query user table

	// On the result of the user see if the req.password is equal to the
	// database one
	var responseBool
	//If yes 
		responseBool = true;
	//If no 
		// responseBool = false;

	var userInfo = {
		username: req.body.username,
		userId: 1,
	}
	req.session.user = userInfo;

	var responseObj = {
		success: responseBool,
	}
	res.send(responseObj)
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
