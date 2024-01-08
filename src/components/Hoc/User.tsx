const User = () => {
  const user = {
    name: "Pratham",
    age: "22",
  };
  return (
    <div className="flex">
      <p>Name:- {user.name}</p>
      <p>Age:- {user.age}</p>
    </div>
  );
};

export default User;
