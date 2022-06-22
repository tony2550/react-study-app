import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import AsyncUser from './AsyncUser';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  console.log(response);
  console.log(response.data);
  console.log(typeof response.data);
  return response.data;
  // Promise 결과를 바로 data에 담는다.
  // 요청 후 response 에서 data 추출 and 리턴
}

function AsyncUsers() {
  const [userId, setUserId] = useState(null);
  // reload 함수 사용시 Promise 데이터를 다시 불러올 수 있다.
  const {
    data: users,
    error,
    isPending,
    run,
  } = useAsync({
    deferFn: getUsers,
  });

  if (isPending) return <div>Now Loading...</div>;
  if (error) return <div>Error</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            id={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username}
          </li>
        ))}
      </ul>
      <button onClick={run}>Re fetch</button>
      {userId && <AsyncUser id={userId} />}
    </>
  );
}

export default AsyncUsers;
