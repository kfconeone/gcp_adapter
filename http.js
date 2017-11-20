var request = require('request');


exports.adapter = function (req, res) {
    console.log(req.body.uri);
    let adapterOption = {
        uri: 'http://localhost:52673/' + req.body.uri,
        method: 'POST',
        json: req.body
    };

    request(adapterOption, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the shortened url.
            res.status(200).send(body);
            res.end();
        }
        else
        {
            console.log(response.statusCode);
            res.status(500).send(response.statusCode);
            res.end();
        }
    });
};


