import React from "react";
import VendaItem from "src/Components/VendaItem";
import { useData } from "src/Context/DataContext";

const Vendas = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
