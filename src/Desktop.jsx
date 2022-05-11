import { Component } from "react";
import Taskbar from "./Taskbar";
import Window from "./Window";

const defaults = {
    title: "",
    content: () => null,
    maximized: false,
    minimized: false,
    active: true,
    width: 600,
    height: 400,
    moving: false,
    resizing: false,
    resizeable: true,
    moveable: true
};

class Desktop extends Component {

    static defaultProps = {
        icons: [],
    }

    index = 0;

    state = {
        windows: [],
        isMoving: false,
        isResizing: false,
        posX: 0,
        posY: 0,
        orgX: 0,
        orgY: 0,
        orgT: 0,
        orgL: 0,
        index: 1
    }

    api(window) {
        return {
            ...window,
            windows: this.state.windows,
            open: (w, callback = () => undefined) => this.open(w, callback),
            close: (w = window, callback = () => undefined) => this.close(w, callback),
            minimize: (w = window) => this.minimize(w),
            toggleMaximized: (w = window) => this.toggleMaximized(w),
            activate: (w = window) => this.activate(w),
            setTitle: (title, w = window) => this.setTitle(title, w),
            setContent: (content, w = window) => this.setContent(content, w),
            setPosition: (top, left, w = window) => this.setPosition(top, left, w),
            setSize: (width, height, w = window) => this.setSize(width, height, w),
            startMove: (posX, posY, w = window) => this.startMove(posX, posY, w),
            startResize: (posX, posY, dir = "nwse", w = window) => this.startResize(posX, posY, dir, w),
        }

    }

    startMove(posX, posY, window) {

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

    startResize(posX, posY, dir, window) {

        const orgX = this.state.windows.find(w => w.index === window.index)?.width;
        const orgY = this.state.windows.find(w => w.index === window.index)?.height;
        const orgT = this.state.windows.find(w => w.index === window.index)?.top;
        const orgL = this.state.windows.find(w => w.index === window.index)?.left;

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
            posX, posY, orgX, orgY, dir, orgT, orgL
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
                isResizing: false,
                dir: "none"
            }));
        }

    }

    move(event) {
        if (this.state.isMoving || this.state.isResizing) {

            const posX = event.clientX || event.targetTouches[0]?.pageX;
            const posY = event.clientY || event.targetTouches[0]?.pageY;

            const rect = event.currentTarget.getBoundingClientRect();

            this.setState(state => ({
                windows: state.windows.map(w =>
                    w.moving ?
                        {
                            ...w,
                            top: Math.min(Math.max(0, state.orgY + (posY - state.posY)), rect.height - w.height),
                            left: Math.min(Math.max(0, state.orgX + (posX - state.posX)), rect.width - w.width)
                        } :
                        (w.resizing ?
                            {
                                ...w,
                                top: state.dir.includes("n")? 
                                    Math.min(Math.max(0, state.orgT + (posY - state.posY)), rect.height - w.height) :
                                    w.top,
                                left: state.dir.includes("w")? 
                                    Math.min(Math.max(0, state.orgL + (posX - state.posX)), rect.width - w.width) :
                                    w.left,
                                width: state.dir.includes("w") ? 
                                    Math.min(Math.max(0, state.orgX - (posX - state.posX)), rect.width - w.left) :
                                    (state.dir.includes("e") ? 
                                        Math.min(Math.max(0, state.orgX + (posX - state.posX)), rect.width - w.left) :
                                        w.width),
                                height: state.dir.includes("n")? 
                                    Math.min(Math.max(0, state.orgY - (posY - state.posY)), rect.height - w.top) : 
                                    (state.dir.includes("s")? 
                                        Math.min(Math.max(0, state.orgY + (posY - state.posY)), rect.height - w.top) :                                     
                                        w.height)
                            } :
                            w),
                )
            }));
        }
    }

    setTitle(title, window) {
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

    setContent(content, window) {
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

    setPosition(top, left, window) {
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

    setSize(width, height, window) {
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

    activate(window) {
        this.setState(state => ({
            windows: state.windows.map(w => ({
                ...w,
                active: w.index === window.index,
                minimized: w.index !== window.index && w.minimized
            })),
        }));
    }

    open(window = {}, callback = () => undefined) {

        const newWindow = this.api({
            ...defaults,
            active: true,
            top: 54 + 54 * (this.index % 6),
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

    close(window, callback = () => undefined) {
        this.setState(state => ({
            windows: state.windows.filter(w => w.index !== window.index)
        }), () => callback(window));
    }

    render() {        
        return (
            <div
                ref = {this.ref}
                className={`d-flex flex-column fenestra-desktop ${this.state.isMoving ? 'fenestra-desktop-moving ' : ''} ${this.state.isResizing ? `fenestra-desktop-resizing-${this.state.dir}` : ''} `}
            >
                <div
                    onMouseMove={event => this.move(event)} onTouchMove={event => this.move(event)}
                    onMouseUp={() => this.stopMove()} onTouchEnd={() => this.stopMove()} onMouseLeave={() => this.stopMove()}
                    className="w-100 flex-grow-1 d-flex flex-column flex-wrap align-content-start bg-light fenestra-desktop-icons">
                    {this.props.icons.map((Icon, key) => <Icon key={key} fenestra={this.api()} />)}
                    {this.state.windows.map(fenestra => <Window key={fenestra.index} fenestra={fenestra} />)}
                </div>
                <Taskbar fenestra={this.api()} windows={this.state.windows} />
            </div>
        )
    }

}
export default Desktop;
