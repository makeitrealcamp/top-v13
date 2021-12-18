const FilterAndSort = ({ onFilterChange }) => {
  return (
    <div className="filterAndSearch">
      <button
        className="filterAndSearch__option"
        onClick={() => onFilterChange('limpiar')}
      >
        Limpiar Filtros
      </button>
      <button
        className="filterAndSearch__option"
        onClick={() => onFilterChange('menorAMayor')}
      >
        Ordenar por Menor Precio
      </button>
      <button
        className="filterAndSearch__option"
        onClick={() => onFilterChange('mayorAMenor')}
      >
        Ordenar por Mayor Precio
      </button>
      <div className="filterAndSearch__option">
        <label htmlFor="color">Filtrar Por Color: </label>
        <select
          name="color"
          id="color"
          onChange={e => onFilterChange('porColor', e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="verde">Verde</option>
          <option value="amarillo">Amarillo</option>
          <option value="rojo">Rojo</option>
        </select>
      </div>
    </div>
  );
};

export default FilterAndSort;
