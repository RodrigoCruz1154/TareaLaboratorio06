var productos = ["Chocolates", "Gomitas", "Mentitas"];
var stock = [10, 10, 10];  
var precio = [0.25,0.35,0.40];
var aux = [];
var dato = 0;
var ventas = 0;
var contVentas = 0;
var actually = "";
while (dato != 6) {    
    var dato = prompt("¡Bienvenida Michelle!\n1. Para agregar un dato.\n2. Modificar stock.\n3. Registrar una venta.\n4. Mostrar promedio de las ventas realizadas.\n5. Mostrar productos con stock 0.\n6. Salir del sistema.\nIngresa un número por favor:");
    switch (dato) {
        
        case '1':
            var datoAAgregar = prompt("Ingrese un nuevo producto:");
            productos.push(datoAAgregar);
            var stockAgregar = prompt("Ingrese la cantidad en stock:");
            stock.push(stockAgregar);
            var precioAgregar = prompt("Ingrese el precio: ");
            precio.push(precioAgregar);
            alert("¡Has agregado un nuevo dato!\nTus productos existentes ahora son: " + productos + "\nTienes:" + stock + " productos en stock respectivamente.\nCuestan: " + precio + " respectivamente.");
            break;
        
       
        case '2':
        var identificador = prompt("Productos: "+productos+"\nStock: "+stock+"\nDe tus productos (enumerados del 0 al n), escoge el que desees modificar:");
        if(identificador>stock.length){
            alert("Has ingresado un dato erróneo...");
        }
        else{
            var datoAModificar = prompt("Cambiarás el producto -" + productos[identificador] + "- que tiene actualmente " + stock[identificador] + " productos en stock. Elige la cantidad a la que la modificarás: ")            
            stock[identificador] = datoAModificar;
            alert("Las existencias han cambiado, ahora tienes las siguientes cantidades de producto: " + productos + ". Respectivamente en stock: " + stock);
        }        
            break;
        
      
        case '3':
        var venta = prompt("Gracias por querer comprar, acutalmente tengo: "+productos+"\nLas existencias están ordenadas del 0 en adelante, escriba el número que corresponde con la posición del producto que desea comprar:");
        if(stock[venta]=='0'){
            alert("Ya no quedan más " + productos[venta]);
            break;
        }
        if(venta>productos.length){
            alert("¡No se pudo realizar la compra!");
        } else{
            var confirmarVenta = prompt("Comprará " + productos[venta] + " que tienen un costo de " + precio[venta]+". ¿Desea continuar? (S/N)");
            if(confirmarVenta == "s" || confirmarVenta == "S"){
                alert("Gracias por tu compra :)")
                contVentas++;
                ventas = ventas + precio[venta];
                stock[venta] = stock[venta] - 1;
            }            
        }
        break;
        
               
        case '4':
        if(contVentas=='0'){
            alert("¡No se ha realizado ninguna compra!\nPromedio: 0")
        }
        else{
            var promedio = ventas/contVentas;
            alert("El promedio de ventas que has realizado es: $"+promedio);
        }
        break;
        
        
        case '5':
        for(let i=0;i<stock.length;i++){                
                if(stock[i]=="0"){
                    actually = productos[i];
                    aux.push(actually);
                }             
        }
        if(aux[0]==undefined){
            alert("No hay elementos con stock 0");
        }else{
            alert("Productos con stock 0: " + aux);
        }
        break;


        case '6':
            alert("Gracias por usar el sistema, vuelve a usarlo en cuanto puedas :D");
            break;
        
        
        default:
            alert("Dato ingresado no válido...");
            break;
    }
}