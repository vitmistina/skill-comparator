import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./LiveComparator.css";
import QRCodeImage from "./QRCodeImage";

class LiveComparator extends Component {
  render() {
    return (
      <div className="comparatorGrid">
        <div className="area"></div>
        <div className="area">
          <div className="playersDiv">
            <div>Waiting for players</div>
            <div>Players: 9</div>
          </div>
        </div>
        <div className="area"></div>
        <div className="area"></div>
        <div className="area">
          <div className="qrCodeOutside">
            <div className="qrCodeInside">
              <QRCodeImage/>
            </div>          
            <h5>Scan to play</h5>  
          </div>
        </div>
        <div className="area"></div>
        <div className="area"></div>
        <div className="area">
          <ProgressBar now={70} label="70%" className="progressBar"/>
        </div>
        <div className="area"></div>
      </div>
    );
  }
}

export default LiveComparator;
