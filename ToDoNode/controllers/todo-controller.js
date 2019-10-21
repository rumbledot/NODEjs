var bp = require('body-parser');
var mdb = require('mongoose');

// connect mongodb
mdb.connect('mongodb+srv://bram:test@cluster0-ijqzr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//schema
var todoSchema = new mdb.Schema({
    item: String
});
//model
var Todo = mdb.model('Todo', todoSchema);
// var item1 = Todo({
//     item: 'get flowers'
// }).save(function(err) {
//     if (err) throw err;
//     console.log('item saved');
// });

// var data = [{
//         item: 'get milk'
//     },
//     {
//         item: 'walk dog'
//     },
//     {
//         item: 'kick some ass'
//     }
// ];

var urlencodedParser = bp.urlencoded({
    extended: false
});

module.exports = function(app) {

    app.get('/todo', function(req, res) {
        // similar to select * in mySql query
        Todo.find({}, function(err, data) {
            if (err) throw err;
            res.render('todo', {
                todos: data
            });
        });
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        var item = new Todo(req.body).save(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item', function(req, res) {
        console.log("delete todo called " + req.params.item);
        Todo.find({
            item: req.params.item.replace(/\-/g, ' ')
        }).remove(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
        // data = data.filter(function(todo) {
        //     return todo.item.replace(/ /g, '') !== req.params.item;
        // });
        // res.json(data);
    });

};