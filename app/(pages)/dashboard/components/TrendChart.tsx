"use client";
import { LineChart } from "@mantine/charts";
import { data } from "@/app/utilis/data";
import { useEffect, useState } from "react";

function TrendChart() {
  const [currentQuater, setCurrentQuater] = useState<string>("q1");
  const [currentChartData, setCurrentChartData] = useState<
    {
      month: string;
      Electricians: number;
      Plumbers: number;
      Carpenters: number;
    }[]
  >([]);

  useEffect(() => {
    if (currentQuater === "q1") {
      setCurrentChartData(data.slice(0, 3));
    } else if (currentQuater === "q2") {
      setCurrentChartData(data.slice(3, 6));
    } else if (currentQuater === "q3") {
      setCurrentChartData(data.slice(6, 9));
    } else if (currentQuater === "q4") {
      setCurrentChartData(data.slice(9, 12));
    }
  }, [currentQuater]);
  return (
    <div className="cursor-pointer w-full max-w-[400px] lg:max-w-[300px] mx-auto bg-white p-2 border border-gray-200 rounded-lg flex flex-col justify-center">
      <div className="w-full flex items-center justify-between mb-4">
        <h2 className="text-shadeGray text-lg font-semibold">
          Trending Artisans
        </h2>
        <div className="w-fit border border-gray-300 rounded-xl text-sm">
          <select
            onChange={(e) => setCurrentQuater(e.target.value)}
            name="quaterly-trend-table"
            className="filter focus:outline-none px-2 py-1 text-shadeGray cursor-pointer"
          >
            <option value="q1">Q1</option>
            <option value="q2">Q2</option>
            <option value="q3">Q3</option>
            <option value="q4">Q4</option>
          </select>
        </div>
      </div>
      <LineChart
        h={150}
        data={currentChartData}
        dataKey="month"
        withPointLabels
        withLegend
        legendProps={{ verticalAlign: "bottom", height: 10 }}
        series={[
          {
            name: "Electricians",
            label: "Electricians sales",
            color: "indigo.6",
          },
          { name: "Plumbers", label: "Plumbers sales", color: "red.6" },
          { name: "Carpenters", label: "Carpenters sales", color: "teal.6" },
        ]}
        curveType="linear"
      />
    </div>
  );
}

export default TrendChart;
