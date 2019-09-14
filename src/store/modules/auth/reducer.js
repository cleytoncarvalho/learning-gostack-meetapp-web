import produce from 'immer';

const INITIAL_STATE = {
  name: '',
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/NAME_SUCCESS':
        draft.name = action.payload.name;
        console.tron.log(draft.name);
        break;
      default:
    }
  });
}
