//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();
const users = [
  {
    username: 'Chris'
  },
  {
    username: 'Ben'
  },
  {
    username: 'Jerry'
  }
];
let removeError;
let addError;

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    userList: users,
    removeError: removeError,
    addError: addError,
  });
});

router.post('/addUser', (req, res, next) => {
  let uIndex = users.map((e) => {return e.username.toLowerCase()}).indexOf(req.body.username.toLowerCase());
  if (uIndex > -1) {
    addError = `${req.body.username} already exists on the list. Please try a different name.`;
  } else {
    if (req.body.username === '') {
      addError = 'Name cannot be empty. Please try again.';
    } else {
      users.push({
        username: req.body.username
      });
      addError = '';
      removeError = '';
    }
  }
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  
  let uIndex = users.map((e) => {return e.username.toLowerCase()}).indexOf(req.body.username.toLowerCase());
  if (uIndex > -1) {
    users.splice(uIndex, 1);
    removeError = '';
    addError = '';
  } else {
    if (req.body.username) {
      removeError = `Unable to remove ${req.body.username}. Not found in list.`;
    } else {
      removeError = 'Please enter a user name and try again.';
    }
  }
  res.redirect('/ta02');
});

exports.routes = router;
exports.users = users;
