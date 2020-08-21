const express 				=  require('express');
const app 					=  express();
const routes  				=  require('./route/route');

app.use('/api', routes)

const server  = app.listen(3000, function(){
	console.log("Server is running on port 3000");
});
