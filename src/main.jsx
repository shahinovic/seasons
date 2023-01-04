import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // to update state object we called setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err })
    );
  }

  renderContent() {
    const st = this.state;
    let res;
    if (st.errorMessage && !st.lat) {
      res = <div>{`Error: ${st.errorMessage}`}</div>;
    } else if (!st.errorMessage && st.lat) {
      res = <SeasonDisplay lat={st.lat} />;
    } else {
      res = <Spinner message="Please accept location request" />;
    }
    return <React.StrictMode>{res}</React.StrictMode>;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
