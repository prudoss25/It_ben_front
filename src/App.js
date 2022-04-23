import React,{ Component } from 'react';
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
       <Layout>
          <Home />
       </Layout>
      </div>
    );
  }
}

export default App;
