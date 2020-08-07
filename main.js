import { Tooltip } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';

initializeTooltip();
initializeFlexGrid();


function initializeTooltip() {
  const host = document.querySelector('.tooltip-host');
  const button = document.createElement('button');
  button.textContent = 'Show/Hide tooltip';
  host.append(button);

  const tooltip = new Tooltip();
  button.addEventListener('click', () => {
    tooltip.show(button, 'Tooltip content');
  });
}

function initializeFlexGrid() {
  const host = document.querySelector('.flex-grid-host');
  const grid = new FlexGrid(host, {
    itemsSource: [
      { prop0: 'aaa', prop1: 'bbb', prop2: 'ccc', prop3: 'ddd' },
      { prop0: 'aaa', prop1: 'bbb', prop2: 'ccc', prop3: 'ddd' },
      { prop0: 'aaa', prop1: 'bbb', prop2: 'ccc', prop3: 'ddd' },
      { prop0: 'aaa', prop1: 'bbb', prop2: 'ccc', prop3: 'ddd' },
      { prop0: 'aaa', prop1: 'bbb', prop2: 'ccc', prop3: 'ddd' },
    ]
  })
}
