import ship from './src/Logic';

describe('test ship factory function', () => {
  const shipTest = ship('battleship');
  test('id', () => {
    expect(shipTest.id).toBe(4);
  });
  test('lengthOfShip', () => {
    expect(shipTest.getDirection()).toBe('horizontal');
  });
  test('direction', () => {
    shipTest.changeDirection();
    expect(shipTest.getDirection()).toBe('vertical');
  });
});

describe('Hit function tests ', () => {
  const shipTest = ship('submarine');
  test('no hits', () => {
    expect(shipTest.getHits()).toEqual([null, null, null]);
  });
  test('one hit', () => {
    shipTest.hit(2);
    expect(shipTest.getHits()).toEqual([null, null, 'hit']);
  });
});
