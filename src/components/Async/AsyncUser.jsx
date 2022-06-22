import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';

async function getUser({ id }) {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/' + id
  );
  return response.data;
}

const AsyncUser = ({ id }) => {
  const {
    data: user,
    error,
    isLoading,
  } = useAsync({ deferFn: getUser, id, watch: id });

  if (isLoading) return <div>Now Loading</div>;
  if (error) return <div>Error</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <span>Email : {user.email}</span>
        <span>City : {user.address.city}</span>
      </p>
    </div>
  );
};

export default AsyncUser;
