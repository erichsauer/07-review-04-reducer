export const UNDO = 'UNDO';
export const undo = () => ({
  type: UNDO,
});

export const REDO = 'REDO';
export const redo = () => ({
  type: REDO,
});

export const RECORD = 'RECORD';
export const record = ({ value }) => ({
  type: RECORD,
  payload: value,
});
