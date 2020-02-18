import React, { Component } from 'react';
import HomeItem from './components/HomeItem';
import HomeDetails from './components/HomeDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homesList: [],
      showComponent: false,
      selectedHouseData: null,
    };
    this.toggleHouseDetailComponent = this.toggleHouseDetailComponent.bind(this);
  }

  componentDidMount() {
    fetch('https://dev1-sample.azurewebsites.net/properties.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ homesList: data });
      })
      .catch(console.log);
  }

  toggleHouseDetailComponent(data) {
    console.log('data:', data);
    this.setState((oldState) => ({ showComponent: !oldState.showComponent }));
    this.setState((oldState) => ({ selectedHouseData: data }));
  }

  render() {
    // const homesList = this.state.homesList;
    const { homesList, showComponent, selectedHouseData } = this.state;
    let homeItems;
    if (homesList.properties) {
      homeItems = homesList.properties.map((item) => <HomeItem key={item.id} props={item} showComponent={showComponent} toggleHouseDetailComponent={this.toggleHouseDetailComponent} />);
    }

    return (
      <div className="App">
        <div className="container mx-auto p-8 bg-white">
          {!showComponent && (
          <div className="flex flex-row flex-wrap -mx-2">
            {homeItems}
          </div>
          )}
          {showComponent && (
            <HomeDetails toggleHouseDetailComponent={this.toggleHouseDetailComponent} selectedHouseData={selectedHouseData} props={homesList} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
