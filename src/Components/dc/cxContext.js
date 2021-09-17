import React from "react";
import * as crossfilter from "crossfilter2/crossfilter";
// import { csv, timeFormat, timeParse, timeMonth, format } from 'd3'
import * as d3 from 'd3';

// import "dc/dc.css";

export const CXContext = React.createContext("CXContext");
export const dateFormatSpecifier = '%m/%d/%Y';
export const dateFormat = d3.timeFormat(dateFormatSpecifier);
export const dateFormatParser = d3.timeParse(dateFormatSpecifier);
export const numberFormat = d3.format('.2f');

export class DataContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, hasNDX: false };
    console.log(props);
  }


  componentDidMount() {
    if (this.state.hasNDX) {
      return
    }
    if (this.state.loading) {
      return
    }
    this.setState({ loading: true })
    d3.json('https://api.data.gov.in/resource/52509217-a220-4f78-981b-59c5c307a196?api-key=579b464db66ec23bdd0000017ae4b033b80c41827525aa8cb93f4903&format=json&offset=0&limit=10000')
      .then((data) => {
        const data1 = data.records
        console.log(data.records, "Satra")
        data1.forEach(function (d) {
          d.States = (d.state_union_territory);
          d.townElectricData = (d.towns_electrified_1_); // pre-calculate month for better performance
          // d.close = +d.close; // coerce to number
          // d.open = +d.open;
        });
        console.log(data1);
        this.ndx = crossfilter(data1); //TODO possibly need to update this
        this.setState({ loading: false, hasNDX: true })



      })


  }

  render() {
    if (!this.state.hasNDX) {
      return null;
    }
    return (
      <CXContext.Provider value={{ ndx: this.ndx }}>
        <div ref={this.parent}>
          {this.props.children}
        </div>
      </CXContext.Provider>
    );
  }
}
