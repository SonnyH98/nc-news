import { fetchUsers } from "./api-calls";
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/User';

export default function Users() {
    const { user, setUser } = useContext(UserContext);

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchUsers().then((usersInfo) => {
          setUsers(usersInfo);
        })
    }, []);
    return(
        <section>
            <ul>
                {users.map((user) => {
                    return(
                        <li key={user.username}>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <img className='user-imgs' src={user.avatar_url}></img>
                            <button
                onClick={() => {
                  setUser((currUser) => {
                    console.log(currUser);
                    return (currUser = user.username);
                  });
                }}
              >
                Select this user
              </button>

                        </li>
                    )
                })}
            </ul>
        </section>
    )
    
}