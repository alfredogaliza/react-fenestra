import { faArrowRight, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

class Browser extends Component {
    state = {
        url: 'http://globo.com',
        val: 'http://globo.com'
    }

    render() {
        return <div class="d-flex flex-column" style={{ width: "100%", height: "100%" }}>
            <div className="mb-3">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faGlobe} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={this.state.val} onChange={({ target }) => this.setState(() => ({ val: target.value }))} />
                    <InputGroup.Append>
                        <Button
                            variant="outline-secondary"
                            onClick={() => this.setState(state => ({ url: state.val }))}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <div class="flex-grow-1">
                <iframe title={this.props.fenestra.title} style={{ border: 0, width: "100%", height: "100%" }} src={this.state.url} onLoad={event => console.log(event.target.contentWindow.location.href.toString())} />
            </div>

        </div>
    }
}
export default Browser;