
let header = document.querySelector('.header');
let info = document.querySelector('.info');
let cargando = ()=>{
    document.querySelector('.carta').classList.remove('cargando');
    header.classList.remove('cargando');
    info.classList.remove('cargando');
    document.querySelector('.persona').classList.remove('cargando');
    document.querySelector('.textos').remove()
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    h2.classList.add('carta-texto')
    info.insertBefore(h2,info.children[1])
    header.innerHTML = '<img id="imagen" src="pc.webp" alt="pc-chill"></img>'
    document.querySelector('.persona-foto').innerHTML ='<img id="perfil" src="persona.jpg" alt="mike-perfil">'
    document.querySelector('.carta-titulo').innerHTML='Lorem ipsum dolor sit amet'
    document.querySelector('.carta-autor').innerHTML ='Mike Tyson'
    document.querySelector('.carta-fecha').innerHTML='Feb 27, 2002'
}

window.addEventListener('load',setTimeout(cargando,2500));









