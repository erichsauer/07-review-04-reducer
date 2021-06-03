export const initialState = {
  before: [],
  current: '#FF0000',
  after: [],
};

export const reducer = ({ before, current, after }, { type, payload }) => {
  switch (type) {
    case 'UNDO':
      return {
        before: before.slice(0, -1),
        current: before[before.length - 1],
        after: [current, ...after],
      };
    case 'REDO':
      return {
        before: [...before, current],
        current: after[0],
        after: after.slice(1),
      };
    case 'RECORD':
      return {
        before: [...before, current],
        current: payload,
        after,
      };
    default:
      throw new Error('no action ${action} recognized 😭');
  }
};
