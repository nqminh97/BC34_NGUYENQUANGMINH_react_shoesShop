import React, { Component } from "react";
import DanhSachSp from "./DanhSachSp";
import dataPhone from "./dataPhone.json";
import SanPham from "./SanPham";

export default class TrangChuSanPham extends Component {
  state = {
    statePhone: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./ImagePhone/vsphone.jpg",
    },
  };

  handleChitiet = (item) => {
    this.setState({
      statePhone: item,
    });
  };

  render() {
    let { statePhone } = this.state;
    return (
      <div className="container">
        <DanhSachSp
          dataPhoneProps={dataPhone}
          handleChitiet={this.handleChitiet}
        />

        <SanPham statePhone={statePhone} />
      </div>
    );
  }
}
