/**
 * @author Uvindu Sanjana
 */

import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: '2013', Revenue: 4000, Expenditure: 2400, Profit: 2400, Loss: 2100,
    },
    {
        name: '2014', Revenue: 3000, Expenditure: 1398, Profit: 2210, Loss: 3120,
    },
    {
        name: '2015', Revenue: 2000, Expenditure: 9800, Profit: 2290, Loss: 2750,
    },
    {
        name: '2016', Revenue: 2780, Expenditure: 3908, Profit: 2000, Loss: 2250,
    },
    {
        name: '2017', Revenue: 1890, Expenditure: 4800, Profit: 2181, Loss: 3200,
    },
    {
        name: '2018', Revenue: 2390, Expenditure: 3800, Profit: 2500, Loss: 1200,
    },
];

export default class Example extends PureComponent {

    render() {
        return (
            <BarChart
                width={450}
                height={200}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke={this.props.axis}/>
                <YAxis stroke={this.props.axis}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Revenue" stackId="a" fill="#8884d8" />
                <Bar dataKey="Expenditure" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Profit" fill="#ffc658" />
                <Bar dataKey="Loss" stackId="a" fill="#82ca9d" />
            </BarChart>
        );
    }
}
