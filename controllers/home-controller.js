const indexView = (req, res, next) => {
    res.render('home')
}
const iconsView = (req, res, next) => {
    res.render('icons')
}
const mapView = (req, res, next) => {
    res.render('map')
}
const profileView = (req, res, next) => {
    res.render('profile')
}
const tablesView = (req, res, next) => {
    res.render('tables')
}
const loginView = (req, res, next) => {
    res.render('login')
}
const registerView = (req, res, next) => {
    res.render('register')
}
const upgradeview = (req, res, next) => {
    res.render('upgrade')
}

module.exports = {
    indexView,
    iconsView,
    mapView,
    profileView,
    tablesView,
    loginView,
    registerView,
    upgradeview
}