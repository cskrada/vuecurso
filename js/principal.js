var	app = new Vue({
	el : '#app',
	data : {
		lista: [
			{nombre: 'Francheska Rada', promedio: '19', estado: true},
			{nombre: 'Nestor Moreno', promedio: '19', estado: true},
			{nombre: 'Andrea Diaz', promedio: '10', estado: false}
		],
	}
})


// app: es el nombre que le asigno a mi objeto
// el: permite especificar que elemento DOM sera controlado por nuestra instancia Vue
// data: almacena las propiedades en nuestro template, para acceder es {{}}
