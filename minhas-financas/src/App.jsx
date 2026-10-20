import { useEffect, useState } from "react"
import "./App.css"

import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Filters from "./components/Filters";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedData = localStorage.getItem("financeTransactions")
      || localStorage.getItem("controleFinancas");

    if(!savedData) return [];

    try {
      return JSON.parse(savedData).map((transaction) => ({
        id: transaction.id,
        description: transaction.description ?? transaction.descricao,
        amount: transaction.amount ?? transaction.valor,
        type: transaction.type ?? transaction.tipo,
        category: transaction.category ?? transaction.categoria,
        date: transaction.date ?? transaction.data,
      }));
    } catch {
      return [];
    }
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("Todos");
  
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "Todos" || typeFilter === transaction.type;
    return matchesSearch && matchesType;
  });

  function saveTransactions() {
    localStorage.setItem("financeTransactions", JSON.stringify(transactions));
  }
  useEffect(saveTransactions, [transactions]);

  function addTransaction(newTransaction) {
    setTransactions((currentTransactions) => [...currentTransactions, newTransaction]);
  }

  function removeTransaction(id) {
    setTransactions((currentTransactions) =>
      currentTransactions.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <div className="container">
      <div className="header">
        <p className="eyebrow">ORGANIZACAO PESSOAL</p>
        <h1>Controle Financas</h1>
        <p className="subtitle">Registre seus movimentos e acompanhe seus planos.</p>
      </div>

      <section className="section form-section">
        <TransactionForm
          onAddTransaction={addTransaction}
        />
      </section>

      <section className="section filters-section">
        <Filters
          searchTerm={searchTerm}
          typeFilter={typeFilter}
          onSearchChange={setSearchTerm}
          onTypeChange={setTypeFilter}
        />
      </section>

      <section className="section list-section">
        <TransactionList
          transactions={filteredTransactions}
          onRemove={removeTransaction}
        />
      </section>
    </div>
  );
}

export default App;