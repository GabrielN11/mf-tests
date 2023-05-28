import React from "react";
import ReactDOM from "react-dom";
import Page from 'root/Page'


const App = () => (
  <Page title='Sobre o Projeto'>
    <section>
      <h2>Sobre</h2>
      <hr/>
      <p>Testando Microfrontend com Module Federation, cada página é um projeto diferente, incluindo o menu xD</p>
    </section>
  </Page>
);
ReactDOM.render(<App />, document.getElementById("app"));

export default App