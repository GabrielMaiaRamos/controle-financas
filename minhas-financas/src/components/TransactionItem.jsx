function formatAmount(amount) {
    return new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(amount);
}

function TransactionItem({ transaction, onRemove }) {
    const formattedAmount = formatAmount(transaction.amount);
    const typeClass = {
        Gasto: "expense",
        Entrada: "income",
        Plano: "plan",
    }[transaction.type] || "plan";
    
    return(
        <div className={`item-card ${typeClass}`}>
            <span>
                <strong>{transaction.type}</strong>
                {transaction.description}
            </span>

            <span className="amount">
                {formattedAmount}
            </span>

            <button
                className="delete-button"
                aria-label={`Remover ${transaction.description}`}
                onClick={() => onRemove(transaction.id)}
            >
                X
            </button>

            <div>
                <span>
                    {transaction.category}
                </span>
            </div>
        </div>
        
    );
}

export default TransactionItem;