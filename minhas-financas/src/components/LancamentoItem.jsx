function formatarValor(valor) {
    return new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(valor);
}

function LancamentoItem({lancamento, onRemover}) {
    const valorFormatado = formatarValor(lancamento.valor); //formata para o padrao BRL
    
    return(
        /* adiciona a classe do tipo automaticamente*/
        <div className={`item-card ${lancamento.tipo.toLowerCase()}`}>
            <span>
                <strong>{lancamento.tipo}</strong>
                {lancamento.descricao}
            </span>

            <span className="valor">
                {valorFormatado}
            </span>

            <button
                className="btn-excluir"
                aria-label={`Remover ${lancamento.descricao}`}
                onClick={()=>onRemover(lancamento.id)}
            >
                X {/*botão de excluir é apenas um X*/}    
            </button>
        </div>
    );
}

export default LancamentoItem;