import React from "react";
import QRCode from "qrcode";

class QRCodeImage extends React.Component {
  constructor(props) {
    super(props);
    this.qrCodeDataRef = React.createRef();
  }

  state = {
    qrCodeImage: {}
  };

  componentDidMount() {
    QRCode.toDataURL(window.location.href, { margin: 1 })
      .then(url => {
        this.setState({ qrCodeImage: url });

        console.log("success");
        console.log(url);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log("----");
    console.log(this.state.qrCodeImage);

    return (
      <div className="qrcode">
        <img src={this.state.qrCodeImage} alt={this.qrCodeDataRef.current} />
      </div>
    );
  }
}

export default QRCodeImage;
