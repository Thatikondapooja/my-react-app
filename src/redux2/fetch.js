// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, addUsers, removeUser, fetchQuotations } from './fetchSlice';

export default function UserComponent() {
  const dispatch = useDispatch();

  // Read data from Redux
  const users = useSelector((state) => state.users);
  console.log("users",users)
  const quotes = useSelector((state) => state.quotes);
  console.log("quotes",quotes)

  function handleAddUser() {
    const auser=dispatch(addUser("Pooja"));
    console.log("auser",auser)
  }

  function handleAddUsers() {
    const allusers=dispatch(addUsers(["Pooja", "Teja", "Rishi"]));
        console.log("allusers",allusers)

  }

  function handleRemoveUser() {
    dispatch(removeUser());
  }

  function handleFetchQuotes() {
    dispatch(fetchQuotations(["Be happy!", "Keep going!", "Stay strong!"]));
  }

  return (
    <div>
      <h2>Users:{users}</h2>
      <h2>Quotes{quotes}</h2>

      <button onClick={handleAddUser}>Add Single User</button>
      <button onClick={handleAddUsers}>Add Multiple Users</button>
      <button onClick={handleRemoveUser}>Remove Last User</button>
      <button onClick={handleFetchQuotes}>Fetch Quotes</button>
    </div>
  );
}
