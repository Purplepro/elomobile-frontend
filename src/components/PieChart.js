import React from 'react'
import {Pie} from 'react-chartjs-2';






const PieChart = () => {
    const state = {
        labels: ['United States', 'China', 'Japan', 'Germany', 'France', 'Norway', 'Netherlands', 'Other'],
    
    
        datasets: [
            {
                    label: "Fast Chargers",
                    backgroundColor:  [
                        '#ea698b',
                        '#973aa8',
                        '#faae7b',
                        '#1e96fc',
                        '#ffd100',
                        '#ff6b35',
                        '#29bf12',
                        '#be95c4',
                    ],
                    borderWidth: 2,
                    data: [5, 82, 3, 1, 1, 2, 0, 5]
            }
    ]
}

    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                text: "264 thousand accessible fast chargers",
                display: true,
                fontSize: 20
            }
        }
    }

return (
<div className="Asection-2">

    <div className="pie-chart">
    <Pie
        data={state}
        options={options}
        />
    <p style={{textAlign: 'center'}}>Data</p>
    </div>

</div>






    );
}



export default PieChart;