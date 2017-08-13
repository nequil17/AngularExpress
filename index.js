var express = require('express');
var app = express();
var path = require('path')
var JSONPath = path.join(__dirname , "data.json")
var clientPath= path.join(__dirname ,'client')
var fs = require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.static(clientPath));

app.route('/api')
    .get(function(req,res){
        console.log('get req')
        res.sendFile(JSONPath);
    })
app.route('/api/:id')
    .get(function(req,res){
        console.log(req)
        console.log('get id')
        fs.readFile(JSONPath, 'utf-8',function(err,file){

            var arr = JSON.parse(file);
            var id = req.params.id;
            var result;

            arr.forEach(function(element) {
                if(element.id === id){
                    result = element
                }
            });
        if(result){
            res.send(result)
        }
        })
    }) 
// app.route('/api/role/:Role')
//     .get(function(req,res){
//         console.log(req)
//         console.log('get role')
//         fs.readFile(JSONPath, 'utf-8',function(err,file){

//             var arr = JSON.parse(file);
//             var Role = req.query.Role;
//             var result;

//             arr.forEach(function(element) {
//                 if(element.Role === Role){
//                     result = element
//                 }
//             });
//         if(result){
//             res.send(result)
//         }
//         })
//     }) 
app.route('/api/role/:class')
    .get(function(req, res){
        fs.readFile(JSONPath, 'utf-8', function(err, fileContents) {
            if (err) {
                res.statusStatus(500);
            } else {
                var champions = JSON.parse(fileContents);
                console.log(champions)
                var Role = req.params.Class;
                console.log(req.params.Class)
                var response = names.filter(function(name) {
                    if(champion.Class){
                        if (name.Class.toLowerCase().trim() === Class.toLowerCase().trim()) {
                        return name;
                    }
                    }

                });
                if (response) {
                    res.send(response);
                } else {
                    res.sendStatus(404);
                }
            }
        });
    })



app.listen(3000)

