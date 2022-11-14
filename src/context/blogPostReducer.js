export const actions = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
};

export default function blogPostReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.CREATE:
      return [...state, payload];
    case actions.DELETE:
      return state.filter((post) => post.id !== payload);
    default:
      return state;
  }
}
