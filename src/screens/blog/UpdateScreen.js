import React, { useContext } from 'react';
import { Context } from '../../context/BlogContext';
import BlogForm from '../../components/BlogForm';
import useBlog from '../../hooks/useBlog';

export default function UpdateScreen({ route, navigation: { navigate } }) {
  const { id }= route.params;
  const { updatePost } = useContext(Context);

  const onSubmit = ({ title, content }) => {
    updatePost(id, { title, content }, () => navigate('Blogs', { action: 'updated' }));
  };

  const { title, content } = useBlog(id);

  return (
    <BlogForm onSubmit={onSubmit} initialValues={{ title, content }} />
  );
}
