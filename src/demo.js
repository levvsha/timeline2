import * as d3 from 'd3';
import chronology, { dimensions } from './config';
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
          toggleLine: this.hoverLabel,
          chronology
        };

        this.lines = new DrawLines(selection, props);
      });

    window.addEventListener('load', () => {
      svg.append('g') // chapters
        .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')')
        .call((selection) => {
          const props = {
            hoverLinesByChapter: this.hoverLinesByChapter
          };

          new DrawChapters(selection, props)
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

  hoverLinesByChapter = (chapterData, status) => {
    let highlightedKeys = [];

    for (let i = 0; i < chronology.length; i++) {
      const throneLevel = chronology[i].levels.filter(level => level.level === 'throne');

      if (!throneLevel.length || chronology[i].isBorn) {
        continue;
      }

      const throneDates = throneLevel[0].points;

      if (
        chapterData.period[0] >= throneDates[0] && chapterData.period[0] <= throneDates[1] ||
        chapterData.period[1] >= throneDates[0] && chapterData.period[1] <= throneDates[1] ||
        throneDates[0] >= chapterData.period[0] && throneDates[1] <= chapterData.period[1]
      ) {
        highlightedKeys.push(chronology[i].key)
      }
    }

    highlightedKeys.forEach(key => {
      this.lines.toggleLine(key, status);
      this.labels.toggleLabel(key, status);
    });
  }
  
  hoverLabel = (key, status) => {
    this.lines.toggleLine(key, status);
    this.labels.toggleLabel(key, status);
  }
}

