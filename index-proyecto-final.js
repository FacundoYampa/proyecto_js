//Proyecto 2da Entrega

//Display de secciones (podria ir en CSS)
document.querySelector("#crearCuenta").style.display = "block";
document.querySelector("#Perfil").style.display = "none";
document.querySelector("#LogIn").style.display = "none";

//Asignaciones de Secciones/Menús del DOM
let LogIn = document.querySelector("#LogIn");
let perfil = document.querySelector("#Perfil");
let crearCuenta = document.querySelector("#crearCuenta");

//Funciones para mostrar y ocultar menús
function abrirCrearCuenta(){
        LogIn.style.display = "none";
        perfil.style.display = "none";
        crearCuenta.style.display = "block";
}
function abrirPerfil(){
    LogIn.style.display = "none";
    crearCuenta.style.display = "none";
    perfil.style.display = "block";
}
function abrirLogIn(){
    perfil.style.display = "none";
    crearCuenta.style.display = "none";
    LogIn.style.display = "block";
}

//Boton "Volver"
const btnArray = document.querySelectorAll("#btnVolver");
btnArray.forEach(btn => {btn.addEventListener("click",abrirLogIn);});

//-------------------------------------LOG IN  -------------------

//Eventos
document.querySelector("#btnAbrirCrearCuenta").addEventListener("click",abrirCrearCuenta);






//-----------------------Iniciar Sesion - Abrir Perfil
//Por ahora solo trabajo con Usuario
let usuario = document.querySelector("#usuario").value;
let usuarioGuardado;
let contraseña = document.querySelector("#contraseña").value;
let contraseñaGuardada;    

function validar(){
    usuario = document.querySelector("#usuario").value;
    contraseña = document.querySelector("#contraseña").value;

    if(!usuario){
      Toastify({text:"Ingrese un usuario",duration: 3000,}).showToast();
      return false;
    }
    if(!contraseña){
      Toastify({text:"Ingrese un contrseña",duration: 3000,}).showToast();
      return false;
    }

    // usuario==usuarioGuardado? abrirPerfil():Toastify({text:"El usuario o la contraseña son incorrectos",duration: 3000,}).showToast();

    usuarioGuardado = arrayUsuarios[usuario]


    document.querySelector("#usuario").value="";
    document.querySelector("#contraseña").value="";
}

//PERFILES PROVISORIO----------------------------------------------------------------------
const arrayUsuarios = [{id:1,nombre:"Facundo",edad:21,usuario:"fyampa",contraseña:"faq123"},
                       {id:2,nombre:"Nahuel",edad:22,usuario:"nyampa",contraseña:"nah123"},
                       {id:3,nombre:"Yampa",edad:23,usuario:"fnyampa",contraseña:"yam123"}];
                      //  [{"nombre":"Facundo","edad":"21","usuario":"fyampa","contraseña":"faq123"},
                      //  {"nombre":"Nahuel","edad":"22","usuario":"nyampa","contraseña":"nah123"},
                      //  {"nombre":"Yampa","edad":"23","usuario":"fnyampa","contraseña":"yam123"}]
  
//------------------------------------------------------------------------------------------

document.querySelector("#btnIniciarSesion").addEventListener("click",validar);





//-------------------------------------CREAR CUENTA---------------
//Eventos
// document.querySelector("#btnCrearCuenta").addEventListener("click",crearUsuario);


//funcion crear usuario
document.querySelector("#formCrearUsuario").addEventListener("submit",crearNuevoUsuario);
function crearNuevoUsuario(e){
  e.preventDefault();//paramos envío de submit
      
  //Recuperamos información de los inputs
  const nombre = document.querySelector("#nombreUsuario").value;
  const apellido = document.querySelector("#apellidoUsuario").value;

  //Creamos objeto persona
  const persona = new Persona(nombre,apellido);
  //Pushear en el array
//   arrayPersonas.push(persona);
//   //guardar el array en localstorage y convertirlo en JSON
//   localStorage.setItem("arrayPersonas", JSON.stringify(arrayPersonas));

}


fetch('usuarios.json')
.then((res) => res.json())
.then((data) => {console.log(data)})



// fetch("usuarios.json", {
//   method: 'POST',
//   body: JSON.stringify({
//     nombre:'Romina',
//     edad:'24',
//     usuario:'rlimachi',
//     contraseña:'ro123'
//   }),
//   headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//   },

// })
// .then((response) => response.json())
// .then((data) => console.log(data))

//fin funcion crear usuario



function crearUsuario(){
usuarioGuardado = document.querySelector("#nuevoUsuario").value;
contraseñaGuardada = document.querySelector("#nuevaContraseña").value;
abrirLogIn();
Toastify({
    text: "Su cuenta ha sido creada",
    duration: 3000,
    // position:"button",
    // gravity:"right",
    // style:{}
}).showToast();
document.querySelector("#nuevoUsuario").value="";
document.querySelector("#nuevaContraseña").value="";
conectarUsuario();
}




//-------------------------------------PERFIL---------------------

function conectarUsuario(){

const persona = [
{nombreUsuario:usuarioGuardado,nombre:"Facundo",apellido:"Yampa"},
{nombreUsuario:"nombrepureba",nombre:"Nahuel",apellido:"Paco"}];
const guardarLocal = (clave,valor) => { localStorage.setItem(clave,valor)};

//almacenar persona por persona
for (const el of persona){ guardarLocal(el.nombreUsuario, JSON.stringify(el))}

}

fetch("https://picsum.photos/100")

.then( (data) =>{
  const abc = data.url;
  const dataa = document.querySelector(".card-img");
  dataa.innerHTML= `<img src=${abc}>`;

});
