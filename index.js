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
        fs.readFile(JSONPath, "utf-8", function(err, file){
            return res.send(JSON.parse(file));
        });
        return res.sendFile(JSONPath);
    })

app.route('/api/role/:Class')
.get(function(req, res) {
    fs.readFile(JSONPath, 'utf-8', function(err, fileContents) {
        if (err) {
            return res.statusStatus(500);
        } else {
            var name = JSON.parse(fileContents);
            var Class = req.params.Class;
            var response = name.filter(function(name) {
                if(name.Class){
                    if (name.Class.toLowerCase().trim() === Class.toLowerCase().trim()) {
                        return name;
                    }
                }     
            });
            if (response) {
                return res.send(response);
            } else {
                return res.sendStatus(404);
            }
        }
    });
});
    
app.route('/api/:id')
.get(function(req, res) { 
    fs.readFile(JSONPath, 'utf-8', function(err, file) {
        if (err) {
        res.status(500).send('could not read file');
        } else {
    
        var arr = JSON.parse(file);
        var id = req.params.id;
        var result;
    
        arr.forEach(function(character) {
            if (character.id === id) {
                result = character;
            }
        });
        if (result === undefined) {
                return res.sendStatus(404, 'Character not found');
        } else {
               return res.send(JSON.stringify(result));
            }
        }
    })
})
    
    
app.listen(3000)
    
