import React from "react";
import "./App.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const pdata = [
  {
    date: "12/07/2021",
    amount: 50000,
  },
  {
    date: "13/07/2021",
    amount: 10000,
  },
  {
    date: "14/07/2021",
    amount: 45000,
  },
  {
    date: "15/07/2021",
    amount: 20000,
  },
  {
    date: "16/07/2021",
    amount: 40000,
  },
];

const OrderChart = () => {
  return (
    <>
      <h1>Order Amount</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 100, left: 100, bottom: 5 }}
        >
          <CartesianGrid />
          <XAxis dataKey="date" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
          <Legend />
          <Line
            dataKey="amount"
            stroke="DodgerBlue"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default OrderChart;
