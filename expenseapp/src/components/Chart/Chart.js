import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart=props =>{
    //receiving expense on each month as object dataPoint and copying values to an array
    const dataPointValues=props.dataPoints.map(datapoint=>datapoint.value );
    const totalMax=Math.max(...dataPointValues);
    return <div className="chart">
        {
            props.dataPoints.map(datapoint=>
                <ChartBar key={datapoint.label}
                          value={datapoint.value}
                          maxValue={totalMax} 
                          label={datapoint.label}   >

                </ChartBar>)
        }

    </div>
}
export default Chart;