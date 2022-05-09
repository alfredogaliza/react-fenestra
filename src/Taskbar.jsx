import { Component } from "react";
import { Button, Navbar } from "react-bootstrap";

class Taskbar extends Component {

  static defaultProps = {
    fenestra: {}
  }

  render() {
    return (
      <Navbar className="bg-dark fenestra-taskbar"> 
        {this.props.windows.map((window, key) =>
          <Button className="fenestra-taskbar-button mx-1" title={window.title} key={key} variant="outline-primary" active={window.active} onClick={() => window.activate()}>
            {window.title}
          </Button>
        )}&nbsp;
      </Navbar>
    );
  }
}

export default Taskbar;
