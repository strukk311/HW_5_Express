const express = require("express");
const router = express.Router();

const createError = require("http-errors");

const users = [
  {
    id: "12345",
    name: "Emily Ratakowski",
    posts: [
      { id: "1", text: "Hello world" },
      { id: "2", text: "Post number 2" },
    ]
  },
  {
    id: "12346",
    name: "Selena Gomez",
    posts: [
      { id: "1", text: "Hello world from Selena" },
      { id: "2", text: "Be happy guys" },
    ]
  },
  {
    id: "12347",
    name: "Ariana Grande",
    posts: [
      { id: "1", text: "Hello world from Ari" },
      { id: "2", text: "Have a good day" },
    ]
  },
  {
    id: "12348",
    name: "Rihanna",
    posts: [
      { id: "1", text: "Shine bright like a diamond" },
      { id: "2", text: "Where have you been" },
    ]
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

//! Users by id

router.get("/:id", ( req, res, next ) => {
  if (!users.find(el=>el.id===req.params.id)) {
   return next(createError(404,`cant find data for id:${req.params.id}`))
  }

  res.json(users.find(el=>el.id===req.params.id));
});

//! Posts

router.get("/:id/posts", (req, res,next) => {
  if (!users.indexOf(el => el.id === req.params.id)) {
   return next(createError(404, `cant find data for id:${req.params.id}`))
  }

  const result = users.find(el => el.id === req.params.id).posts

  if (!result) {
   return next(createError(404, `cant find posts for id:${req.params.id}`))
  }

  res.json(result);
});


//! Post by id

router.get("/:id/:posts/:postId", (req, res, next) => {
  
  const result = users.find(el => el.id === req.params.id)[req.params.posts]
    .find(el => el.id === req.params.postId)
  
  if (!result) {
   return next(createError(404, `cant find post with id:${req.params.postId}`))
  }

  res.json(result);
});

//! post create new user with name and id

router.post("/", (req, res, next) => {
  
  if (!req.body.name || !req.body.id) {

    return next(createError(400, "name & id is required"));
    }
    users.push({
        name: req.body.name,
        id: req.body.id
    });
  
    res.send( "user added" );
});

//! rename user

router.patch("/:id", (req, res, next) => {

  if (!users.indexOf(el => el.id === req.params.id)) {
   return next(createError(404, `cant find data for id:${req.params.id}`))
  }

  if (!req.body.name) {
   return next(createError(400, "name & id is required"));
  }

  users.map(el => el.id === req.params.id ? el.name = req.body.name : el);

  res.send("name changed");
})

//! delete user by id
router.delete("/:id", (req, res,next) => {

  if (!users.indexOf(el => el.id === req.params.id)) {
   return next(createError(404, `cant find user with id:${req.params.id}`))
  }

  users.splice(users.findIndex( el => el.id === req.params.id ), 1 )

  res.json({
    message: "user successfully deleted"
  })
});

router.all('*', function(req, res,next) {
  next(createError(400, "Bad request" ))
})

module.exports = router;
