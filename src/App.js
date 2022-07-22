import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    numero: 0
  };

  store = {
    deposit: 10
  };

  addNumber = () => {
    if (this.state.numero < this.store.deposit) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  removeNumber = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <>
        <div className="card">
          <h1>Carrinho</h1>
          <p>Itens: {this.state.numero}</p>
          <div className="btnCard">
            <button onClick={this.addNumber}>Adicionar</button>
            <button onClick={this.removeNumber}>Remover</button>
          </div>
        </div>
      </>
    );
  }
}
