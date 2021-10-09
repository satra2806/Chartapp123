import React from "react";
import * as d3 from 'd3'
import c3 from "c3";

export const LineChart = ({ data, charInfo }) => {
    console.log((charInfo[0].XValue))

    React.useEffect(() => {

        var New = c3.generate({
            bindto: '#chart1',
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

    return <div id="chart1" />;
};