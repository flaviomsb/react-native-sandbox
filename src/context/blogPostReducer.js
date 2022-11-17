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
    case actions.UPDATE:
      return state.map((blog) => blog.id === payload.id ? payload : blog);
    case actions.DELETE:
      return state.filter((blog) => blog.id !== payload);
    default:
      return state;
  }
}
