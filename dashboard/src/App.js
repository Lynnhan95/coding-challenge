import React, {Component} from 'react' 
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer'
import ScatterPlot from './components/ScatterPlot'
import InfoTable from './components/InfoTable'
import { Grid } from "@material-ui/core";
import { peopleData } from './data/peopleData'

class App extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
    this.state = {selected: {}}
  }

  onClick(data) {
    this.setState({
      selected: data
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Grid container className="visualizationWrapper">
        <Grid item xs={6}>
          <ScatterPlot data={ peopleData } onClick={this.onClick.bind(this)}/>
        </Grid>
        <Grid item xs={6}>
          <InfoTable data={ this.state.selected } />
        </Grid>
        </Grid>
        <Footer/>
      </div>
    );
  }

}

export default App;
