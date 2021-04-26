import React, {Component} from 'react' 
import {scaleLinear, scaleSequential, interpolate, max, min} from 'd3v4'
import { Popup } from 'semantic-ui-react'
import "./style.css" 

class ScatterPlot extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: props.data
        };
      }

    onClick(data, e) {
        this.props.onClick(data);
     }

    render() {

        // Get data from props
        const peopleData = this.state.data
        // Define SVG size
        const margin = {top: 50, right: 50, bottom: 50, left: 50},
        width = 600,
        height = 400 

        // Get max & min value of Weight, Height and Age
        const maxAge = max(peopleData.map(d => d.age)), 
        maxWeight = max(peopleData.map(d => d.weight)),
        maxHeight = max(peopleData.map(d => d.height))

        const minAge = min(peopleData.map(d => d.age)), 
        minWeight = min(peopleData.map(d => d.weight)),
        minHeight = min(peopleData.map(d => d.height))

        const [gapX, gapY] = [3, 10]

        // Set X/ Y axis
        let xScale = scaleLinear()
        .domain([ minHeight -gapX, maxHeight +gapX])
        .range([margin.left,  width - margin.right]);

        let yScale = scaleLinear()
        .domain([ minWeight-gapY, maxWeight+gapY])
        .range([ height - margin.top, margin.bottom]);

        const [xStart, xEnd] = xScale.range();
        const [yStart, yEnd] = yScale.range();
        const ticksX = xScale.ticks();
        const ticksY = yScale.ticks();

        // Set circle element radius mapping 
        let radius = scaleLinear()
        .domain([ minAge, maxAge ])
        .range([ 10, 20 ])

        // Set circle element color mapping
        let color = scaleSequential(interpolate("orange", "#e65102"))
        .domain([ minAge, maxAge ]);

        const style = {
            borderRadius: 0,
            opacity: 0.7,
            padding: '2em',
          }

        const circleElements = peopleData?.map((personData, i) => {
            return (
            <Popup
            key = {`popover-${i}`}
            position = 'top left'
            style = {style}
            trigger = {
                <circle
                key = {`boundaryDot-${i}`}
                r = {radius(personData.age)}
                fill = {color(personData.age)}
                cx = {xScale(personData.height)}
                cy = {yScale(personData.weight)}
                data = {personData}
                onClick = {this.onClick.bind(this, personData)}
                />
            }
            >
            <Popup.Header>Name: {personData.name}</Popup.Header>
            <Popup.Content>
                Weight: {personData.weight}, Height: {personData.height}
            </Popup.Content>
            </Popup>

            )
        })

        const tickElementsX = ticksX.map((t, i) => {
            const x = xScale(t);
            return (
              <React.Fragment key={i}>
                <line x1={x} x2={x} y1={height-yEnd} y2={height-yEnd + 5} stroke="#000" />
                <text
                  x={x}
                  y={height-yEnd + 20}
                  fill="#000"
                  textAnchor="middle"
                  fontSize={10}
                >
                  {t}
                </text>
              </React.Fragment>
            );
          })

        const tickElementsY = ticksY.map((t, i) => {
            const y = yScale(t);
            return (
              <React.Fragment key={i}>
                <line x1={xStart} x2={xStart-5} y1={height-y} y2={height-y} stroke="#000" />
                <text
                  x={xStart - 20}
                  y={y}
                  fill="#000"
                  textAnchor="middle"
                  fontSize={10}
                >
                  {t}
                </text>
              </React.Fragment>
            );
          })
        return (

            <div className="ScatterPlotWrapper">
                <svg width={width} height={height}>
                    <text x="20" y="30" font-size="1em">Age by Height and Weight</text>
                    <g className="circles">{circleElements}</g>
                    <g className="axis">
                        <line x1={xStart} x2={xEnd} y1={height-yEnd} y2={height-yEnd} stroke="#000" />
                        <line x1={xStart} x2={xStart} y1={yEnd} y2={yStart} stroke="#000" />
                    </g>
                    <g className="ticks">
                     {tickElementsX}
                     {tickElementsY}
                    </g>
                </svg>
            </div>
        )
    }
}

export default ScatterPlot;