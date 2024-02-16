import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "src/Context/DataContext";

type IVendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

const transformData = (data: IVenda[]): IVendaDia[] => {
  const dias = data.reduce((acc: { [key: string]: IVendaDia }, item) => {
    const dia = item.data.split(" ")[0];

    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }

    acc[dia][item.status] += item.preco;

    return acc;
  }, {});

  return Object.values(dias)
};

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={2} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#387908"
          strokeWidth={2}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
