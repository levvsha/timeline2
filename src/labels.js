import { names, xScale, parseTime } from './config';
import { levels as linesLevels } from './lines';

const namesLevels = {
  first: 205,
  second: 110,
  third: 18
};

export default function drawLabels(selection, props) {
  const namesNode = selection
    .selectAll('g')
    .data(names.map(name => ({ ...name, position: xScale(parseTime(name.position)) })))
    .enter()
    .append('g');

  namesNode
    .append('text')
    .attr('class', 'name-label')
    .attr('x', item => item.position + (item.noShift ? -5 : 9))
    .attr('y', item => namesLevels[item.level] - 11)
    .text(item => item.label);

  namesNode
    .filter(name => name.annotationLine)
    .append('line')
    .attr('class', 'annotation-line')
    .attr('x1', item => item.position)
    .attr('y1', item => namesLevels[item.level] - 4)
    .attr('x2', item => item.position)
    .attr('y2', item => linesLevels.throne - 8);
};
