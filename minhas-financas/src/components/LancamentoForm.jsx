import { useState } from "react";

function LancamentoForm({ onAdicionar }) {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('Gasto');

    // Cada handler recebe o evento e atualiza somente o estado do seu campo.
    function onDescricaoChange(event) {
        setDescricao(event.target.value);
    }

    function onValorChange(event) {
        setValor(event.target.value);
    }

    function onTipoChange(event) {
        setTipo(event.target.value);
    }

    function handleSubmit(event) {
        // Evita que o formulario recarregue a pagina ao ser enviado.
        event.preventDefault();

        // trim() remove espacos no inicio e no fim da descricao.
        if (!descricao.trim() || !valor) {
            alert('Preencha a descricao e o valor.');
            return;
        }
        // Um novo objeto representa cada lancamento financeiro.
        const novoLancamento = {
            id: crypto.randomUUID(),
            descricao: descricao.trim(),
            valor: Number(valor),
            tipo,
        };

        onAdicionar(novoLancamento);

        // Depois de adicionar, limpamos os campos controlados pelo estado.
        setDescricao('');
        setValor('');
    }

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ex: Mercado, salario ou viagem"
                value={descricao}
                onChange={onDescricaoChange}
            />

        <div className="linha-formulario">
            <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Valor em R$"
                value={valor}
                onChange={onValorChange}
            />

            <select
                value={tipo}
                onChange={onTipoChange}
            >
                <option value="Gasto">Gasto</option>
                <option value="Entrada">Entrada</option>
                <option value="Plano">Plano</option>
            </select>
        </div>

            <button type="submit">
                Adicionar lancamento
            </button>
        </form>
    );
}

export default LancamentoForm;