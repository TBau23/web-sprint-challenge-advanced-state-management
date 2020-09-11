import React, { useEffect } from "react";
import "./App.css";

import SmurfList from './SmurfList'

import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/actions/smurfActions'


const App = ({fetchSmurfs, loadingSmurfs}) => {

    useEffect(() => {
      fetchSmurfs();
    },[fetchSmurfs])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        { !loadingSmurfs ? <SmurfList /> : <div> Loading your smurfs ... </div>}
      </div>
    );
  
}

function mapStateToProps(state) {
  return {
    loadingSmurfs: state.loadingSmurfs
  }
}

export default connect(() => {return {}}, {fetchSmurfs})(App);
