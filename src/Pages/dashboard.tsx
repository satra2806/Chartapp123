import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { history } from '../helpers/history'
import { useLocation, useParams } from 'react-router-dom'
import { dispatch, store } from '../rematch/store';
import { Dispatch } from 'redux';
// import { useLocation, useParams } from 'react-router-dom';
import { Chart } from '../Components/Chart';
import 'c3/c3.css';


const handledata = (input, setBarChartData) => {

  if (input && input.details && input.details.total > 1) {
    // console.log(input.details.records)

    const data = input.details.records;
    var bardata = {
      'Electric': {
        data: []
      }
    };

    data.forEach(x => {
      bardata['Electric'].data.push({
        'states': x.state_union_territory,
        'townGotPower': x.towns_electrified_1_
      })
    });

    setBarChartData(bardata);

  }

}


const DS = (props) => {
  const { dispatch, electricDispatch } = props;

  const [barChartData, setBarChartData] = useState([]);
  useEffect(() => {
    // console.log(electricDispatch);
    dispatch.electric.loadElectric()
  }, [])

  useEffect(() => {

    handledata(electricDispatch, setBarChartData)

  }, [electricDispatch])

  return (

    barChartData && barChartData['Electric'] && barChartData['Electric'].data.length > 0 ? <Chart /> : <h1> No Data</h1>

  );
}

const mapStateToProps = (dispatch => ({
  electricDispatch: dispatch.electric,
})
);

export default connect(mapStateToProps)(DS);
// export default (App);

