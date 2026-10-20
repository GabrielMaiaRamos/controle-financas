import { useState } from "react";

//getMonth and getDay indices start with 0; therefore, increment (+1) is necessary in both cases
//padStart("2", 0) forces the String to have two indices at least. If only have one, adds "0" in index 0
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function TransactionForm({ onAddTransaction }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Gasto');
    const [category, setCategory] = useState('Alimentação');
    const [date, setDate] = useState(getCurrentDate);
    

    // Each handler updates only its field state.
    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    function handleTypeChange(event) {
        setType(event.target.value);
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }

    function handleDateChange(event) {
        setDate(event.target.value);
    }

    function handleSubmit(event) {
        // Prevent the form from reloading the page on submit.
        event.preventDefault();

        // trim() removes leading and trailing spaces.
        if (!description.trim() || !amount) {
            alert('Preencha a descricao e o valor.');
            return;
        }
        // Each object represents a financial transaction.
        const newTransaction = {
            id: crypto.randomUUID(),
            description: description.trim(),
            amount: Number(amount),
            type,
            category,
            date,
        };

        onAddTransaction(newTransaction);

        // Reset the controlled fields after submitting.
        setDescription('');
        setAmount('');
        setCategory('Alimentação');
        setDate(getCurrentDate());
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ex: Mercado, salario ou viagem"
                value={description}
                onChange={handleDescriptionChange}
            />
        
            <div className="form-row">
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Valor em R$"
                    value={amount}
                    onChange={handleAmountChange}
                />

                <select
                    value={type}
                    onChange={handleTypeChange}
                >
                    <option value="Gasto">Gasto</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Plano">Plano</option>
                </select>
            </div>

            <div className="form-row">
                <select
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <option value="Alimentação">Alimentação</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Educação">Educação</option>
                    <option value="Outros">Outros</option>
                </select>

                <div className="date-field">
                    <input
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        aria-describedby="date-hint"
                    />

                    {/* Pequeno texto avisando o formato da data*/}
                    <small id="date-hint" className="date-hint">
                        mês-dia-ano
                    </small>
                </div>
            </div>

            <button type="submit">
                Adicionar lancamento
            </button>
        </form>
    );
}

export default TransactionForm;