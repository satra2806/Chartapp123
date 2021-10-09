// import React from "react";
import * as dc from "dc";
import * as d3 from 'd3'
import { scaleLinear } from "d3";
import { ChartTemplate } from "./chartTemplate";
import { numberFormat } from "./cxContext";
import { select } from "../../rematch/store";
// import * as  SelectBeauty from '../../utils/selectbeauty'


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

    // console.log(select1, "select")
    // var beauty = new SelectBeauty({
    //     el: '#' + id + ' .dc-select-menu' // required
    // });
    // window.multiSelect.refresh()

    return select1 //.render()
}

export const SelectionMenuChart = ({ keys, keys2, title, width, id }) => (
    <ChartTemplate chartFunction={selectfunc} title={title} keys={keys} keys2={keys2} width={width} id={id} />
)

