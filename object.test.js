const createObject = require('./object');

test('object assignment', () => {
    const data = createObject()
    expect(data).toEqual({firstname: 'Saruj', lastname: 'Sattayanurak'});
  });