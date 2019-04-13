import * as d3 from 'd3';
import { dimensions } from './config';
import DrawLines from './lines';
import DrawChapters from './chapters';
import DrawLabels from './labels';

const {
  width,
  height,
  margins
} = dimensions;

export default class Visualization {
  constructor() {
    const svg = d3.select('.root')
      .append('svg')
      .attr('width', width + margins.left + margins.right)
      .attr('height', height + margins.top + margins.bottom);

    svg.append('g') // lines
      .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')')
      .call((selection) => {
        const props = {
          toggleLine: this.hoverLabel
        };

        this.lines = new DrawLines(selection, props);
      });

    window.addEventListener('load', () => {
      svg.append('g') // chapters
        .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')')
        .call((selection) => {
          new DrawChapters(selection)
        });

      svg.append('g') // labels
        .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')')
        .call((selection) => {
          const props = {
            hoverLabel: this.hoverLabel
          };

          this.labels = new DrawLabels(selection, props)
        });
    });
  }
  
  hoverLabel = (key, status) => {
    this.lines.toggleLine(key, status);
    this.labels.toggleLabel(key, status);
  }
}

