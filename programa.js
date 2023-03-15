//Crear lo evantListener

let botonalmacenar=document.getElementById("btnAlmacenar");

botonalmacenar.addEventListener('click',()=>

    console.log("estoy respondiendo")

    //Almacenar datos

    sessionStorage.setItem('nombre','julia')
    sessionStorage.setItem('apellido','velandia')

    localStorage.setItem('nombre','julia')
    localStorage.setItem('apellido','velandia')

)};

let botonborrar=document.getElementById("btnborrar");
botonborrar
