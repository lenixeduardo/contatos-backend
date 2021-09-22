const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.get('/registrar', AuthController.registrar);
router.get('/login', AuthController.login);

module.exports = router;