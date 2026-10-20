function Filtros({busca, tipoFiltro, onBuscaChange, onTipoChange}){
    return (
        <div className="filtros">
            <input
                type="search" //esse tipo tem um "x" ao lado automático para remover
                placeholder="Buscar Lançamento"
                value={busca}
                onChange={(event)=>onBuscaChange(event.target.value)}
            />

            <select
                value={tipoFiltro}
                onChange={(event)=>onTipoChange(event.target.value)}
            >
                <option value="Todos">Todos</option>
                <option value="Gasto">Gastos</option>
                <option value="Entrada">Entradas</option>
                <option value="Plano">Planos</option>
            </select>
        </div>  
    );
}

export default Filtros;