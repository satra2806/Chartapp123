import React from "react";
import * as d3 from 'd3'
import c3 from "c3";

export const Chart = ({ data }) => {
  console.log((data.data))

  React.useEffect(() => {

    var chart = c3.generate({
      size: {
        width: 840
      },
      data: {
        json: data.data,
        order: 'desc',
        keys: {
          x: 'states', // it's possible to specify 'x' when category axis
          value: ['townGotElectric'],

        },
        type: 'bar'

      },
      axis: {
        x: {
          x: ['states'],
          type: "category",
          tick: {
            rotate: 75,
            multiline: false
          }
        }
      }
    });

  }, []);

  return <div id="chart" />;
};