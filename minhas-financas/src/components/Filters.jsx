function Filters({ searchTerm, typeFilter, onSearchChange, onTypeChange }) {
    return (
        <div className="filters">
            <input
                type="search" // This type adds a native clear button.
                placeholder="Buscar Lançamento"
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
            />

            <select
                value={typeFilter}
                onChange={(event) => onTypeChange(event.target.value)}
            >
                <option value="Todos">Todos</option>
                <option value="Gasto">Gastos</option>
                <option value="Entrada">Entradas</option>
                <option value="Plano">Planos</option>
            </select>
        </div>  
    );
}

export default Filters;