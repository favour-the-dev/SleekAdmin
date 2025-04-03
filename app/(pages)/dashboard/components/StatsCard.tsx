"use client";

import { useState } from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiArrowTrendingDown } from "react-icons/hi2";
import { HiOutlineCollection } from "react-icons/hi";

interface statsCardProps {
  statName: string;
  statData: number;
  statChange: number;
  isRevenue?: boolean;
}
function StatsCard({
  statName,
  statData,
  statChange,
  isRevenue = false,
}: statsCardProps) {
  const [filterState, setFilterState] = useState<{
    filter: string;
    type: string;
  }>({ filter: "weekly", type: "last Week" });

  function handleFilterSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value) {
      if (e.target.value === "weekly") {
        setFilterState({ filter: "weekly", type: "Last Week" });
      } else if (e.target.value === "monthly") {
        setFilterState({ filter: "monthly", type: "Last Month" });
      } else if (e.target.value === "yearly") {
        setFilterState({ filter: "yearly", type: "Last Year" });
      } else if (e.target.value === "all-time") {
        setFilterState({ filter: "all-time", type: "" });
      }
    } else {
      setFilterState({ filter: "weekly", type: "last Week" });
    }
  }

  function formatToText(value: number): string {
    return value.toLocaleString("en-US");
  }

  function formatToNaira(value: number | string) {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(Number(value));
  }
  return (
    <>
      <div className="bg-white p-5 min-w-[300px] border border-gray-200 rounded-lg">
        {/* head */}
        <div className="flex items-center justify-between">
          {/* name */}
          <span className="text-lg text-shadeGray capitalize font-semibold">
            {statName}
          </span>

          {/* filter */}
          <div className="w-fit border border-gray-300 rounded-xl text-sm">
            <select
              onChange={(e) => handleFilterSelect(e)}
              name="filter-data"
              className="filter focus:outline-none px-2 py-1 text-shadeGray cursor-pointer"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="all-time">All Time</option>
            </select>
          </div>
        </div>

        {/* data */}
        <div className={`flex flex-col gap-8`}>
          <span className="font-semibold text-3xl">
            {isRevenue ? formatToNaira(statData) : formatToText(statData)}
          </span>

          <span
            className={`${
              filterState.filter === "all-time" ? "flex" : "hidden"
            } text-shadeGray text-[14px] items-center gap-1 capitalize`}
          >
            <HiOutlineCollection />
            <h2>collective Total</h2>
          </span>
          <span
            className={`${
              filterState.filter === "all-time" ? "hidden" : "flex"
            } text-shadeGray text-[14px] items-center gap-1`}
          >
            <span
              className={`${
                statChange > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {isRevenue
                ? formatToNaira(Math.abs(statChange))
                : formatToText(Math.abs(statChange))}
            </span>{" "}
            {`${statChange > 0 ? "increase" : "decrease"} vs. ${
              filterState?.type
            }`}{" "}
            <span>
              {statChange > 0 ? (
                <HiArrowTrendingUp className="text-green-500" />
              ) : (
                <HiArrowTrendingDown className="text-red-500" />
              )}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default StatsCard;
