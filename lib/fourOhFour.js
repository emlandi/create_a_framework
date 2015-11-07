var fourOhFour = module.exports = exports = {
  fourOhFour: function (res) {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    });
    res.write('Error 404: Page not found!');
    res.end();
  }

}
