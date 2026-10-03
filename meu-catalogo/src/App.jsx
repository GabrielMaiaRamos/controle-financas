import { useState } from 'react'
import './App.css'
import { use } from 'react';
import { useEffect } from 'react';

export default App

function App() {
    //=====[VARIAVEIS]=====
    const [catalogo, setCatalogo] = useState([]); //catalogo de cards
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('Livro');
    
    //=====[HANDLE CHANGES]=====
    function onTituloChange(e){
        setTitulo(e.target.value);
    }
    
    function onCategoriaChange(e){
        setCategoria(e.target.value);
    }



    function loadData(){
        const savedData = localStorage.getItem('meuCatalogoReact');
        if (savedData)
            setCatalogo(JSON.parse(savedData));
    }

    function saveData(){
        localStorage.setItem('meuCatalogoReact', JSON.stringify(catalogo));
    }

    const adicionarItem = () => {
        if (titulo == ''){ //verificacao de input vazio
            alert('Por favor, digite o nome da obra!');
            return;
        }

        const newItem = {
            id: crypto.randomUUID,
            titulo: titulo,
            categoria: categoria
        };

        setCatalogo([...catalogo, newItem]); //atualiza a lista com o novo no final
        setTitulo(''); //limpa input de texto
    }

    const removeItem = () => {
        const newList = catalogo.filter((item) => item.id !== id);
        setCatalogo(newList);

    }

    useEffect(loadData, []); //faz a funcao SOMENTE na primeira vez que a tela carrega (segundo paramtro = [] garante que so ocorra uma vez)

    useEffect(saveData, [catalogo]); //faz a funcao SEMPRE que a variavel catalogo for alterada

    
   //JSX 
    return (
        <div className='container'>
            <h1>Meu Catálogo</h1>

            <div className='formulario'>
                {/*ALTERAR TITULO*/}
                <input  type='text'
                        placeholder='Ex: Viagem ao Centro da Terra'
                        value={titulo}
                        onChange={onTituloChange}
                />
                {/*ALTERAR CATEGORIA*/}
                <select
                    value={categoria}
                    onChange={onCategoriaChange}
                >
                        <option value="Livro">Livro</option>
                        <option value="Álbum">Álbum de Música</option>
                        <option value="Outros">Outros assuntos</option>
                </select>

                <button onClick={adicionarItem}>Adicionar</button>
            </div>
<div className="lista-itens">
        {/* Usamos as chaves {} para rodar código JavaScript no meio do HTML */}
        {/* O .map percorre o array e devolve o layout de card para cada item */}
        {catalogo.map((item) => (
          <div key={item.id} className="item-card">
            <span>
              <strong>{item.categoria}:</strong> {item.titulo}
            </span>
            <button
              className="btn-excluir"
              onClick={() => removerItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}