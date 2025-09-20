import { useSelector, useDispatch } from 'react-redux';
import { addUser, addUsers, removeUser, fetchQuotations } from './fetchSlice';

export default function UserComponent() {
  const dispatch = useDispatch();
  
  const users = useSelector((state) => state.fetch.users);
  const quotes = useSelector((state) => state.fetch.quotes);
  
  function handleAddUser() {
    dispatch(addUser("Pooja"));
  }
  
  function handleAddUsers() {
    dispatch(addUsers(["Pooja", "Teja", "Rishi"]));
  }
  
  function handleRemoveUser() {
    dispatch(removeUser());
  }
  
  function handleFetchQuotes() {
    dispatch(fetchQuotations(["Be happy!", "Keep going!", "Stay strong!"]));
  }
  
  return (
    <div>
      <h2>Users: {users.join(", ")}</h2>
      {/* <h2>Quotes: {quotes.join("|")}</h2> */}
      <div>
        <h2>Quotes</h2>
       { quotes.map((quote,index)=>(<p key={index}>{quote}</p>))}
      </div>
      <button onClick={handleAddUser}>Add Single User</button>
      <button onClick={handleAddUsers}>Add Multiple Users</button>
      <button onClick={handleRemoveUser}>Remove Last User</button>
      <button onClick={handleFetchQuotes}>Fetch Quotes</button>
    </div>
  );
}
