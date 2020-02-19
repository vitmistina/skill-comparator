import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./MainScreenLobby.css";
import QRCodeImage from "./QRCodeImage";

class MainScreenLobby extends Component {
  render() {
    return (
      <div className="liveComparatorGrid">
        <div className="comparatorGrid">
          <div className="playersDiv">
            <h2 className="display-4">Waiting for players</h2>
          </div>
          <div className="qrCodeOutside">
            <QRCodeImage
              url={`${window.location.origin}/questions/${this.props.match.params.Id}`}
            />
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

export default MainScreenLobby;
