import React from "react";
import * as d3 from 'd3'
import c3 from "c3";

export const Chart = ({ data, charInfo }) => {
  console.log((charInfo[0].XValue))

  React.useEffect(() => {


    if (charInfo[0].Ctype === 'pie') {
      var data1 = {};
      var sites = [];
      data.forEach(function (e) {
        sites.push(e[charInfo[0].XValue]);
        data1[e[charInfo[0].XValue]] = e[charInfo[0].Yvalue];
      })
      console.log(data1);
    }

    var chart = c3.generate({
      bindto: '#' + charInfo[0].Id,
      size: {
        width: 840
      },
      data: {
        json: data,
        order: 'desc',
        keys: {
          x: charInfo[0].XValue, // it's possible to specify 'x' when category axis
          value: [charInfo[0].Yvalue],

        },
        type: charInfo[0].Ctype

      },
      axis: {
        x: {
          x: [charInfo[0].XValue,],
          type: "category",
          tick: {
            rotate: 75,
            multiline: false
          }
        }
      }
    });

  }, []);

  return <div id={charInfo[0].Id} />;
};