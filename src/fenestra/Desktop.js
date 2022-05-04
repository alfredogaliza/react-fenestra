import { Component } from "react";
import Taskbar from "./Taskbar";
import Window from "./Window";

const defaults = {
    title: "Nova Janela",
    content: "div",
    props: {},
    maximized: false,
    minimized: false,
    active: true,
    top: 20,
    left: 20,
    width: 600,
    height: 400,
    moving: false,
    resizing: false
};

class Desktop extends Component {

    static defaultProps = {
        windows: [],
        icons: [],
        menu: () => [],
        onOpened: () => undefined
    }

    index =0;

    state = {
        windows: [],
        isMoving: false,
        isResizing: false,
        posX: 0,
        posY: 0,
        orgX: 0,
        orgY: 0,
        index: 1
    }

    componentDidMount() {
        this.props.windows.forEach(window => this.open(window, this.props.onOpened));
    }

    api(window) {
        return {
            ...window,
            open: (w, callback) => this.open(w, callback),
            close: w => this.close(w ?? window),
            minimize: w => this.minimize(w ?? window),
            toggleMaximized: w => this.toggleMaximized(w ?? window),
            activate: w => this.activate(w ?? window),
            setTitle: (title, w) => this.setTitle(w ?? window, title),
            setContent: (content, w) => this.setContent(w ?? window, content),
            setPosition: (top, left, w) => this.setPosition(w ?? window, top, left),
            setSize: (width, height, w) => this.setSize(w ?? window, width, height),
            startMove: (posX, posY, w) => this.startMove(w ?? window, posX, posY),
            startResize: (posX, posY, w) => this.startResize(w ?? window, posX, posY),
        }

    }

    startMove(window, posX, posY) {
        
        const orgX = this.state.windows.find(w => w.index === window.index)?.left;
        const orgY = this.state.windows.find(w => w.index === window.index)?.top;

        this.setState(state => ({
            windows: state.windows.map(w =>
                w.index === window.index ?
                    {
                        ...w,
                        moving: true
                    } :
                    w
            ),
            isMoving: true,
            posX, posY, orgX, orgY
        }));
    }

    startResize(window, posX, posY) {
        
        const orgX = this.state.windows.find(w => w.index === window.index)?.width;        
        const orgY = this.state.windows.find(w => w.index === window.index)?.height;

        this.setState(state => ({
            windows: state.windows.map(w =>
                w.index === window.index ?
                    {
                        ...w,
                        resizing: true
                    } :
                    w
            ),
            isResizing: true,
            posX, posY, orgX, orgY
        }));
    }

    stopMove() {
        if (this.state.isMoving || this.state.isResizing) {
            this.setState(state => ({
                windows: state.windows.map(w => ({
                    ...w,
                    moving: false,
                    resizing: false
                })),
                isMoving: false,
                isResizing: false
            }));
        }

    }

    move(event) {
        if (this.state.isMoving || this.state.isResizing) {

            const posX = event.clientX || event.targetTouches[0]?.pageX;
            const posY = event.clientY || event.targetTouches[0]?.pageY;

            this.setState(state => ({
                windows: state.windows.map(w =>
                    w.moving ?
                        {
                            ...w,
                            top: Math.min(Math.max(0, state.orgY + (posY - state.posY)), window.innerHeight - w.height),
                            left: Math.min(Math.max(0, state.orgX + (posX - state.posX)), window.innerWidth - w.width)
                        } :
                        (w.resizing ?
                            {
                                ...w,
                                width: Math.min(Math.max(600, state.orgX + (posX - state.posX)), window.innerWidth - w.left),
                                height: Math.min(Math.max(400, state.orgY + (posY - state.posY)), window.innerHeight - w.top)
                            } :
                            w),
                )
            }));
        }
    }

    setTitle(window, title) {
        this.setState(state => ({
            windows: state.windows.map(w =>
                w.index === window.index ?
                    {
                        ...w,
                        title
                    } :
                    w
            )
        }))
    }

    setContent(window, content) {
        this.setState(state => ({
            windows: state.windows.map(w =>
                w.index === window.index ?
                    {
                        ...w,
                        content
                    } :
                    w
            )
        }))
    }

    setPosition(window, top, left) {
        this.setState(state => ({
            windows: state.windows.map(w =>
                w.index === window.index ?
                    {
                        ...w,
                        top, left
                    } :
                    w
            )
        }))
    }

    setSize(window, width, height) {
        this.setState(state => ({
            windows: state.windows.map(w =>
                w.index === window.index ?
                    {
                        ...window,
                        width, height
                    } :
                    w
            )
        }))
    }

    minimize(window) {
        this.setState(state => ({
            windows: state.windows.map(w =>
                w.index === window.index ?
                    {
                        ...w,
                        minimized: true,
                        active: false
                    } :
                    w
            )
        }))
    }

    toggleMaximized(window) {
        this.setState(state =>
        ({
            windows: state.windows.map(w =>
                w.index === window.index ?
                    {
                        ...w,
                        maximized: !w.maximized,
                    } :
                    w
            )
        }), () => this.activate(window));
    }

    activate(window, callback = () => undefined) {
        this.setState(state => ({
            windows: state.windows.map(w => ({
                ...w,
                active: w.index === window.index,
                minimized: w.index !== window.index && w.minimized
            })),
        }), () => callback(window));
    }

    deactivate() {
        this.setState(state => ({
            windows: state.windows.map(w => ({
                ...w,
                active: false
            }))
        }));
    }

    open(window = {}, callback = () => undefined) {

        const newWindow = this.api({
            ...defaults,            
            active: true,
            top: 20 + this.index * 50,
            left: 20 + this.index * 50,
            ...window,
            index: this.index++
        });

        this.setState(state => ({
            windows: [
                ...state.windows.map(w => ({ ...w, active: false })),
                newWindow                
            ],
        }), () => callback(newWindow));
    }

    close(window) {
        this.setState(state => ({
            windows: state.windows.filter(w => w.index !== window.index)
        }));
    }

    render() {
        return (
            <div
                className="fenestra-desktop"
                onMouseMove={event => this.move(event)} onTouchMove={event => this.move(event)}
                onMouseUp={() => this.stopMove()} onTouchEnd={() => this.stopMove()}
            >
                {this.props.icons.map((Icon, key) => <Icon key={key} fenestra={this.api()} />)}
                {this.state.windows.map(fenestra => <Window key={fenestra.index} fenestra={fenestra} />)}
                <Taskbar fenestra={this.api()} menu={this.props.menu} icons={this.props.icons} windows={this.state.windows} />
            </div>
        )
    }

}
export default Desktop;
