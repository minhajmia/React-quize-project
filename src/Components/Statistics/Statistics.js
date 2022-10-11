import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const datas = useLoaderData().data;
  const showData = [
    { name: ` ${datas[0].name}`, value: `${datas[0].total}` },
    { name: ` ${datas[1].name}`, value: `${datas[1].total}` },
    { name: ` ${datas[2].name}`, value: `${datas[2].total}` },
    { name: ` ${datas[3].name}`, value: `${datas[3].total}` },
  ];
  // console.log(datas[0].total);
  return (
    <div className="text-center flex justify-center flex-col items-center mt-20">
      <h2 className="text-3xl font-bold text-slate-500 mb-10 sm-w-full">
        Total Questions
      </h2>
      <BarChart
        width={500}
        height={300}
        data={showData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
};

export default Statistics;
