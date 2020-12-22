const elementDelete = () => {

    const elementBtnDelete = document.createElement('button');
    elementBtnDelete.classList.add('btnForm');
    elementBtnDelete.innerHTML = 'Delete';

    elementBtnDelete.addEventListener('click', elementDel);

    return elementBtnDelete;
}

const elementDel = (evento) => {

    const elementDelFull = evento.target.parentElement;
    elementDelFull.remove();

    return elementDelFull;
}

export default elementDelete;