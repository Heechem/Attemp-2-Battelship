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
