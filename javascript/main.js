import elementConcluir from '../javascript/concluirTarefa.js';
import elementDelete from '../javascript/deletaTarefa.js';

function selecaoDoInput(evento) {

    evento.preventDefault();

    const elementUl = document.querySelector('[data-list]');
    const elementInput = document.querySelector('[data-form-input]');
    const valor = elementInput.value;

    const elementLi = document.createElement('li');
    elementLi.classList.add('elementActive');

    const elementP = `<p class="paragrafo">${valor}</p>`;

    elementLi.innerHTML = elementP;
    elementLi.appendChild(elementConcluir());
    elementLi.appendChild(elementDelete());
    elementUl.appendChild(elementLi);

    elementInput.value = '';
}

const elementBtn = document.querySelector('[data-form-btn]');

elementBtn.addEventListener('click', selecaoDoInput);










