const input = document.querySelector('#inputTexto');
const buttonCriptografa = document.querySelector('#bt-1');
const buttonDescriptografa = document.querySelector('#bt-2');
const buttonCopia = document.querySelector('#bt-3');
const itensDescriptografados = document.querySelector('.itensDescriptografados');
const paragrafoResultado = document.querySelector('#paragrafo-resultado');



input.addEventListener('keyup', getDataUser);

let dataUser = '';

function getDataUser(event) {
    dataUser = event.target.value;

    if (dataUser != '') {

        buttonCriptografa.addEventListener('click', criptografar);
        buttonDescriptografa.addEventListener('click', descriptografar);
    } else {
        itensDescriptografados.style.display = 'block';
        paragrafoResultado.style.display = 'none';
        buttonCopia.style.display = 'none';
        buttonCriptografa.removeEventListener('click', criptografar);
        buttonDescriptografa.removeEventListener('click', descriptografar);
    }
}




function criptografar() {
    const textoUsuarioDescripto = dataUser.toLowerCase().split('');
    let resultadoCriptografado = '';

    textoUsuarioDescripto.map((item) => {

        if (item === 'a') {
            item = 'ai';
            resultadoCriptografado += item;

        } else if (item === 'e') {
            item = 'enter';
            resultadoCriptografado += item;

        } else if (item === 'i') {
            item = 'imes';
            resultadoCriptografado += item;

        } else if (item === 'o') {
            item = 'ober';
            resultadoCriptografado += item;

        } else if (item === 'u') {
            item = 'ufat';
            resultadoCriptografado += item;

        } else {
            resultadoCriptografado += item;
        }


    })

    renderizaCriptografia(resultadoCriptografado);
}


function descriptografar() {
    const textoCriptografado = dataUser.toLowerCase();
    let resultadoDescriptografado = textoCriptografado.replace(/ai/g, 'a')
    .replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    renderizaCriptografia(resultadoDescriptografado);
}


buttonCopia.addEventListener('click',copiaTextoGerado);

function renderizaCriptografia(palavraCriptografada) {

    buttonCopia.style.display = 'block';
    itensDescriptografados.style.display = 'none';
    paragrafoResultado.style.display = 'block';
   


    dataUser = palavraCriptografada
    paragrafoResultado.innerHTML = palavraCriptografada;

    

}

function copiaTextoGerado() {

    const textoUsuarioInicial = input.value
    
    input.value = dataUser
    input.select() 
    document.execCommand("copy")
    input.value = textoUsuarioInicial
   
    
   
}

