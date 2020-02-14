import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./HomePage.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.qrCodeDataRef = React.createRef();
  }

  state = {
    qrCodeImage: {}
  };

  goToStart = () => {
    this.props.history.push(`/questions/123`);
  };

  render() {
    return (
      <div className="mainGrid">
        <div className="welcomeItem">
          <h1>Welcome to skills comparator</h1>
        </div>
        <div></div>
        <div className="carouselItem">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carrousel1.png"
                alt="Team Slide"
              />
              <Carousel.Caption>
                <h3>Help your team to find it's balance!</h3>
                <p>
                  Skill comparator will show where are your team strengths and
                  weakness
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carrousel2.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Use data properly</h3>
                <p>Analyse and download the data generated</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carrousel3.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Easy, fast and fun</h3>
                <p>100% mobile!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div></div>
        <div></div>
        <div>
          <Button onClick={this.goToStart} variant="outline-success">
            Start now!
          </Button>
        </div>
        <div></div>
      </div>
    );
  }
}

export default HomePage;
