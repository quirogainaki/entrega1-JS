//creamos una funcion para realizar las 10 preguntas usando como parametros las distintas preguntas, con sus respectivas opciones
//y repetimos la opcion correcta, para la comodidad del usuario utilizamos como respuesta el indice que indica la respue
//sta seleccionada.
//utilizamos el switch para validar que la entrada del usuario sea una de las tres opciones, y en caso de que no le
//enviamos un alert informandolo
//luego con el if validamos si la opcion seleccionada es correcta o incorrecta comparandola con el parametro de 
//"opcionCorrecta".
const almacenamiento = {respuestaUsuario1: "", respuestaUsuario2: "", respuestaUsuario3: "", respuestaUsuario4: "", respuestaUsuario5: "", respuestaUsuario6: "", respuestaUsuario7: "", respuestaUsuario8: "", respuestaUsuario9: "", respuestaUsuario10: ""};
//respuestaUsuario= ""; 
let respuesta= "";
function hacerPreguntas(pregunta, opcion1, opcion2, opcion3, opcionCorrecta, clave){
    respuesta= prompt(pregunta+"\n"+opcion1+ "\n"+opcion2+"\n"+opcion3+"\n(Seleccione la letra que corresponde a la opcion deseada)").toLowerCase();
    switch (respuesta) {
        case "a":
            break;
        case "b":
            break;
        case "c":
            break;
        default:
            respuesta=prompt("Porfavor selecciona una de las opciones: "+pregunta+"\n"+opcion1+ "\n"+opcion2+"\n"+opcion3+"\n(Seleccione la letra que corresponde a la opcion deseada)").toLowerCase();
            break;
    }
    if(respuesta === opcionCorrecta.toLowerCase()){
        alert("¡Correcto!");
        respuesta = "¡Correcto!"
    } else {
        alert("¡Incorrecto!");
        respuesta = "¡Incorrecto!"
    };
    
    almacenamiento[clave]= respuesta;
};
//debajo creamos una fucnion simple sin parametros para pedir el nombre del usuario
let nombreUsuario= ""
function pedirNombre(){
    nombreUsuario= prompt("Bienvenido a nuestra pagina de cafe de especialidad ☕, ingresa tu nombre para una experiencia mas personalizada");
    if(nombreUsuario == " " || nombreUsuario.length <= 2){
        nombreUsuario= prompt("Por favor ingrese un nombre valido");
        alert("Esperamos que te encuentres perfectamente "+nombreUsuario+", te tenemos una propuesta tentadora a continuacion");
    } else {
        alert("Esperamos que te encuentres perfectamente "+nombreUsuario+", te tenemos una propuesta tentadora a continuacion");
    }
}
function validarDescuento(){
    if(validacionDescuento >= 8){
        alert("¡Felicitaciones! Te has ganado un descuento del 20% para cualquier cafe que quieras ya que respondiste "+validacionDescuento+" preguntas bien, solo tienes que iniciar sesion o registrarte para reclamarlo");
    } else {
        alert("Lamentablemente no te has ganado el descuento ya que respondiste "+validacionDescuento+" preguntas bien, pero no hay por que desanimarse. Los primeros dias del mes tenemos descuentos de hasta 10% 🔥, asi que inicia sesion o registrate y lleva a cabo tu primera compra");
    };
};
pedirNombre();
//aca abajo pense en hacer una funcion, pero tendria que meter una funcion dentro de otra. Por lo que pense que iba a 
//ser un poco engorroso de leer y no se si se rompia el codigo.

    let hacerEncuesta= confirm(nombreUsuario+" te podes ganar un 20% de descuento en nuestra pagina web, solo respondiendo 10 preguntas. ¿Deseas realizar la encuesta?");
    if (hacerEncuesta == true){
        hacerPreguntas("¿Que pais es conocido por ser uno de los mayores productores de cafe de especialidad?", "a- Brasil", "b- Uruguay", "c- Noruega", "A", "respuestaUsuario1");
        hacerPreguntas("¿De que planta se obtiene el cafe?", "a- Camellia sinensis", "b-Coffea arabica", "c-Rubus idaeus","b", "respuestaUsuario2");
        hacerPreguntas("¿Qué es el café de especialidad?", "a-Café mezclado con especias.", "b-Café cultivado, procesado y puntuado bajo estrictos estándares de calidad.", "c-Café instantáneo de alta calidad", "b", "respuestaUsuario3");
        hacerPreguntas("¿Cómo se diferencia el café de especialidad del café común?", "a-El café de especialidad se vende solo en tiendas de lujo.", "b-El café de especialidad tiene un puntaje alto de calidad, mientras que el café común no.", "c-El café de especialidad siempre tiene sabores frutales, mientras que el común es más amargo.", "b", "respuestaUsuario4");
        hacerPreguntas("¿Qué características tiene el café de especialidad en comparación con el café tostado?", "a-El café de especialidad tiene menos cafeína que el café tostado.", "b-El café de especialidad se tuesta a temperaturas más bajas para preservar los sabores únicos.", "c-El café de especialidad se hace siempre en cafeteras de lujo.", "b", "respuestaUsuario5");
        hacerPreguntas("¿Por qué el café de especialidad es más caro que el café tostado?", "a-Porque requiere un proceso de cultivo, cosecha y evaluación de calidad más detallado.", "b-Porque se sirve en tazas de oro.", "c-Por que se cultiva en una tierra especial.", "a", "respuestaUsuario6");
        hacerPreguntas("¿Cuál es el proceso de producción del café de especialidad?", "a-Se cultiva en plantaciones submarinas.", "b-Se cultiva en altitudes específicas y se procesa cuidadosamente para asegurar alta calidad.", "c-Se recoge de plantas silvestres sin ningún control de calidad.", "b", "respuestaUsuario7");
        hacerPreguntas("¿Qué sabores son comunes en el café de especialidad y en el café tostado?", "a-Sabores a cartón y ceniza.", "b-Sabores frutales, florales y acaramelados en el café de especialidad; sabores quemados en el café tostado.", "c-Sabores a chocolate y mantequilla.", "b", "respuestaUsuario8");
        hacerPreguntas("¿Cuál es la importancia de la calidad del grano en el café de especialidad?", "a-No tiene ninguna importancia, cualquier grano sirve.", "b-Es fundamental para lograr los perfiles de sabor distintivos y asegurar un puntaje alto en catas.", " c-Solo afecta la apariencia del café, no el sabor.", "b", "respuestaUsuario9");
        hacerPreguntas("¿Cuál es la altitud mínima típica para cultivar café de especialidad?", "a-800 metros sobre el nivel del mar", "b-1200 metros sobre el nivel del mar", "c-2000 metros sobre el nivel del mar.", "b", "respuestaUsuario10");
    } else{
        alert("No hay ningun problema "+nombreUsuario+" ¡Esperamos que puedas navegar por nuestra web de forma optima!")
    }

    let validacionDescuento= 0
    for (let i = 1; i <= 10; i++) {
        if (almacenamiento["respuestaUsuario"+i]== "¡Correcto!") {
            validacionDescuento= validacionDescuento + 1;
        } else {
            validacionDescuento = validacionDescuento + 0;
        }
    }

    validarDescuento();
     //Simulamos el registro de cuenta del usuario para que pueda reclamar el descuento
    //y almacenamos al usuario en un array de objetos

    //Simulamos el registro de cuenta del usuario para que pueda reclamar el descuento
    //y almacenamos al usuario en un array de objetos

    
    // array de objetos
    class Cafes{
        constructor(item, nombre, precio, peso, molienda, descripcion){
            this.item = item;
            this.nombre = nombre;
            this.precio = precio;
            this.peso = peso;
            this.molienda = molienda;
            this.descripcion=descripcion;
        } 
    }
    //aqui seria un array de cafes
    
    const cafe0= new Cafes("cafe0","peru", 25000, "500 gramos", "molienda fina","Notas: mandarina, caramelo, vainilla");
    const cafe1= new Cafes("cafe1","uganda", 30000, "1000 gramos", "molienda intermedia", "Notas: Floral,Damasco,Pelon");
    const cafe2= new Cafes("cafe2","Brasil", 18000, "250 gramos", "molienda gruesa", "Notas: frutos rojos, almendra, chocolate");
    const cafe3= new Cafes("cafe3", "Indonesia", 35000, "1000 gramos", "molienda fina", "Notas: frutas maduras, pomelo, chocolate");
    const cafe4= new Cafes("cafe3", "Colombia Organico", 22000, "500 gramos", "molienda gruesa", "Notas: durazno, chocolate amargo, avellana");
    const cafe5= new Cafes("cafe4", "Costa Rica", 28000, "1000 gramos", "molienda intermedia", "Notas: frutos rojos, chocolate");
    const cafe6= new Cafes("cafe5", "Irlanda", 60000, "500 gramos", "molienda fina", "Notas: frutos rojos, chocolate, especias");
    // debajo tenemos un array de objetos
    tiposDeCafe= [cafe0, cafe1, cafe2, cafe3, cafe4, cafe5, cafe6];

    class ConstruccionUsuarios{
        constructor(nombreUsuario, correoElectronico, numeroTelefono, contraseña){
            this.nombreUsuario=nombreUsuario;
            this.correoElectronico=correoElectronico;
            this.numeroTelefono=numeroTelefono;
            this.contraseña=contraseña;
        }
    }
    const usuarios =[];
    function crearUsuario(){
        let nombreUsuario= prompt("Ingrese un nombre de usuario que quiera utilizar");
        let correoElectronico= prompt("ingrese su correo electronico");
        let numeroTelefono= Number(prompt("Ingrese su numero de telefono"));
        let contraseña= prompt("ingrese su contraseña con al menos 8 caracteres");
        let nuevoUsuario= new ConstruccionUsuarios(nombreUsuario, correoElectronico, numeroTelefono, contraseña);
        usuarios.push(nuevoUsuario);
        alert("El usuario: "+nombreUsuario+" a sido creado correctamente.")
    }
    crearUsuario();
    
    alert(usuarios[0].nombreUsuario+" nos han contado que te ganaste un descuento, a continuacion te mostraremos los cafes con los que puedes aprovecharlo");
        
    function mostrarCafes(){for (let i = 0; i < tiposDeCafe.length; i++) {
        alert("Origen: "+tiposDeCafe[i].nombre+" \nPrecio: $"+tiposDeCafe[i].precio+"\n"+tiposDeCafe[i].descripcion);
    };
}
    mostrarCafes();

    eleccionDeCafe=prompt("ingrese el cafe que prefiera para darle mas informacion y el descuento aplicado").toLowerCase();
    const eleccion= tiposDeCafe.find(cafe=>cafe.nombre.toLowerCase()==eleccionDeCafe.toLowerCase());
    console.log(eleccion);

        if(tiposDeCafe.some(coffe=>coffe.nombre.toLowerCase()==eleccionDeCafe.toLowerCase())){
            // Aplicamos descuento
            newPrecio= eleccion.precio - (eleccion.precio * 20 /100);
            alert("El cafe que has seleccionado viene de a "+eleccion.peso+" y lo enviamos con una "+eleccion.molienda+" con el descuento que te has ganado tu cafe paso de valer $"+eleccion.precio+" a: $"+newPrecio);
        }else{
            alert("Porfavor ingrese uno de los cafes visualizados anteriormente");
            mostrarCafes();
            eleccionDeCafe= prompt("ingrese el cafe que prefiera para darle mas informacion y el descuento aplicado").toLowerCase();
        };
    
    // // Aplicamos descuento
    // newPrecio= eleccion.precio - (eleccion.precio * 20 /100);

    //aqui seria un array de productos complementarios para el cafe 👇
    class Cafeteras {
        constructor(nombre, precio, mecanismo) {
            this.nombre= nombre;
            this.precio= precio;
            this.mecanismo= mecanismo;
        }
    }
    const cafetera1 = new Cafeteras("Italiana", 42000, "Manual");
    const cafetera2 = new Cafeteras("Moka", 38000, "Manual");
    const cafetera3 = new Cafeteras("Espresso", 72500, "electrico");
    const cafetera4 = new Cafeteras("chemex", 58000, "Manual");
    const cafetera5 = new Cafeteras("Italiana", 42000, "Manual");
    const cafetera6 = new Cafeteras("Prensa Francesa", 40000, "Manual");
    const cafetera7 = new Cafeteras("aeropress", 25000, "Electrica");
    
    const tiposDeCafeteras = [cafetera1, cafetera2, cafetera3, cafetera4, cafetera5, cafetera6, cafetera7];
    
    
    

