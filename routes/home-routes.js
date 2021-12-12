const express = require('express')
const { indexView, iconsView, mapView, profileView, tablesView, loginView, registerView, upgradeview } = require('../controllers/home-controller')
const router = express.Router()

router.get('/', indexView)
router.get('/icons', iconsView)
router.get('/map', mapView)
router.get('/profile', profileView)
router.get('/tables', tablesView)
router.get('/login', loginView)
router.get('/register', registerView)
router.get('/upgrade', upgradeview)

module.exports = {
    routes: router
}