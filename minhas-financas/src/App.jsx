import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [lancamentos, setLancamentos] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('Gasto');

  useEffect(() => {
    const savedData = localStorage.getItem('controleFinancas') || localStorage.getItem('minhasFinancas');
    if (savedData) setLancamentos(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    localStorage.setItem('controleFinancas', JSON.stringify(lancamentos));
  }, [lancamentos]);

  function adicionarLancamento(event) {
    event.preventDefault();
    if (!descricao.trim() || !valor) {
      alert('Preencha a descricao e o valor.');
      return;
    }

    setLancamentos([
      ...lancamentos,
      { id: crypto.randomUUID(), descricao: descricao.trim(), valor: Number(valor), tipo },
    ]);
    setDescricao('');
    setValor('');
  }

  function removerLancamento(id) {
    setLancamentos(lancamentos.filter((lancamento) => lancamento.id !== id));
  }

  function formatarValor(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

    return (
        <div className='container'>
      <div className='cabecalho'>
        <p className='eyebrow'>ORGANIZACAO PESSOAL</p>
        <h1>Controle Financas</h1>
        <p className='subtitulo'>Registre seus movimentos e acompanhe seus planos.</p>
      </div>

      <form className='formulario' onSubmit={adicionarLancamento}>
        <input
          type='text'
          placeholder='Ex: Mercado, salario ou viagem'
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
        <div className='linha-formulario'>
          <input
            type='number'
            min='0'
            step='0.01'
            placeholder='Valor em R$'
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
          <select value={tipo} onChange={(event) => setTipo(event.target.value)}>
            <option value='Gasto'>Gasto</option>
            <option value='Entrada'>Entrada</option>
            <option value='Plano'>Plano</option>
          </select>
        </div>
        <button type='submit'>Adicionar lancamento</button>
      </form>

      <div className='lista-itens'>
        {lancamentos.length === 0 ? (
          <p className='vazio'>Nenhum lancamento por enquanto.</p>
        ) : (
          lancamentos.map((lancamento) => (
            <div key={lancamento.id} className={`item-card ${lancamento.tipo.toLowerCase()}`}>
              <span>
                <strong>{lancamento.tipo}</strong>
                {lancamento.descricao}
              </span>
              <span className='valor'>{formatarValor(lancamento.valor)}</span>
              <button
                className='btn-excluir'
                aria-label={`Remover ${lancamento.descricao}`}
                onClick={() => removerLancamento(lancamento.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App