import * as d3 from 'd3';
import chronology, { xScale, parseTime } from './config';

const line = d3.line()
  .x(function (d) {
    return d.x;
  })
  .y(function (d) {
    return d.y;
  });

const connectorsLine = d3.line()
  .curve(d3.curveBundle.beta(1))
  .x(function (d) {
    return d.x;
  })
  .y(function (d) {
    return d.y;
  });

export const levels = {
  outpetriii: 15,
  outnickolayii: 168,
  out: 108,
  throne: 205,
  first: 222,
  second: 239,
  third: 256,
  fourth: 273,
};

const getLinesCoords = (chronology) => {
  const results = chronology.levels.reduce((accum, item) => {
    let leftCorrector = 0;
    let rightCorrector = 0;

    if (item.radiusLeft) {
      leftCorrector = item.radiusLeft;
    }

    if (item.radiusRight) {
      rightCorrector = item.radiusRight;
    }

    let coords = null;

    if (!item.doNotRenderHorizontal) {
      coords = [
        {
          x: xScale(parseTime(item.points[0])) + leftCorrector,
          y: levels[item.level],
          key: chronology.key,
          color: chronology.color
        },
        {
          x: xScale(parseTime(item.points[1])) - rightCorrector,
          y: levels[item.level],
          key: chronology.key,
          color: chronology.color
        }
      ];
    }

    accum.push(coords);
    return accum;
  }, []);

  return results.filter(item => item);
};

const getConnectorCoords = (chronology) => {
  const results = chronology.levels.reduce((accum, item, index, list) => {
    let coords = [];
    const prevItem = list[index - 1];

    if (prevItem) {
      let leftCorrector = 0;
      let rightCorrector = 0;

      if (item.radiusLeft) {
        leftCorrector = item.radiusLeft;
      }

      if (prevItem.radiusRight) {
        rightCorrector = prevItem.radiusRight;
      }

      coords = coords.concat([
        {
          x: xScale(parseTime(item.points[0])) - rightCorrector,
          y: levels[prevItem.level],
          key: chronology.key,
          color: chronology.color,
          isBorn: item.isBorn
        },
        {
          x: xScale(parseTime(item.points[0])),
          y: levels[prevItem.level],
          key: chronology.key,
          color: chronology.color
        },
        {
          x: xScale(parseTime(item.points[0])),
          y: levels[item.level],
          key: chronology.key,
          color: chronology.color
        },
        {
          x: xScale(parseTime(item.points[0])) + leftCorrector,
          y: levels[item.level],
          key: chronology.key,
          color: chronology.color
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

export default function drawLines(selection, props) {
  const hiddenLinesRoot = selection
    .append('g');

  const connectorsRoot = selection
    .append('g');

  const linesRoot = selection
    .append('g');

  const linesNodes = linesRoot
    .selectAll('g')
    .data(points)
    .enter()
    .append('g');

  const hiddenLinesNodes = hiddenLinesRoot
    .selectAll('g')
    .data(points)
    .enter()
    .append('g');

  const connectorsNodes = connectorsRoot
    .selectAll('g')
    .data(connectors)
    .enter()
    .append('g');

  const toggleLine = (selection) => {
    selection
      .on('mouseenter', (hoveredItem) => {
        linesNodes
          .filter(item => item[0][0].key === hoveredItem[0].key)
          .classed('hovered-group', true);

        connectorsNodes
          .filter(item => item[0][0].key === hoveredItem[0].key)
          .classed('hovered-group', true);
      })
      .on('mouseout', (hoveredItem) => {
        linesNodes
          .filter(item => item[0][0].key === hoveredItem[0].key)
          .classed('hovered-group', false);

        connectorsNodes
          .filter(item => item[0][0].key === hoveredItem[0].key)
          .classed('hovered-group', false);
      });
  };

  connectorsNodes
    .selectAll('path')
    .data(item => item)
    .enter()
    .append('path')
    .attr('d', data => connectorsLine(data))
    .attr('stroke', item => item[0].color)
    .classed('is-born', item => item[0].isBorn)
    .call(toggleLine);

  hiddenLinesNodes
    .selectAll('path')
    .data(item => item)
    .enter()
    .append('path')
    .attr('class', 'hidden-lines')
    .attr('d', data => line(data))
    .call(toggleLine);

  linesNodes
    .selectAll('path')
    .data(item => item)
    .enter()
    .append('path')
    .attr('d', data => line(data))
    .attr('stroke', item => item[0].color)
    .call(toggleLine);

}