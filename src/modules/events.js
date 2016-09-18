import drawingActions from './drawingActions';

function bindEvents(config){
  let actions = drawingActions(config);
  let elements = config.state.elements;
  elements.wrapper.addEventListener('mouseup', actions.stopDraw);
  elements.wrapper.addEventListener('mouseleave', actions.stopDraw);
  elements.wrapper.addEventListener('mousedown', actions.beginDraw);

  for (var i = 0; i < elements.squares.length; i++) {
    elements.squares[i].addEventListener('mousemove', actions.draw);
  }

  for (var i = 0; i < elements.colors.length; i++) {
    elements.colors[i].addEventListener('mousedown', actions.setColor);
  }

  elements.clearButton.addEventListener('mousedown', actions.clear);
}

export default config => {
  bindEvents(config);
}
