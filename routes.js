var appRouter = function (app) {

  app.get("/data", function (req, res) {
    var data = JSON.parse("https://dog.ceo/api/breeds/list/all");
    res.status(200).send(data);
  });

}

module.exports = appRouter;