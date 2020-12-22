 const elementConcluir = () => {

    const elementoBotao = document.createElement('button');
          elementoBotao.classList.add('btnForm');
          elementoBotao.innerHTML = 'Concluir';

          elementoBotao.addEventListener('click', concluirTarefa);

    return elementoBotao;
}

 const concluirTarefa = (evento) => {

    const elementRiscado = evento.target.parentElement;
          elementRiscado.classList.toggle('done');
}


export default elementConcluir;