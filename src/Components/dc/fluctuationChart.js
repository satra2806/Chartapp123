import React from "react";
import * as dc from "dc";
import * as d3 from 'd3'
import { scaleLinear } from "d3";
import { ChartTemplate } from "./chartTemplate";
import { numberFormat } from "./cxContext";

const fluctuationChartFunc = (divRef, ndx, keys, keys2) => {
    const fluctuationChart = dc.barChart(divRef)
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


    fluctuationChart
        .dimension(runDimension)
        .group(speedSumGroup)
        // .width(600)
        .height(300)
        .colors(["#20B2AA"])
        // .x(d3.scaleOrdinal().domain(domain))
        .x(d3.scaleBand())
        // .xAxis().tickValues(ticks)
        .yAxisPadding("10%")
        .brushOn(true)
        .elasticY(true)
        .elasticX(true)
        .xUnits(dc.units.ordinal)
        .brushOn(false)
        .yAxisLabel("Town Powered")
        .xAxisLabel("States")
        .renderLabel(true)
        .margins({ top: 50, left: 70, right: 0, bottom: 90 })
        .controlsUseVisibility(true)
        .addFilterHandler(function (filters, filter) { return [filter]; })
        .on('renderlet', function (chart) {
            // fluctuationChart.selectAll('rect').on("click", function (d) {
            //     console.log("click!", d);
            // });
            fluctuationChart.selectAll('g.x text')
                .attr('transform', 'translate(-30,25) rotate(315)');
        })
        .on('pretransition', function (chart) {
            var chart_width = chart.width();
            chart.selectAll("text.barLabel").attr('font-size', function (data) {
                let total_bars = chart.group().all().length;
                let sing_bar_width = Math.floor(chart_width / total_bars);
                return (sing_bar_width * .3) + "px";
            });
        });




    fluctuationChart.xAxis().tickFormat(
        function (v) { return v; });
    fluctuationChart.yAxis().ticks(5);


    return fluctuationChart //.render()
}

export const FluctuationChart = ({ keys, keys2, title, width }) => (
    <ChartTemplate chartFunction={fluctuationChartFunc} title={title} keys={keys} keys2={keys2} width={width} />
)

