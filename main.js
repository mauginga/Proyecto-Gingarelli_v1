alert('BIENVENIDOS A LA COMPRA ONLINE Exclusiva de Resortes y Amortiguadores')
const comprarProductos = () => {
    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = true

    // Nan --> not a number

    do {
        producto = prompt('¿Queres comprar amortiguadores, resortes o ambos?')
        cantidad = parseInt(prompt('Ingresa la cantidad deseada.'))

        let cantidadValidada = validarCantidad(cantidad)

        // Coerción de tipos 
        // if (2 == '2') {
        // console.log('Dentro del if');
        // }
        // == Operador de igualdad
        // === Operador de igualdad estricta
        // No solamente compara los valores sino también compara los tipos de datos
        // if (2 === '2') {
        //   console.log('Dentro del if');
        // }


        
        switch (producto) {
            case 'amortiguadores':
                precio = 4000
                break;
            case 'resortes':
                precio = 3300
                break;
            case 'ambos':
                precio = 7300
                break;
            default:
                alert('los datos ingresados no son correctos')
                precio = 0
                cantidadValidada = 0
                break;
        }
        subtotal += precio * cantidadValidada 

        seguirComprando = confirm('¿Desea seguir comprando?') //con este metodo confirm logro q el usuario me setee true o false esta variable
    } while (seguirComprando);
    return subtotal
 
 }; //convencion para usar arrow function

 const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0 ||cantidad < 0) { // operador de igualdad estricta. no solo compara el dato sino el Tipo de dato∫
        alert('Debe ingresar una cantidad valida')
        cantidad = parseInt(prompt('Vuelve a ingresar la cantidad deseada.'))
    }
    return cantidad
 };

 //comprarProductos debe estar al final pq sino  la funcion validadCantidad nunca es leida
let resultado = comprarProductos();

//Calcular descuentos
//Calcular cuotas
//Calcular envios
const calcularDescuentos = () => {
    let descuentos = 0
    let formaPago = ''
    let cuotas = resultado/3
    let sindescuento = true
    do {
        formaPago = prompt('Ingrese si abono en Efectivo (20% descuento) o Tarjeta (tiene 3 cuotas sin interes)')
        
        switch (formaPago) {
            case 'Efectivo':
                descuentos = 20
                break;
            case 'Tarjeta':
                descuentos = 0
                alert('Sus cuotas son de '+ cuotas)
                break
            default:
                alert('No ingreso una forma de pago valida.')
                descuentos = 0
                break;
        }

        subdesc = (descuentos * resultado)/100
        sindescuento = confirm('Su descuento es de $' + subdesc + ' .Eligio la forma de pago ' + formaPago + ' ¿es correcto?')
    } while(formaPago = '')
    return descuentos
};
let resultado1 = calcularDescuentos()

const calcularEnvios = () => {
    let zona = ''
    let envio = 0
    zona = prompt('Tenemos envìos para CABA y AMBA. Sino sera derivado a un servicio expreso')
    switch (zona) {
        case 'CABA':
            envio = 2000
            break;
        case 'AMBA':
            envio = 3000
            break;
        default:
            alert('Ud sera derivado al servicio Expreso del correo argentino')
            break;
    }
    return envio
};

let resultado2 = calcularEnvios()

total = resultado - resultado1 + resultado2

alert('El total de su compra es $'+ total);

alert('El costo del envio es: $' + resultado2);
