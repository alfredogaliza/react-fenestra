import { faUpRightAndDownLeftFromCenter, faWindowClose, faWindowMaximize, faWindowMinimize, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Window extends Component {
    minimize(event) {
        event.stopPropagation();
        this.props.fenestra.minimize();
    }

    toggleMaximized(event) {
        event.stopPropagation();
        this.props.fenestra.toggleMaximized();
    }

    close(event) {
        event.stopPropagation();
        this.props.fenestra.close();
    }

    startMove(event){
        if (!this.props.fenestra.maximized) {
            const posX = event.clientX || event.targetTouches[0]?.pageX;
            const posY = event.clientY || event.targetTouches[0]?.pageY;
            this.props.fenestra.startMove(posX, posY);
        }
    }

    startResize(event){
        const posX = event.clientX || event.targetTouches[0]?.pageX;
        const posY = event.clientY || event.targetTouches[0]?.pageY;
        this.props.fenestra.startResize(posX, posY);
    }
    
    render() {
        
        const style = {
            top: this.props.fenestra.top,
            left: this.props.fenestra.left,
            width: this.props.fenestra.width,
            height: this.props.fenestra.height
        };

        return (
            <Card onMouseDown={() => this.props.fenestra.activate()} style={style} className={this.props.fenestra.minimized ? 'fenestra-minimized' : (this.props.fenestra.maximized ? 'd-flex flex-column fenestra-maximized' : 'd-flex flex-column fenestra-normal') + (this.props.fenestra.active ? ' fenestra-active' : '')}>
                <Card.Header
                    onMouseDown={event => this.startMove(event)}
                    onTouchStart={event => this.startMove(event)}
                    onDoubleClick={() => this.props.fenestra.toggleMaximized()}
                    className={this.props.fenestra.active ? 'bg-dark text-light d-flex justify-content-between align-items-center' : 'bg-light text-secondary d-flex justify-content-between align-items-center'}>
                    <div>{this.props.fenestra.title}</div>
                    <div className="fenestra-window-buttons">
                        <Button title="Minimizar" size="sm" variant={this.props.fenestra.active ? 'outline-light' : 'outline-secondary'} className="mr-2" onClick={event => this.minimize(event)}>
                            <FontAwesomeIcon icon={faWindowMinimize} />
                        </Button>
                        <Button title={this.props.fenestra.maximized ? 'Restaurar' : 'Maximizar'} size="sm" variant={this.props.fenestra.active ? 'outline-light' : 'outline-secondary'} className="mr-2" onClick={event => this.toggleMaximized(event)}>
                            <FontAwesomeIcon icon={this.props.fenestra.maximized ? faWindowRestore : faWindowMaximize} />
                        </Button>
                        <Button title="Fechar" size="sm" variant={this.props.fenestra.active ? 'danger' : 'outline-danger'} className="mr-0" onClick={event => this.close(event)}>
                            <FontAwesomeIcon icon={faWindowClose} />
                        </Button>
                    </div>
                </Card.Header>
                <Card.Body className="flex-grow-1">
                    <this.props.fenestra.content window={this.props.window} {...window.props} />
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div className="small">
                        Status:
                    </div>
                    {!this.props.fenestra.maximized &&
                        <div
                            className="text-right"
                            onMouseDown={event => this.startResize(event)}
                            onTouchStart={event => this.startResize(event)}
                        >
                            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                        </div>}
                </Card.Footer>
            </Card>
        );
    }
}
export default Window;
