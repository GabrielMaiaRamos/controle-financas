import LancamentoItem from "./LancamentoItem";

function LancamentoList({lancamentos, onRemover}) {
    if (lancamentos.length === 0) {
        return (
            <p className="vazio">
                Nenhum lançamento por enquanto.
            </p>
        );
    }

    return (
        <div className="lista-itens">
            {lancamentos.map((lancamento) => (
                <LancamentoItem
                    key={lancamento.id}
                    lancamento={lancamento}
                    onRemover={onRemover}
                />
            ))}
        </div>
    );
}

export default LancamentoList;