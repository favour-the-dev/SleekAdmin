"use client";
import StatsCard from "./components/StatsCard";
import TrendChart from "./components/TrendChart";
import { dashStats } from "@/app/utilis/data";
import { useEffect } from "react";
function Dashboard() {
  const { stats } = dashStats;
  const { users, artisans, jobs, jobsCompleted, revenue } = stats;

  useEffect(() => {
    console.log(
      users.total,
      artisans.total,
      jobsCompleted.total,
      jobs.total,
      revenue.total
    );
  }, []);
  return (
    <>
      <section className="w-screen lg:w-full p-5 flex flex-col gap-4">
        <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <StatsCard statName="users" api={users} />
          <StatsCard statName="Artisans" api={artisans} />
          <StatsCard statName="revenue" api={revenue} isRevenue={true} />
          <StatsCard statName="Job Requests" api={jobs} />
          <StatsCard statName="Jobs Completed" api={jobsCompleted} />
          <TrendChart />
        </div>

        {/* table */}
      </section>
    </>
  );
}

export default Dashboard;
