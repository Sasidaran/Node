var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    displayForm(res);
});
var growl = require('growl')

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
        //growl('You have mail!')
				growl('5 new messages', { sticky: true })
				//growl('5 new emails', { title: 'Email Client', image: 'Safari', sticky: true })
				//growl('Message with title', { title: 'Title'})
				//growl('Set priority', { priority: 2 })
				//growl('Show Safari icon', { image: 'Safari' })
				//growl('Show icon', { image: 'path/to/icon.icns' })
				//growl('Show image', { image: 'path/to/my.image.png' })
				//growl('Show png filesystem icon', { image: 'png' })
				//growl('Show pdf filesystem icon', { image: 'article.pdf' })

    });
}

server.listen(3002);
console.log("server listening on 3002");