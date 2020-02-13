import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./LiveComparator.css";
import QRCodeImage from "./QRCodeImage";

class LiveComparator extends Component {
  render() {
    return (
      <div className="liveComparatorGrid">
        <div className="comparatorGrid">
          <div className="playersDiv">
            <h2 className="display-4">Waiting for players</h2>
            <h5>Players online: 9</h5>
          </div>
          <div className="qrCodeOutside">
            <QRCodeImage />
          </div>
          <div className="area">
            {/* <ProgressBar
              now={70}
              animated="true"
              label="70%"
              className="progressBar"
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default LiveComparator;
