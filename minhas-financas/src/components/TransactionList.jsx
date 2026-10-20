import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onRemove }) {
    if (transactions.length === 0) {
        return (
            <p className="empty-state">
                Nenhum lançamento por enquanto.
            </p>
        );
    }

    return (
        <div className="transaction-list">
            {transactions.map((transaction) => (
                <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
}

export default TransactionList;