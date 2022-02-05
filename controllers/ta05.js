
exports.getIndex = (req, res, next) => {
  res.render('pages/ta05', {
    title: 'Team Activity 05',
    path: '/ta05',
    style: req.session.style
  });
};

exports.postChangeStyle = (req, res, next) => {
  req.session.style = req.body.cssColor;
  res.redirect('/ta05');
};