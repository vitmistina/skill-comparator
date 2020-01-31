import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./LiveComparator.css";
import QRCodeImage from "./QRCodeImage";

class LiveComparator extends Component {
  render() {
    return (
      <div className="comparatorGrid">
        <div className="area"></div>
        <div className="area"></div>
        <div className="area"></div>
        <div className="area"></div>
        <div className="area qrCodeOutside">
          <QRCodeImage />
        </div>
        <div className="area"></div>
        <div className="area"></div>
        <div className="area"></div>
        <div className="area"></div>
      </div>
    );
  }
}

export default LiveComparator;
