
const btnRandom = document.getElementById("btn-random");
const imgUser = document.getElementById("user-img");
const nameUser = document.getElementById("user-name");
const dirUser = document.getElementById("user-dir");
const emailUser = document.getElementById("user-email");


btnRandom.onclick = () => {
    
    const indiceAleatorio = Math.floor(Math.random() * listaUsuarios.length);
    
   
    const usuario = listaUsuarios[indiceAleatorio];

   
    imgUser.src = usuario.foto; 
    nameUser.textContent = usuario.nombre; 
    dirUser.textContent = usuario.direccion; 
    emailUser.textContent = usuario.email; 

    console.log(`Despachando perfil de: ${usuario.nombre}`);
};