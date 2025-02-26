import React, { useState,useEffect } from 'react';
import '../style/textStyle.css'; 
import '../style/NamesStyle.css'; 


function Names(){
    const [users, setUsers] = useState([])
    async function fetchData() {
        try{
            const res=await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))

            const data= res.json();
            return data;
        } catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData(); 
    }, []);

    return(
        <div class="NamesMain">
            <div>
                <h1 class="HeadingH2">Имена</h1>
                {users.map(user => (
                        <li>{user.name}</li> 
                    ))}
            </div>
        </div>
    )
}

export default Names;