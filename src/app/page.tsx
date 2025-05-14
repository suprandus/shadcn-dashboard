import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      {/* Call AppBarChart component */}
      <div className="p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="p-4 rounded-lg">TODO: Card</div>
      <div className="p-4 rounded-lg">TODO: Card</div>
      <div className="p-4 rounded-lg">TODO: Card</div>
      <div className="p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>{" "}
      <div className="p-4 rounded-lg">TODO: Card</div>
    </div>
  );
};

export default Homepage;
