import { Component } from "react";
import { Button } from "react-bootstrap";
import Desktop from "./fenestra/Desktop";

class App extends Component {
  render() {
    return <Desktop 
    icons={[
      ({fenestra}) => <Button onClick={() => fenestra.open({title: "Nova Janela", top: 20, left: 100}, window => console.log(window))}>Nova Janela</Button>,
      ({fenestra}) => <Button onClick={() => fenestra.open({title: "Nova Janela", content: () => <h1>Hello, World!</h1>}, window => console.log(window))}>Hello, World!</Button>
    ]}
    windows={[

    ]}
    menu={fenestra => [
      {
        title: "Opção 1",
        onClick: () => fenestra.open({}, window => console.log(window))
      },
      {
        title: "Opção 2",
        submenu: [
          {
            title: "Opção 3",
            onClick: () => fenestra.open({}, window => console.log(window))
          },
          {
            title: "Opção 4",
            onClick: () => fenestra.open({}, window => console.log(window))
          },
        ]
      },
    ]}
    onOpened={window => console.log(window)}/>;
  }
}
export default App;
