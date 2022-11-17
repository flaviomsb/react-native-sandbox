import { useContext } from 'react';
import { Context } from '../context/BlogContext';

export default function useBlog(id) {
  const { state } = useContext(Context);

  return state.find((blog) => blog.id === id);
}
