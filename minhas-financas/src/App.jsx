import { useEffect, useState } from "react"
import "./App.css"

import LancamentoForm from "./components/LancamentoForm";
import LancamentosLista from "./components/LancamentosLista";
import Filtros from "./components/Filtros";

function App() {
  // useState cria um estado e uma funcao para atualiza-lo.
  // Quando o estado muda, o React renderiza a interface novamente.
  const [lancamentos, setLancamentos] = useState(()=>{
    const savedData = localStorage.getItem("controleFinancas");

    if(!savedData) return [];

    try {
      return JSON.parse(savedData);
    } catch {
      return [];
    }
  });

  //Filtragem
  const [busca, setBusca] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("Todos");
  
  const lancamentosFiltrados = lancamentos.filter((lancamento) => {
    const correspondeBusca = lancamento.descricao
      .toLowerCase()
      .includes(busca.toLowerCase());
    const correspondeTipo = tipoFiltro === "Todos" || tipoFiltro === lancamento.tipo;
    return correspondeBusca && correspondeTipo;
  });

  function saveData() {
    localStorage.setItem("controleFinancas", JSON.stringify(lancamentos));
  }
  useEffect(saveData, [lancamentos]); //[lancamentos] faz o efeito executar sempre que a lista muda e salva a versao mais recente no localStorage.


  function adicionarLancamento(novoLancamento) {
    // O spread (...) copia os itens antigos e coloca o novo no final da lista.
    setLancamentos((listaAtual) => [...listaAtual, novoLancamento])
  }

  function removerLancamento(id) {
    // filter cria uma nova lista mantendo todos os itens, menos o selecionado.
    setLancamentos((listaAtual) => listaAtual.filter((lancamento) => lancamento.id !== id));
  }

  return (
    <div className="container">
      <div className="cabecalho">
        <p className="eyebrow">ORGANIZACAO PESSOAL</p>
        <h1>Controle Financas</h1>
        <p className="subtitulo">Registre seus movimentos e acompanhe seus planos.</p>
      </div>

      <section className="secao formulario-secao">
        <LancamentoForm
          onAdicionar={adicionarLancamento}
        />
      </section>

      <section className="secao filtros-secao">
        <Filtros
          busca={busca}
          tipoFiltro={tipoFiltro}
          onBuscaChange={setBusca}
          onTipoChange={setTipoFiltro}
        />
      </section>

      <section className="secao lista-secao">
        <LancamentosLista
          lancamentos={lancamentosFiltrados}
          onRemover={removerLancamento}
        />
      </section>
    </div>
  );
}

export default App;