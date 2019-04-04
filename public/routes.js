const axios = require("axios");
var appRouter = function (app) {

    app.get("/dogs", function (req, res) {
        axios.get('https://dog.ceo/api/breeds/list/all').then(function (response) {
            res.status(200).send(response.data.message);
        })
    });

}
module.exports = appRouter;