import React, { useEffect, useState } from 'react';
import AnyChart from 'anychart-react'

const Grafica = () => {

    const [data, setData] = useState([1, 2, 3, 4]);

    const complexSettings = {
        width: 700,
        height: 500,
        type: 'pie',
        data: data,
        title: 'Resumen',
        yAxis: [1, {
            orientation: 'center',
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

    const obtenerData = async () => {
        const urlApi = '';
        const response = await fetch(urlApi);
        if (response.status === 200) {
            const body = await response.json();
            setData(body);
        }
    }

    useEffect(() => {
        obtenerData();
    }, [])


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
