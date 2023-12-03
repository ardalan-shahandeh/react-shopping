import React from "react";
import Layout from "./components/layout/layout";
import Shopping from "./container/Shopping/Shopping";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Shopping></Shopping>
        </Layout>
      </div>
    );
  }
}

export default App;
