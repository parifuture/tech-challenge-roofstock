import React, { Component } from 'react';
import HomeItem from './components/HomeItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homesList: [],
    };
  }

  componentDidMount() {
    fetch('https://dev1-sample.azurewebsites.net/properties.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ homesList: data });
      })
      .catch(console.log);
  }

  render() {
    // const homesList = this.state.homesList;
    const { homesList } = this.state;
    let homeItems;
    if (homesList.properties) {
      homeItems = homesList.properties.map((item) => <HomeItem key={item.id} props={item} />);
    }

    return (
      <div className="App">
        <div className="container mx-auto p-8 bg-white">
          <div className="flex flex-row flex-wrap -mx-2">
            {homeItems}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
