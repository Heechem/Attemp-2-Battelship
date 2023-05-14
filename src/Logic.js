// length of the ships

export const shipLengths = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarien: 3,
  destroyer: 2,
};

const ship = (type) => {
  const id = type;
  const lengthOfShip = shipLengths(type);
  let direction = 'horizontal';

  const getDirection = () => direction;
  const changeDirection = () => {
    direction === 'horizontal'
      ? (direction = 'vertical')
      : (direction = 'horizontal');
  };
  // hits the ships

  const hits = Array(lengthOfShip).fill(null);
  const hit = (i) => (hits[i] = 'hit');
  const getHits = () => hits;
  // check if the ship is sunk
  const isSunk = () => hits.every((h) => h === 'hit');

  return {
    id,
    lengthOfShip,
    getDirection,
    changeDirection,
    getHits,
    hit,
    isSunk,
  };
};

export default ship;
