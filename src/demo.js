import * as d3 from 'd3';
import { dimensions } from './config';
import drawLines from './lines';
import drawChapters from './chapters';
import drawLabels from './labels';

const {
  width,
  height,
  margins
} = dimensions;

export default function draw() {
  const svg = d3.select('.root')
    .append('svg')
    .attr('width', width + margins.left + margins.right)
    .attr('height', height + margins.top + margins.bottom);

  svg.append('g') // lines
    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')')
    .call(drawLines);

  svg.append('g') // chapters
    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')')
    .call(drawChapters);

  svg.append('g') // labels
    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')')
    .call(drawLabels);
}
