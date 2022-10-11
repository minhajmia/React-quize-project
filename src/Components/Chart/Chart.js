import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Chart = ({ data }) => {
  const { total, name } = data;
  const showData = [{ name: { name }, uv: 400, pv: 2400, amt: 2400 }];

  console.log(data);
  console.log(total);
  return (
    <div>
      {" "}
      <LineChart width={600} height={300} data={showData}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Chart;
