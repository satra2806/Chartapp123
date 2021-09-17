import React from "react";
import * as d3 from 'd3'
import * as crossfilter from "crossfilter2/crossfilter";
import * as dc from 'dc'
// import c3 from "c3";
// import "dc/dc.css";

export const BarChart = (data) => {
    // console.log((divd))

    React.useEffect(() => {

        var chart = new dc.BarChart("#chart");
        var data1 = data.data;
        var key = data1.key1;
        var key1 = data1.key2;
        var data2 = data.data.data

        // console.log(data1.data);
        // console.log(key);
        // console.log(key1);

        // var data = [
        //     { 'Expt': 1, 'Run': 1, 'Speed': 850, 'title': 'Title1' },
        //     { 'Expt': 1, 'Run': 2, 'Speed': 740, 'title': 'Title2' },
        //     { 'Expt': 1, 'Run': 3, 'Speed': 900, 'title': 'Title3' },
        //     { 'Expt': 1, 'Run': 4, 'Speed': 1070, 'title': 'Title4' }
        // ];
        // console.log(data.key1)
        var ndx = crossfilter(data1.data),
            runDimension = ndx.dimension(function (d) {
                // console.log(d[key])
                return d[key];
            });
        var speedSumGroup = runDimension.group().reduceSum(function (d) {
            // console.log(d[key1]);
            return d[key1];
        });

        var domain = data2.map(function (d) { return d[key]; });

        var ticks = domain.filter(function (v, i) { return i % 4 === 0; });
        // requestDateBarChart.xAxis().tickValues(ticks);


        chart
            .width(1000)
            .height(480)
            .colors(["#20B2AA"])
            // .x(d3.scaleOrdinal().domain(domain))
            .x(d3.scaleBand())
            // .xAxis().tickValues(ticks)
            .yAxisPadding("5%")
            .brushOn(true)
            .elasticY(true)
            .elasticX(true)
            .xUnits(dc.units.ordinal)
            .brushOn(false)
            .yAxisLabel("Town Powered")
            .xAxisLabel("States")
            .dimension(runDimension)
            .group(speedSumGroup)
            .margins({ top: 20, left: 70, right: 0, bottom: 90 })
            .on('renderlet', function (chart) {
                chart.selectAll('rect').on("click", function (d) {
                    console.log("click!", d);
                });
                chart.selectAll('g.x text')
                    .attr('transform', 'translate(-30,25) rotate(315)');
            });


        dc.renderAll()

    }, []);

    return <div id="chart" />;
};