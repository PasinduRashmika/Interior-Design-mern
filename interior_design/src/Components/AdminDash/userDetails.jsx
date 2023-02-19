const userDetails = ({ user }) => {

  console.log({user});
    return (
      <div className="workout-details">
        <h4>{user.name}</h4>
        <p><strong>email: </strong>{user.email}</p>
        <p><strong>Role: </strong>{user.role}</p>
        {/* <p>{user.createdAt}</p> */}
      </div>
    )
  }
  
  export default userDetails