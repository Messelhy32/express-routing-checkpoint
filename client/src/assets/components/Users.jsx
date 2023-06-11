/* eslint-disable react/prop-types */
function Users({ users }) {
  return (
    <div>
      <h1>Users:</h1>
      {users.map((user) => {
        return (
          <div key={user.name}>
            <h3>{user.name}</h3>
            <h4>{user.age}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
