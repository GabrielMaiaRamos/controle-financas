//Buscar elementos HTML
const inputTitulo = document.getElementById('titulo');
const selectCategoria = document.getElementById('categoria');
const btnAdicionar = document.getElementById('button_adicionar');
const listaItens = document.getElementById('lista_itens');

//memoria central
let catalogo = []

//funcao para desenhar na tela baseado na memoria
function renderScreen(){
    listaItens.innerHTML = ''; //limpa tudo da tela

    catalogo.forEach(function(item){
        const novoCard = document.createElement('div');
        novoCard.classList.add('item_card');
        novoCard.innerHTML = `<strong>${item.categoria}:</strong> ${item.titulo}`;
        listaItens.appendChild(novoCard);
    });
}

//salvar no navegador
//acao de clicar no botao
btnAdicionar.addEventListener('click', function(){
    const titulo = inputTitulo.value;
    const categoria = selectCategoria.value;

    if (titulo == ''){ //verificacao de seguranca
        alert('Por favor, digite o título.');
        return;
    }
    
    //logica para adicionar novo item
    const novoCard = document.createElement('div'); //cria a caixa(div) do elemento
    novoCard.classList.add('item_card'); //adiciona elemento CSS
    novoCard.innerHTML = `<strong>${categoria}: </strong>${titulo}`; //texto dentro da caixa
    listaItens.append(novoCard);

    inputTitulo.value = ''; //limpa caixa de texto
    inputTitulo.focus(); //coloca o cursor piscando de volta na caixa de texto
});