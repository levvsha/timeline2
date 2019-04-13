import { chapters, xScale, parseTime } from './config';

const chaptersLevels = {
  first: 375,
  second: 395,
  third: 415,
  fourth: 435,
};

export default function drawChapters(selection, props) {
  const chaptersNode = selection
    .selectAll('g')
    .data(chapters.map(chapter => ({
      ...chapter,
      period: [xScale(parseTime(chapter.period[0])), xScale(parseTime(chapter.period[1]))]
    })))
    .enter()
    .append("g")
    .attr('class', 'chapter-g');

  chaptersNode
    .append('line')
    .attr('class', 'hidden-chapter-line')
    .attr("x1", item => item.period[0])
    .attr("y1", item => chaptersLevels[item.level])
    .attr("x2", item => item.period[1])
    .attr("y2", item => chaptersLevels[item.level]);

  chaptersNode
    .append('line')
    .attr('class', 'chapter-line')
    .attr("x1", item => item.period[0])
    .attr("y1", item => chaptersLevels[item.level])
    .attr("x2", item => item.period[1])
    .attr("y2", item => chaptersLevels[item.level]);

  chaptersNode
    .append("text")
    .attr('class', 'chapter-label')
    .attr('text-anchor', 'middle')
    .attr('x', item => {
      let xPosition = item.period[0] + (item.period[1] - item.period[0]) / 2;

      if (item.position === 'right') {
        xPosition = item.period[1] + 65
      }

      return xPosition;
    })
    .attr('y', item => {
      let positionAdjustment = null;

      if (item.position === 'top') {
        positionAdjustment = 10;
      } else if (item.position === 'bottom') {
        positionAdjustment = -22;
      } else if (item.position === 'right') {
        positionAdjustment = -5.5;
      }

      return chaptersLevels[item.level] - positionAdjustment;
    })
    .text(item => item.label);
}