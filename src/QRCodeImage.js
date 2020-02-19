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
    QRCode.toDataURL(this.props.url, { margin: 1 })
      .then(qrData => {
        this.setState({ qrCodeImage: qrData });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="qrcode">
        <img src={this.state.qrCodeImage} alt={this.qrCodeDataRef.current} />
      </div>
    );
  }
}

export default QRCodeImage;
