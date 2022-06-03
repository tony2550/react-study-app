import React from 'react';
import axios from 'axios';
import useAsync from '../../UserAsync';

const getUser = async (id) => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/' + id
    );
    return response.data;
};

const User = ({ id }) => {
    const [state] = useAsync(() => getUser(id), [id]);
    // getUser(id)를 콜백함수 파라미터로
    // deps로 id 넣어줘서 id가 바뀔때마다 데이터를 호출해주어야함
    const { loading, data: user, error } = state;

    if (loading) return <div>Now Loading</div>;
    if (error) return <div>Error</div>;
    if (!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <h3>Email : {user.email}</h3>
                <h3>City : {user.address.city}</h3>
            </p>
        </div>
    );
};

export default User;
