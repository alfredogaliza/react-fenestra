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
    return <Accordion as={ListGroup} variant='flush'>
      {menu.map((item, key) =>
        <ListGroupItem key={key}>
          {item.submenu ?
            <>
              <AccordionToggle as={Button} variant='link' eventKey={key + 1} className='w-100 text-left'>
                {item.title}
              </AccordionToggle>
              <AccordionCollapse eventKey={key + 1}>
                {this.buildMenu(item.submenu)}
              </AccordionCollapse>
            </> : <Button variant='link' className='w-100 text-left'>{item.title}</Button>}
        </ListGroupItem>
      )}
    </Accordion>
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
            <Dropdown.Menu style={{ width: '320px', zIndex: 100001 }}>{this.buildMenu(menu)}</Dropdown.Menu>
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
