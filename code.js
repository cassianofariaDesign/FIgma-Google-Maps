figma.showUI(__html__, { width: 600, height: 400 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'insert-map') {
    const image = figma.createRectangle();
    image.resize(600, 400);
    image.fills = [{
      type: 'IMAGE',
      scaleMode: 'FILL',
      imageHash: figma.createImage(msg.bytes).hash
    }];
  }
};