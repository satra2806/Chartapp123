import React from "react";
import * as dc from "dc";
import * as d3 from 'd3'
import { scaleLinear } from "d3";
import { ChartTemplate } from "./chartTemplate";
import { numberFormat } from "./cxContext";

const rowChartFunc = (divRef, ndx, keys, keys2) => {
    const rowChart = new dc.RowChart(divRef)
    // const dimension = ndx.dimension(d => Math.round((d.close - d.open) / d.open * 100));
    // const group = dimension.group()
    console.log(keys, "Key1")
    console.log(keys2, "Key1")

    //     var ndx = crossfilter(data1.data),
    var runDimension = ndx.dimension(function (d) {
        // console.log(d[key])
        return d[keys];
    });
    var speedSumGroup = runDimension.group().reduceSum(function (d) {
        // console.log(d.townElectricData);
        return d[keys2];
    });


    rowChart
        .dimension(runDimension)
        .group(speedSumGroup)
        .height(700)
        .elasticX(true)


    return rowChart //.render()
}

export const RowChartHelper = ({ keys, keys2, title, width }) => (
    <ChartTemplate chartFunction={rowChartFunc} title={title} keys={keys} keys2={keys2} width={width} />
)

