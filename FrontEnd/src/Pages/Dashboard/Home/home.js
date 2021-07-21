import Chart from "../../../Components/chart/Chart";
import FeaturedInfo from "../../../Components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../../Components/widgetSm/WidgetSm";
import WidgetLg from "../../../Components/widgetLg/WidgetLg";

export default function Home() {

  const userData = {};

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}