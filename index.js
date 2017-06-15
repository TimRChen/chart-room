const app = require('express')();



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html', function () {
      console.log('the page is open.')
  });
});


app.listen(3000, () => {
    console.log('listening on port@3000');
});