import createDataContext from './createDataContext';
import blogPostReducer, { actions } from './blogPostReducer';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

const addPost = ({ dispatch }) => {
  return ({ title, content }) => {
    const id = uuid();
    dispatch({
      type: actions.CREATE,
      payload: {
        id,
        title,
        content,
      },
    });
  }
};

const deletePost = ({ dispatch }) => {
  return (id) => {
    dispatch({
      type: actions.DELETE,
      payload: id,
    });
  }
};

export const { Context, Provider } = createDataContext({
  reducer: blogPostReducer,
  actions: {
    addPost,
    deletePost,
  },
  initialState: [],
});
