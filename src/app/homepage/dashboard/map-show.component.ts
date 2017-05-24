import { Component } from '@angular/core';

@Component({
  selector: 'map-show',
  templateUrl: './map-show.component.html',
  inputs: ["show","data","labels"]
})
export class MapShowComponent {
    columnTypes = [{
                'type': 'string',
                'value': 'subjectName'
              },
                {
                  'type': 'number',
                  'value': 'Marks'
                }];
  chartType = 'Pie';
  options = {
                'width': 500,
                'height': 300,
                'pieHole': 0.4,
                'bars': 'vertical',
                'chartArea': { 'left': 50, 'bottom': 50, 'right': 100, 'top': 50 }
              };
}

