class HomeController {
  index(req, res) {
    res.render('home')
  }
  contact(req, res) {
    res.render('contact')
  }

  register(req, res) {
    res.render('register')
  }

  login(req, res) {
    res.render('login')
  }

  detail(req, res) {
    res.render('detail')
  }
}

module.exports = new HomeController;
