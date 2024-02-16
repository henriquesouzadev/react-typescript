import React from "react";
import DateInput from "./DateInput";
import { useData } from "src/Context/DataContext";

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData()

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={(e) => setInicio(e.target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={(e) => setFinal(e.target.value)}
      />
    </form>
  );
};

export default DateRange;
