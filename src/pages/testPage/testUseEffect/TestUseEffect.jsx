import React, { useEffect, useState } from 'react';

const TestUseEffect = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => console.log(res))
      .then((user) => {
        setUsers(users);
        setLoading(false);
      });
  });

  if (loading) return <div>Loading....</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
export default TestUseEffect;
