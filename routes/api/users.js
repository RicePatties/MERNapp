const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
//router.get('/', (req, res) => res.send("User get route"));

// register user
router.post(
  '/',
  [
    check('name', 'name is req').not().isEmpty(),
    check('email', 'plz incl email').isEmail(),
    check('password', 'too short!').isLength({ min: 6 }),
  ],
  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User get route');
  }
);

module.exports = router;
