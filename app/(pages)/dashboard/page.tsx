import StatsCard from "./components/StatsCard";
import TrendChart from "./components/TrendChart";
function Dashboard() {
  return (
    <>
      <section className="w-screen lg:w-full p-5 flex flex-col gap-4">
        <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <StatsCard statName="users" statData={2500} statChange={50} />
          <StatsCard statName="Artisans" statData={10000} statChange={500} />
          <StatsCard
            statName="revenue"
            statData={8010000}
            statChange={-500}
            isRevenue={true}
          />
          <StatsCard
            statName="Job Requests"
            statData={1270}
            statChange={-100}
          />
          <StatsCard
            statName="Jobs Completed"
            statData={500}
            statChange={200}
          />
          <TrendChart />
        </div>
      </section>
    </>
  );
}

export default Dashboard;
