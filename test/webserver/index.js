var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '../../../app'));

//Set Body Parser
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

//Cross Origin
app.all('/*', function(req, res, next) {

	// CORS headers
	res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	// Set custom headers for CORS
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});


app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});


app.get('/pie_charts', function(request, response) {
	var pies = data.map(function(val) {
		return {
			id: val.id,
			title: val.title,
			description: val.description,
			created_at: val.created_at,
			updated_at: val.updated_at
		};
	});

	response.send(pies);
});

app.get('/pie_charts/:pid', function(request, response) {
	var pieid = request.params.pid;

	var pietoget = data.filter(function(val) {
		return val.id == pieid;
	});

	response.send(pietoget[0]);
});

app.patch('/pie_charts/:pid', function(request, response) {
	var pieid = request.params.pid;
	var pie = request.body;

	var pietoget = data.filter(function(val) {
		return val.id == pieid;
	});

	var index = data.indexOf(pietoget[0]);

	data[index].title = pie.title;
	data[index].description = pie.description;
	data[index].updated_at = new Date();

	var resp = {
		id: data[index].id,
		title: data[index].title,
		description: data[index].description,
		created_at: data[index].created_at,
		updated_at: data[index].updated_at
	};

	response.send(resp);
});


app.get('/pie_charts/:pid/slices', function(request, response) {

	var pieid = request.params.pid;

	var pietoget = data.filter(function(val) {
		return val.id == pieid;
	});
	var slices = pietoget[0].slices;

	response.send(slices);

});

app.patch('/pie_charts/:pid/slices/:sid', function(request, response) {

	var pieid = request.params.pid;
	var sliceid = request.params.sid;
	var slice = request.body;

	console.log("slice: "+ slice);

	var pietoget = data.filter(function(val) {
		return val.id == pieid;
	});

	var pindex = data.indexOf(pietoget[0]);
	
	var slicetoget = pietoget[0].slices.filter(function(val) {
		return val.id == sliceid;
	});

	console.log("slicetoget" + JSON.stringify(slicetoget));

	var sindex = data[pindex].slices.indexOf(slicetoget[0]);

	console.log("sindex" + sindex);
	
	data[pindex].slices[sindex].name = slice.name;
	data[pindex].slices[sindex].value = slice.value;
	data[pindex].slices[sindex].updated_at = new Date();

	

	response.send(data[pindex].slices[sindex]);
});

app.post('/pie_charts', function(request, response) {
	var pie = request.body;
	console.log("pie" + pie);
	pie.id = data.length + 1
	pie.created_at = "2015-05-23T22:12:55.586Z";
	pie.updated_at = "2015-05-23T22:12:55.586Z";
	pie.slices = [];

	data.push(pie);
	response.send(pie);
});


app.post('/pie_charts/:pid/slices', function(request, response) {
	var pieid = request.params.pid;
	var slice = request.body;
	var pietoget = data.filter(function(val) {
		return val.id == pieid;
	});
	var index = data.indexOf(pietoget[0]);

	slice.id = data[index].slices.length + 1
	slice.created_at = "2015-05-23T22:12:55.586Z";
	slice.updated_at = "2015-05-23T22:12:55.586Z";

	data[index].slices.push(slice);


	response.send(slice);
});

app.delete('/pie_charts/:pid/slices/:sid', function(request, response) {

	var pieid = request.params.pid;
	var sliceid = request.params.sid;

	var pietoget = data.filter(function(val) {
		return val.id == pieid;
	});

	var slicetoget = pietoget[0].slices.filter(function(val) {
		return val.id == sliceid;
	});

	var index = pietoget[0].slices.indexOf(slicetoget[0]);

	console.log("pie index" + index);
	if (index >= 0) {
		pietoget[0].slices.splice(index, 1);
	}
	response.status(200).end();

});

app.delete('/pie_charts/:pid', function(request, response) {

	var pieid = request.params.pid;

	var pietoget = data.filter(function(val) {
		return val.id == pieid;
	});

	console.log("pietoget" + JSON.stringify(pietoget));
	var index = data.indexOf(pietoget[0]);

	console.log("pie index" + index);
	if (index >= 0) {
		data.splice(index, 1);
	}
	response.status(200).end();

});

var data = [{
	id: 1,
	title: "Pie0",
	description: "description",

	slices: [{
		pie_chart_id: 1,
		id: 24,
		name: "val",
		value: 12,
		created_at: "2015-05-24T00:28:07.920Z",
		updated_at: "2015-05-24T00:28:07.920Z"
	}, {
		pie_chart_id: 1,
		id: 25,
		name: "val",
		value: 3,
		created_at: "2015-05-24T00:28:13.087Z",
		updated_at: "2015-05-24T00:28:13.087Z"
	}, {
		pie_chart_id: 1,
		id: 45,
		name: "u",
		value: 67,
		created_at: "2015-05-24T02:06:32.327Z",
		updated_at: "2015-05-24T02:06:32.327Z"
	}, {
		pie_chart_id: 1,
		id: 46,
		name: "sa",
		value: 13,
		created_at: "2015-05-24T02:07:58.772Z",
		updated_at: "2015-05-24T02:07:58.772Z"
	}]
}, {
	id: 2,
	title: "Pie 1",
	description: "description",
	created_at: "2015-05-23T22:16:44.385Z",
	updated_at: "2015-05-23T22:16:44.385Z",
	slices: [{
		pie_chart_id: 2,
		id: 24,
		name: "val",
		value: 1,
		created_at: "2015-05-24T00:28:07.920Z",
		updated_at: "2015-05-24T00:28:07.920Z"
	}, {
		pie_chart_id: 2,
		id: 25,
		name: "val",
		value: 32,
		created_at: "2015-05-24T00:28:13.087Z",
		updated_at: "2015-05-24T00:28:13.087Z"
	}, {
		pie_chart_id: 2,
		id: 45,
		name: "u",
		value: 27,
		created_at: "2015-05-24T02:06:32.327Z",
		updated_at: "2015-05-24T02:06:32.327Z"
	}, {
		pie_chart_id: 2,
		id: 46,
		name: "sa",
		value: 123,
		created_at: "2015-05-24T02:07:58.772Z",
		updated_at: "2015-05-24T02:07:58.772Z"
	}]
}, {
	id: 3,
	title: "Pie 2",
	description: "description",
	created_at: "2015-05-23T22:19:50.302Z",
	updated_at: "2015-05-23T22:19:50.302Z",
	slices: [{
		pie_chart_id: 3,
		id: 24,
		name: "val",
		value: 12,
		created_at: "2015-05-24T00:28:07.920Z",
		updated_at: "2015-05-24T00:28:07.920Z"
	}, {
		pie_chart_id: 3,
		id: 25,
		name: "val",
		value: 3,
		created_at: "2015-05-24T00:28:13.087Z",
		updated_at: "2015-05-24T00:28:13.087Z"
	}, {
		pie_chart_id: 3,
		id: 45,
		name: "u",
		value: 67,
		created_at: "2015-05-24T02:06:32.327Z",
		updated_at: "2015-05-24T02:06:32.327Z"
	}, {
		pie_chart_id: 3,
		id: 46,
		name: "sa",
		value: 13,
		created_at: "2015-05-24T02:07:58.772Z",
		updated_at: "2015-05-24T02:07:58.772Z"
	}]
}, {
	id: 4,
	title: "Pie 3",
	description: "description",
	created_at: "2015-05-23T22:31:37.059Z",
	updated_at: "2015-05-23T22:31:37.059Z",
	slices: [{
		pie_chart_id: 20,
		id: 24,
		name: "val",
		value: 12,
		created_at: "2015-05-24T00:28:07.920Z",
		updated_at: "2015-05-24T00:28:07.920Z"
	}, {
		pie_chart_id: 20,
		id: 25,
		name: "val",
		value: 3,
		created_at: "2015-05-24T00:28:13.087Z",
		updated_at: "2015-05-24T00:28:13.087Z"
	}, {
		pie_chart_id: 20,
		id: 45,
		name: "u",
		value: 67,
		created_at: "2015-05-24T02:06:32.327Z",
		updated_at: "2015-05-24T02:06:32.327Z"
	}, {
		pie_chart_id: 20,
		id: 46,
		name: "sa",
		value: 13,
		created_at: "2015-05-24T02:07:58.772Z",
		updated_at: "2015-05-24T02:07:58.772Z"
	}]
}];