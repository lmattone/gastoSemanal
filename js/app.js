// Variables
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto


//Clases
//Clase de presupuesto
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    //Método para ir restando el presupuesto actual
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}
//Clase de Interfaz maneja todo lo relacionado al HTML
class Interfaz{
    insertarPresupuesto(cantidad){
        //console.log(cantidad);
        const presupuestoSpan = document.getElementById('total');
        const restante = document.getElementById('restante');

        //Insertar el HTML
        presupuestoSpan.innerHTML = `${cantidad}`;
        restante.innerHTML = `${cantidad}`;

    }
    imprimirMensaje(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert');
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');//porque el proyecto viene con bootstrap
        }else{
            divMensaje.classList.add('alert-success');//porque el proyecto viene con bootstrap
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        //Insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        //Quitar el alert
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        },2500);

    }
}




//Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    if (presupuestoUsuario === null || (isNaN(presupuestoUsuario)) || presupuestoUsuario === ''){
        window.location.reload();
    }else{
        //Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        //Instanciar la clase de Interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Leer del formulario de gastos
    const nombreGasto = document.getElementById('gasto').value;
    const cantidadGastos = document.getElementById('cantidad').value;

    //Instanciar la Interfaz
    const ui = new Interfaz();
    
    //Validar que los campos no estén vacíos
    if (nombreGasto === '' || cantidadGastos === ''){
        ui.imprimirMensaje('Hubo un error','error');
    }else{
        //console.log('el gasto se agregó');
    }

})


