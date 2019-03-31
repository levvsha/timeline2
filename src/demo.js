import * as d3 from 'd3';
import chronology from './config';

const margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};
const width = 3400 - margin.left - margin.right;
const height = 900 - margin.top - margin.bottom;

const levels = {
  outpetriii: 20,
  outnickolayii: 80,
  out: 50,
  throne: 100,
  first: 115,
  second: 130,
  third: 145,
  fourth: 160,
};

const x = d3.scaleLinear()
  .range([0, width])
  .domain([1672, 1918]);


export default function draw(data) {
  const getLinesCoords = (config) => {
    const results = config.levels.reduce((accum, item) => {
      let leftCorrector = 0;
      let rightCorrector = 0;

      if (item.radiusLeft) {
        leftCorrector = x.invert(item.radiusLeft) - x.invert(0)
      }

      if (item.radiusRight) {
        rightCorrector = x.invert(item.radiusRight) - x.invert(0)
      }

      let coords = null;
console.log('item.doNotRenderHorizontal ==>', item.doNotRenderHorizontal)
      if (!item.doNotRenderHorizontal) {
        coords = [
          {
            x: item.points[0] + leftCorrector,
            y: levels[item.level],
            key: config.key,
            color: config.color
          },
          {
            x: item.points[1] - rightCorrector,
            y: levels[item.level],
            key: config.key,
            color: config.color
          }
        ];
      }

      accum.push(coords);
      return accum;
    }, []);

    return results.filter(item => item);
  };

  const getConnectorCoords = (config) => {
    const results = config.levels.reduce((accum, item, index, list) => {
      let coords = [];
      const prevItem = list[index - 1];

      if (prevItem) {
        let leftCorrector = 0;
        let rightCorrector = 0;

        if (item.radiusLeft) {
          leftCorrector = x.invert(item.radiusLeft) - x.invert(0)
        }

        if (prevItem.radiusRight) {
          rightCorrector = x.invert(prevItem.radiusRight) - x.invert(0)
        }

        coords = coords.concat([
          {
            x: item.points[0] - rightCorrector,
            y: levels[prevItem.level],
            key: config.key,
            color: config.color
          },
          {
            x: item.points[0],
            y: levels[prevItem.level],
            key: config.key,
            color: config.color
          },
          {
            x: item.points[0],
            y: levels[item.level],
            key: config.key,
            color: config.color
          },
          {
            x: item.points[0] + leftCorrector,
            y: levels[item.level],
            key: config.key,
            color: config.color
          }
        ])
      }

      accum.push(coords);
      return accum;
    }, []);

    return results.filter(item => item.length);
  };

  const points = chronology.map(tsar => getLinesCoords(tsar));
  const connectors = chronology.map(tsar => getConnectorCoords(tsar));

  const line = d3.line()
    .x(function (d) {
      return x(d.x);
    })
    .y(function (d) {
      return d.y;
    });

  var connectorsLine = d3.line()
    .curve(d3.curveBundle.beta(1))
    .x(function (d) {
      return x(d.x);
    })
    .y(function (d) {
      return d.y;
    });

  const svg = d3.select(".root")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  const connectorsRoot = svg.append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const linesRoot = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const connectorsNode = connectorsRoot
    .selectAll('g')
    .data(connectors)
    .enter()
    .append("g");

  const linesNode = linesRoot
    .selectAll('g')
    .data(points)
    .enter()
    .append("g");

  connectorsNode
    .selectAll('path')
    .data(a => a)
    .enter()
    .append("path")
    .attr("d", data => connectorsLine(data))
    .attr('stroke', d => d[0].color)
    .attr("stroke-linecap", "round");

  linesNode
    .selectAll('path')
    .data(a => a)
    .enter()
    .append("path")
    .attr("d", data => line(data))
    .attr('stroke',d => d[0].color)
    .attr("stroke-linecap", "round");


}
