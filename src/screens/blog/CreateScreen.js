import React, { useContext } from 'react';
import { Context } from '../../context/BlogContext';
import BlogForm from '../../components/BlogForm';

export default function CreateScreen({ navigation: { navigate } }) {
  const { addPost } = useContext(Context);

  const onSubmit = ({ title, content }) => {
    addPost({ title, content }, () => navigate('Blogs', { action: 'created' }));
  };

  return (
    <BlogForm onSubmit={onSubmit} />
  );
}
