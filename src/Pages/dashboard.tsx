// import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { BubbleChart } from "../Components/dc/bubbleChart";
import { GainOrLossChart } from "../Components/dc/gainOrLessChart";
import { QuarterChart } from "../Components/dc/quarterChart";
import { DayOfWeekChart } from "../Components/dc/dayOfWeekChart";
import { FluctuationChart } from "../Components/dc/fluctuationChart";
import { SelectionMenuChart } from "../Components/dc/select";
import { TableChart } from "../Components/dc/table";
import { MoveChart } from "../Components/dc/moveChart";
import { DataTable } from "../Components/dc/nasdaqTable";
import { DataContext } from "../Components/dc/cxContext";
import { css } from 'glamor';
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { history } from '../helpers/history'
import { useLocation, useParams } from 'react-router-dom'
import { dispatch, store } from '../rematch/store';
import { Dispatch } from 'redux';
// import { useLocation, useParams } from 'react-router-dom';
import { Chart } from '../Components/charts/Chart';
import 'c3/c3.css';
import { BarChart } from '../Components/charts/barchart';
// import { Select } from '../Components/charts/select';
import * as dc from 'dc'
import * as d3 from 'd3'
import dashboard from './dashboard';
// dc.renderAll()

const handledata = (input, setBarChartData) => {

  if (input && input.details && input.details.total > 1) {
    console.log(input)

    const data = input.details.records;
    var bardata = {
      'Electric': {
        data: [],
        key1: "states",
        key2: "townGotElectric"
      }
    };

    data.forEach(x => {
      bardata['Electric'].data.push({
        'states': x.state_union_territory,
        'townGotElectric': x.towns_electrified_1_
      })
      // bardata['Electric'].keys.push(x.state_union_territory)
    });

    console.log(bardata['Electric'].key1)
    setBarChartData(bardata);
    // d3.json('https://api.data.gov.in/resource/5fdb35d1-221b-4705-9f5d-07e48362428b?api-key=579b464db66ec23bdd0000017ae4b033b80c41827525aa8cb93f4903&format=json&offset=0&limit=1000')
    //     .then((data) => {
    //         const data1 = data.records
    //         console.log(data.records)
    //         data1.forEach(function (d) {
    //             // d.States = (d.state_union_territory);
    //             // d.townElectricData = (d.towns_electrified_1_); // pre-calculate month for better performance
    //             // d.close = +d.close; // coerce to number
    //             // d.open = +d.open;
    //         });
    //     })
  }

}




const Dashboard = (props) => {

  const { dispatch, electricDispatch, fuelpricesDispatch } = props;

  const [barChartData, setBarChartData] = useState([]);
  useEffect(() => {
    console.log(fuelpricesDispatch);
    dispatch.fuelprices.loadfuel()
  }, [])

  useEffect(() => {

    handledata(electricDispatch, setBarChartData)

  }, [electricDispatch])


  const style = css({
    padding: '1rem',
    // marginTop: '2rem'
  })


  return (
    <div {...style}>

    </div>
  )
}


const mapStateToProps = (dispatch => ({
  electricDispatch: dispatch.electric,
  fuelpricesDispatch: dispatch.fuelprices,
})
);

export default connect(mapStateToProps)(Dashboard);