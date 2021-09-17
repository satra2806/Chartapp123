// import React from "react";
import * as dc from "dc";
import * as d3 from 'd3'
import { scaleLinear } from "d3";
import { ChartTemplate } from "./chartTemplate";
import { numberFormat } from "./cxContext";
import $ from 'jquery';
import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import React, { Component } from 'react'
import Select from 'react-select'
// import Popper from "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/esm/popper.js"
import { BsMultiSelect } from '@dashboardcode/bsmultiselect';
// import { BsMultiSelect } from "@dashboardcode/bsmultiselect/dist/js/"

// import VirtualSelect from 'virtual-select-plugin'

const selectfunc = (divRef, ndx, keys, keys2, id) => {
    var select1 = dc.selectMenu(divRef)
    console.log(keys, "Key1")
    console.log(keys2, "Key1")
    var runDimension = ndx.dimension(function (d) {
        return d[keys];
    });
    console.log(id, "satra")


    select1
        .dimension(runDimension)
        .group(runDimension.group())
        // .multiple(true)
        .controlsUseVisibility(true)
        .title(kv => kv.key);
    select1.render()

    // $(document).ready(function () {
    // select1.on('postRender', function () {
    //     console.log("working")

    // })
    //     .on('postRedraw', function () {
    //         $('#' + id + ' .dc-select-menu').selectpicker('refresh')
    //     });

    $(document).ready(function () {

        // $('#' + id + '  .dc-select-menu').selectpicker({
        //     style: 'btn-info',
        //     size: 10
        // });

    })


    return select1 //.render()
}

export const SelectionMenuChart = ({ keys, keys2, title, width, id }) => (
    <ChartTemplate chartFunction={selectfunc} title={title} keys={keys} keys2={keys2} width={width} id={id} />
)

