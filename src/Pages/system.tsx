//@ts-ignore
import React, { useState, useEffect } from "react";
import { css } from 'glamor';
import HorizontalFlow from "../flows/purchaseDataFlow";

const System = (props) => {

    const style = css({
        padding: '1rem',
        // marginTop: '2rem'
    })


    return (
        <div >
            <HorizontalFlow />
        </div>
    )
}


const mapStateToProps = (dispatch => ({
    electricDispatch: dispatch.electric,
    fuelpricesDispatch: dispatch.fuelprices,
})
);

export default System;