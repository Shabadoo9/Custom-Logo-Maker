const { Triangle, Circle, Square } = require('./shapes');

// Create tests for each shape type 
test('Triangle render with green color', () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="green" />');
});

test('Circle render with purple color', () => {
    const shape = new Circle();
    shape.setColor("purple");
    expect(shape.render()).toEqual('<circle cx="150" cy="90" r="90" fill="purple" />');
});

test('Square render with orange color', () => {
    const shape = new Square();
    shape.setColor("orange");
    expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="orange" />');
});