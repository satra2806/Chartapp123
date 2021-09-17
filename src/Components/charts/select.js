// import '/bootstrap-select/dist/js/bootstrap-select.min.js';
// import '/bootstrap-select/dist/css/bootstrap-select.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import * as d3 from 'd3'
import * as crossfilter from "crossfilter2/crossfilter";
import * as dc from 'dc'


// import { ChartTemplate } from "./chartTemplate";

// import 'b
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
;


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Select = (data) => {
    // console.log(data)
    React.useEffect(() => {
        var select1 = dc.selectMenu('#select1')
        var data1 = data.data;
        var key = data1.key1;
        // var key1 = data1.key2;
        // var data2 = data.data.data

        var ndx = crossfilter(data1.data),
            letterDimension = ndx.dimension(function (d) {
                console.log(d[key])
                return d[key];
            })
        // colorDimension = ndx.dimension(function(d) { return d.color; }),
        // stateDimension = ndx.dimension(function(d) { return d.state; }),
        // letterDimension2 = ndx.dimension(function(d) { return d.letter; });

        select1
            .dimension(letterDimension)
            .group(letterDimension.group())
            .multiple(true)
            .controlsUseVisibility(true)
            .title(kv => kv.key);
        // select1.on('postRender', function () {
        //     $('#select1 .dc-select-menu').selectpicker({
        //         style: 'btn-info',
        //         size: 10

        //     });
        // })
        //     .on('postRedraw', function () {
        //         $('#select1 .dc-select-menu').selectpicker('refresh')
        //     });

        select1.render();


        // $(document).ready(function () {
        //     $('#select1 .dc-select-menu').selectpicker({
        //         style: 'btn-info',
        //         size: 10
        //     });

        // })
        // dc.renderAll();


    }, [])
    return (<div id="select1" >
    </div>);
}