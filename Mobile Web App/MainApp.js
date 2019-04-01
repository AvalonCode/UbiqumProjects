
var app = new Vue({
	el: '#app',
	data: {
        all: []
	}
});


fetch('https://api.myjson.com/bins/111z1i')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    app.all = data;
  });

// make modal function for info