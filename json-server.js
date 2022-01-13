const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const router = jsonServer.router('db.json')
 let db = require('./db.json');

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router)

const testProfile = {
  email: 'feyyaz@test.com',
  firstName: 'Feyyaz',
  lastName: 'Akkuş'
};

const testToken = 'example-token';

const authUser = (req) => {
const data=  db.register.find((data) =>

  { 
    console.log('JSON Server is running')
    return req.body.email === data.email && req.body.password === data.password})
  return data;
}

server.post('/authdfdsf', (req, res) => {
  console.log("sfsfs")
  if (authUser(req)) {
    res.statusCode(200).json({
      success: true,
      token: testToken,
      profile: testProfile
    }
    );
  } else {
    res.status(401).json({
      
      success: false,
      error: 'Email or password incorrect'
    });
  }
});

server.post('/register', (req, res) => {
  console.log('JSON Server is running')
  res.status(200).json({
    success: true
  });
});

server.get('/profile', (req, res) => {
  console.log(req.headers);
  res.status(200).json({
    success: true,
    profile: testProfile
  });
});

// server.listen(3000, () => {
//   console.log('JSON Server is running..');
// });
// server.js

server.listen(3000, () => {
  console.log('JSON Server is running')
})