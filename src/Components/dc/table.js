import React from "react";
// import * as dcTable from 'dc-tableview'
import * as dc from "dc";
import * as d3 from 'd3'
import { scaleLinear } from "d3";
import { ChartTemplate } from "./chartTemplate";
import './table.css'
import $ from 'jquery';
import Popper from 'popper.js';
// import * as dc_datatables from 'dc.datatables'
// import * as dc_view from 'dc-tableview'


const tablefunc = (divRef, ndx, keys, keys2) => {
    // console.log(dc_view)
    // require("dc-tableview");
    // dc.tableview(divRef, "chartGroupName");
    // console.log(dc_datatables.datatable(divRef))
    var chart1 = dc.dataTable(divRef);
    // var chart1 = dc_datatables.datatable(divRef)

    console.log(keys, "Key1")
    console.log(keys2, "Key1")
    var runDimension = ndx.dimension(function (d) {
        return d[keys];
    });


    chart1
        // .width(550)
        // .height(350)
        .dimension(runDimension)
        .showGroups(true)
        // .size(7)
        // .group(function (d) { return d.type; })
        .columns(keys2)
        // .sortBy(function (d) { return d.type; })
        .order(d3.descending);


    return chart1 //.render()
}

export const TableChart = ({ keys, keys2, title, id, width }) => (
    <ChartTemplate chartFunction={tablefunc} title={title} keys={keys} keys2={keys2} id={id} width={width} />
)