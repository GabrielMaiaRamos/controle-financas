//Buscar elementos HTML
const inputTitulo = document.getElementById('titulo');
const selectCategoria = document.getElementById('categoria');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaItens = document.getElementById('lista-itens');

//memoria central
let catalogo = [];

//funcao para desenhar na tela baseado na memoria
function renderScreen(){
    listaItens.innerHTML = ''; //limpa tudo da tela

    catalogo.forEach(function(item){
        const novoCard = document.createElement('div'); //cria a caixa (div) do elemento
        novoCard.classList.add('container'); //adiciona a classe do CSS

        novoCard.innerHTML = `
            <div class="item-card">
                <strong>${item.categoria}:</strong>${item.titulo}
            </div>
            <button class="btn-remover" data-id="${item.id}">Remover</button>
            
        `;
        //adiciono o data-id do item no botao, para quando for apertado, saber qual id remover
        listaItens.appendChild(novoCard);
    });
}

//salvar dados no localStorage
function saveData(){
    //localStorage so aceita textos, JSON.stringify transforma o Array em um texto formato JSON
    const dadosEmTextoJSON = JSON.stringify(catalogo);
    console.log(dadosEmTextoJSON);
    localStorage.setItem('meuCatalogoSalvo', dadosEmTextoJSON);
}

//carregar dados do navegador ao abrir site
function loadData(){
    const dadosDoNavegador = localStorage.getItem('meuCatalogoSalvo');

    if (dadosDoNavegador) {
        //JSON.pase faz o caminho inverso: transforma texto JSON de volta em um Array
        catalogo = JSON.parse(dadosDoNavegador);
        renderScreen();
    }
}

listaItens.addEventListener('click', function(evento){
    //so faz a funcao caso seja o botao de remover
    const btn = evento.target.closest('.btn-remover');
    if(!btn) return;
    
    //pega o id do item
    const id = btn.dataset.id;

    //cria uma nova lista com todo os itens em que o id é diferente do clicado
    catalogo = catalogo.filter(function(item){
        return item.id !== id;
    });

    saveData();
    renderScreen();
})

//acao de clicar no botao
btnAdicionar.addEventListener('click', function(){

    //busca os inputs
    const titulo = inputTitulo.value;
    const categoria = selectCategoria.value;

    if (titulo == ''){ //verificacao de seguranca
        alert('Por favor, digite o título.');
        return;
    }
    
    //criar um objeto com os dados dos inputs
    const novoItem = {
        id: crypto.randomUUID(), //gera um ID random e unico
        titulo: titulo,
        categoria: categoria
    };

    //coloca na memoria central
    catalogo.push(novoItem);

    //salva a memoria atualzada no navegador
    saveData();

    //renderiza na tela
    renderScreen();

    inputTitulo.value = ''; //limpa caixa de texto
    inputTitulo.focus(); //coloca o cursor piscando de volta na caixa de texto
});

loadData();