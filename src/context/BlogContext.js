import createDataContext from './createDataContext';
import blogPostReducer, { actions } from './blogPostReducer';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

const addPost = ({ dispatch }) => {
  return ({ title, content }, callback) => {
    const id = uuid();
    dispatch({
      type: actions.CREATE,
      payload: {
        id,
        title,
        content,
      },
    });
    callback();
  };
};

const updatePost = ({ dispatch }) => {
  return (id, { title, content }, callback) => {
    dispatch({
      type: actions.UPDATE,
      payload: {
        id,
        title,
        content,
      },
    });
    callback();
  };
};

const deletePost = ({ dispatch }) => {
  return (id, callback) => {
    dispatch({
      type: actions.DELETE,
      payload: id,
    });
    callback();
  };
};

export const { Context, Provider } = createDataContext({
  reducer: blogPostReducer,
  actions: {
    addPost,
    updatePost,
    deletePost,
  },
  initialState: [],
});
