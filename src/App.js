import "./App.css";
import BaiTapLayout from "./Component/BaiTapLayOut/BaiTapLayout";
import DemoComponent from "./Component/buoimot/DemoComponent";
import DemoState from "./Component/demoState/DemoState";
import BaiTapCar from "./Component/bt_car_basic/BaiTapCar";
import BaiTapMovie from "./Component/bt_car_basic/BaiTapMovie";
import DemoProps from "./Component/demoProps/DemoProps";
import TrangChuSanPham from "./Component/bt_phone/TrangChuSanPham";
import ShoesStory from "./Component/bt_ShoesShop/ShoesStory";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DemoComponent /> */}
      {/* <DemoState /> */}
      {/* <BaiTapCar /> */}
      {/* <BaiTapMovie /> */}
      {/* <DemoProps /> */}
      {/* <TrangChuSanPham /> */}
      <ShoesStory />
    </div>
  );
}

export default App;
