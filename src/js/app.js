import Ractive from 'ractive';

let App = new Ractive({  
	el: '#app',
	template: '<input type="text" value="{{name}}"><p>Name: {{name}}</p>',
	data: {
		name: 'd'
	}
});

export default App;