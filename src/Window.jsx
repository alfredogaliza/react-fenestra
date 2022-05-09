import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
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

    startMove(event) {
        if (!this.props.fenestra.maximized) {
            const posX = event.clientX || event.targetTouches[0]?.pageX;
            const posY = event.clientY || event.targetTouches[0]?.pageY;
            this.props.fenestra.startMove(posX, posY);
        }
    }

    startResize(event) {
        event.stopPropagation();
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
            <Card
                onMouseDown={() => this.props.fenestra.activate()}
                style={style}
                className={
                    'fenestra-window d-flex flex-column' +
                    (this.props.fenestra.active ? ' fenestra-window-active' : '') +
                    (this.props.fenestra.minimized ? ' fenestra-window-minimized' : '') +
                    (this.props.fenestra.resizeable ? ' fenestra-window-resizeable' : '') +
                    (this.props.fenestra.maximized ? ' fenestra-window-maximized' : '')
                }
            >
                <Card.Header
                    onMouseDown={event => this.props.fenestra.moveable && this.startMove(event)}
                    onTouchStart={event => this.props.fenestra.moveable && this.startMove(event)}
                    onDoubleClick={() => this.props.fenestra.resizeable && this.props.fenestra.toggleMaximized()}
                    className={
                        'd-flex justify-content-between align-items-center fenestra-window-title' +
                        (this.props.fenestra.active ? ' bg-dark text-light' : ' bg-light text-secondary')
                    }
                >
                    <div>{this.props.fenestra.title}</div>
                    <div className="fenestra-window-buttons" onMouseDown={e => e.stopPropagation()}>
                        <Button title="Minimizar" size="sm" variant={this.props.fenestra.active ? 'outline-light' : 'outline-secondary'} className="mr-2" onClick={event => this.minimize(event)}>
                            <FontAwesomeIcon icon={faWindowMinimize} />
                        </Button>
                        {this.props.fenestra.resizeable &&
                            <Button title={this.props.fenestra.maximized ? 'Restaurar' : 'Maximizar'} size="sm" variant={this.props.fenestra.active ? 'outline-light' : 'outline-secondary'} className="mr-2 d-none d-md-inline-block" onClick={event => this.toggleMaximized(event)}>
                                <FontAwesomeIcon icon={this.props.fenestra.maximized ? faWindowRestore : faWindowMaximize} />
                            </Button>}
                        <Button title="Fechar" size="sm" variant={this.props.fenestra.active ? 'danger' : 'outline-danger'} className="mr-0" onClick={event => this.close(event)}>
                            <FontAwesomeIcon icon={faWindowClose} />
                        </Button>
                    </div>
                </Card.Header>
                <Card.Body className="flex-grow-1 p-1 fenestra-window-body">
                    <this.props.fenestra.content fenestra={this.props.fenestra} />
                    <div
                        onMouseDown={event => this.startResize(event)}
                        onTouchStart={event => this.startResize(event)}
                        className="fenestra-window-resize">
                        <FontAwesomeIcon icon={faRulerCombined} flip="horizontal" size="xs" />
                    </div>
                </Card.Body>
            </Card>
        );
    }
}
export default Window;
