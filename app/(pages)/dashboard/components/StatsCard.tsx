"use client";

import { useState } from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiArrowTrendingDown } from "react-icons/hi2";
import { HiOutlineCollection } from "react-icons/hi";

interface statsProps {
  total: number;
  weekly: {
    total: number;
    change: number;
  };
  monthly: {
    total: number;
    change: number;
  };
  yearly: {
    total: number;
    change: number;
  };
}

interface statsCardProps {
  statName: string;
  isRevenue?: boolean;
  api: statsProps;
}
function StatsCard({ statName, isRevenue = false, api }: statsCardProps) {
  const [filterState, setFilterState] = useState<{
    filter: string;
    type: string;
  }>({ filter: "all-time", type: "" });

  // handles the filter select and sets the filter state based on the selected value
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
    }
  }

  //  formats the number to text format
  function formatToText(value: number): string {
    return value.toLocaleString("en-US");
  }

  //  formats the number to naira currency format
  function formatToNaira(value: number | string) {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(Number(value));
  }

  // handles the filter state change and returns the value of the change based on the selected filter
  function handleFilterStateChange() {
    if (filterState.filter === "weekly") {
      return api.weekly.change;
    } else if (filterState.filter === "monthly") {
      return api.monthly.change;
    } else if (filterState.filter === "yearly") {
      return api.yearly.change;
    } else if (filterState.filter === "all-time") {
      return 0;
    }
    return 0;
  }

  // handles the filter state change and returns the value of the total based on the selected filter
  function handleFilterStateChangeTotal() {
    if (filterState.filter === "weekly") {
      return api.weekly.total;
    } else if (filterState.filter === "monthly") {
      return api.monthly.total;
    } else if (filterState.filter === "yearly") {
      return api.yearly.total;
    } else if (filterState.filter === "all-time") {
      return api.total;
    }
    return 0;
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
              <option value="all-time">All Time</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>

        {/* data */}
        <div className={`flex flex-col gap-8`}>
          <span className="font-semibold text-3xl">
            {isRevenue
              ? formatToNaira(handleFilterStateChangeTotal())
              : formatToText(handleFilterStateChangeTotal())}
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
                handleFilterStateChange() > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {isRevenue
                ? formatToNaira(Math.abs(handleFilterStateChange()))
                : formatToText(Math.abs(handleFilterStateChange()))}{" "}
            </span>{" "}
            {`${handleFilterStateChange() > 0 ? "increase" : "decrease"} vs. ${
              filterState?.type
            }`}{" "}
            <span>
              {handleFilterStateChange() > 0 ? (
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
