import React, { useState } from 'react';
import axios from 'axios';
import useAsync from '../../UserAsync.js';
import User from './User.jsx';

const getUsers = async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
    // Promise 결과를 바로 data에 담는다.
    // 요청 후 response 에서 data 추출 and 리턴
};

const Users = () => {
    const [state, refetch] = useAsync(getUsers, [], true);
    // dispatch -> refetch 로 변경됨
    const { loading, data: users, error } = state;
    const [userId, setUserId] = useState(null);

    if (loading) return <div>Now Loading...</div>;
    if (error) return <div>Error</div>;
    if (!users) return <button onClick={refetch}>Fetch</button>;

    return (
        <>
            <div>
                <span>UsersV2</span>
                <ul>
                    {users.map((user) => (
                        <>
                            <li
                                key={user.id}
                                onClick={() => setUserId(user.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                {user.username} ({user.name})
                            </li>
                        </>
                    ))}
                </ul>
                <button onClick={refetch}>Re fetch</button>
                {userId && <User id={userId} />}
            </div>
        </>
    );
};

export default Users;
