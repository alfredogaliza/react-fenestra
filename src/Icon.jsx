import { Component } from 'react';
import { Button } from 'react-bootstrap';

class Icon extends Component {

    static defaultProps = {
        onClick: () => undefined,
        title: null,
        icon: null,
        variant: 'link'
    }

    render() {
        return <Button
            variant={this.props.variant}
            onClick={() => this.props.onClick()}
            style={{minHeight: "72px", width: "120px"}} 
            className="m-3 p-2 d-flex flex-column align-items-center justify-content-between fenestra-icon" 
        >
            <div>{this.props.icon}</div>
            <div>{this.props.title}</div>
        </Button>
    }
}

export default Icon;