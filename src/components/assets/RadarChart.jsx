/**
 * @author Uvindu Sanjana
 */

import React, { PureComponent } from 'react';
import {
    Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
    {
        subject: 'Jan', A: 120, B: 110, C: 80, fullMark: 150,
    },
    {
        subject: 'Feb', A: 98, B: 130, C: 60, fullMark: 150,
    },
    {
        subject: 'Mar', A: 86, B: 130, C: 96, fullMark: 150,
    },
    {
        subject: 'Apr', A: 99, B: 100, C: 110, fullMark: 150,
    },
    {
        subject: 'May', A: 85, B: 90, C: 90, fullMark: 150,
    },
    {
        subject: 'Jun', A: 65, B: 85, C: 100, fullMark: 150,
    },
];

export default class Chart extends PureComponent {

    render() {
        return (
            <RadarChart cx={120} cy={90} outerRadius={50} width={250} height={200} data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="red" stopOpacity={1}/>
                        <stop offset="95%" stopColor="red" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="green" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="colorCv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="blue" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="blue" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" stroke={this.props.axis}/>
                <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                <Radar name="Page Views" dataKey="A" fill="url(#colorUv)" fillOpacity={0.6} />
                <Radar name="Leads" dataKey="B" fill="url(#colorPv)" fillOpacity={0.6} />
                <Radar name="Clients" dataKey="C" fill="url(#colorCv)" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        );
    }
}