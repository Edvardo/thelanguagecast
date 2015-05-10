

var doT = require("dot").process({
	global: "_page.render"
	, destination: __dirname + "/render/"
	, path: (__dirname + "/../templates")
});
var render = require('./render');



module.exports.getHome = function (request, response){
	response.send(render.home({}));
}

module.exports.getVideo = function (request, response){
	response.send(render.video({}));
}