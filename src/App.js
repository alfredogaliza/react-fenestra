import { faClock, faCogs, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Desktop from "./fenestra/Desktop";

class App extends Component {
  render() {
    return <Desktop
    icons={[
      ({fenestra}) => <Button onClick={() => fenestra.open({title: "Nova Janela", top: 20, left: 100})}>Nova Janela</Button>,
      ({fenestra}) => <Button onClick={() => fenestra.open({title: "Nova Janela", content: ({fenestra}) => <iframe width={"100%"} height={"100%"} src="https://bombeiros.pa.gov.br" frameBorder={0}/>})}>Browser</Button>
    ]}
    menu={fenestra => [
      { title: <><FontAwesomeIcon icon={faHome}/> Página Inicial</> },
      { title: <><FontAwesomeIcon icon={faCogs}/> Administração</>,
        submenu: [
          { title: <div role="button" onClick={() => fenestra.open({title: 'Usuários'})}>
            <FontAwesomeIcon icon={faUsers}/> Usuários
            </div> },
          { title: <><FontAwesomeIcon icon={faClock}/> Acesso</> }
        ]
      },
    ]}
    />;
  }
}
export default App;
