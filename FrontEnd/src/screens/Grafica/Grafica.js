import React from 'react';
import AnyChart from 'anychart-react'

const Grafica = () => {

    const complexSettings = {
        width: 800,
        height: 600,
        type: 'column',
        data: "Nombre1,50\nNombre2,30\nNombre3,66\nNombre4,80",
        title: 'Resumen',
        yAxis: [1, {
            orientation: 'right',
            enabled: true,
            labels: {
                format: '{%Value}{decimalPoint:\\,}',
                fontColor: 'blue'
            }
        }],
        legend: {
            background: 'lightgreen 0.4',
            padding: 0
        },
        lineMarker: {
            value: 4.5
        }
    };


    return (
        <div className="container" >
            <h1 className="text-center" >Grafica</h1>
            <AnyChart
                {...complexSettings}
            />
        </div>
    )
}

export default Grafica;
