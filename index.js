var request = require('request');
const { serveHttp, app } = require('webfunc')

exports.adapter = serveHttp([
    app.post('/{router}', (req, res,params) => {
        adapter(req,res,params);
    })
    ])

function adapter(req,res,params)
{

    let adapterOption = {    
        uri: 'http://35.194.157.51/DemoApi/' + params.router,
        // uri: 'http://localhost:52673/' + params.router,
        method: 'POST',
        json: params
    };

    request(adapterOption, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.status(200).send(body);
            res.end();
        }
        else
        {
            res.status(500).send(response.statusCode);
            res.end();
        }
    });

}

// exports.adapter = function (req, res) {
//     let result = 
//     {
//         url:req.url,
//         rawBody:req.body
//     }
//     res.send(result);
//     res.end();
//     let adapterOption = {
//         uri: 'http://localhost:52673/' + req.body.uri,
//         method: 'POST',
//         json: req.body
//     };

//     request(adapterOption, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body) // Print the shortened url.
//             res.status(200).send(body);
//             res.end();
//         }
//         else
//         {
//             console.log(response.statusCode);
//             res.status(500).send(response.statusCode);
//             res.end();
//         }
//     });
// };


