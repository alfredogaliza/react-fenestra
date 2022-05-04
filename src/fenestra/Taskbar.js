import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Button, Card, Dropdown, Navbar } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

class Taskbar extends Component {

  static defaultProps = {
    menu: () => [],
    windows: [],
    fenestra: {}
  }

  buildMenu(menu) {
    return menu.map((item, key) =>
        <Card key={key}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={key + 1}>{item.title}</Accordion.Toggle>
          </Card.Header>
          {item.submenu &&
            <Accordion.Collapse eventKey={key + 1}>
              <Card.Body><Accordion variant="flush">{this.buildMenu(item.submenu)}</Accordion></Card.Body>
            </Accordion.Collapse>}
        </Card>)
  }

  render() {

    const menu = this.props.menu(this.props.fenestra);

    return (
      <Navbar fixed="bottom" className="bg-light fenestra-taskbar">
        {menu.length > 0 &&
          <Dropdown drop="up">
            <Dropdown.Toggle>
              <FontAwesomeIcon icon={faBars} />
            </Dropdown.Toggle>
            <Dropdown.Menu as={Accordion} variant="flush">
              {this.buildMenu(menu)}
            </Dropdown.Menu>
          </Dropdown>}
        {this.props.windows.map((window, key) =>
          <Button className="fenestra-taskbar-button mx-1" title={window.title} key={key} variant="outline-primary" active={window.active} onClick={() => window.activate()}>
            {window.title}
          </Button>
        )}
      </Navbar>
    );
  }
}

export default Taskbar;
