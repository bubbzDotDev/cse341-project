
exports.getIndex = (req, res, next) => {
  if (req.session.counter === undefined) {
    req.session.counter = 0;
  }
  if (req.session.style === undefined) {
    req.session.style = 0;
  }
  res.render('pages/ta05', {
    title: 'Team Activity 05',
    path: '/ta05',
    style: req.session.style,
    counter: req.session.counter
  });
};

exports.postChangeStyle = (req, res, next) => {
  req.session.style = req.body.cssColor;
  res.redirect('/ta05');
};

exports.postCounter = (req, res, next) => {
  req.session.counter += +req.body.counter;
  res.redirect('/ta05');
};

exports.postResetSession = (req, res, next) => {
  if (req.body.reset === 'true') {
    req.session.destroy(() => {
      res.redirect('/ta05');
    });
  }
};