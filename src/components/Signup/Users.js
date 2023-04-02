import { get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { database } from '../../firebase';

const Users = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        // setting location (users) for pushing data
        const usersRef = ref(database, 'users');

        // getting user data
        get(usersRef).then((snapshot) => {
            if (snapshot.exists()) {
                let data = snapshot.val();
                for (const key in data) {
                    const dataValues = data[key];
                    setUserData(dataValues);
                }
            } else {
                console.log('No data available');
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])
    return (
        <div>
            <h3>
                {userData?.firstName}
            </h3>
            <h5>
                {userData?.secondName}
            </h5>
            <p>
                {userData?.dateofBirth}
            </p>
            {/* {userData?.firstName} */}

        </div>
    )
}

export default Users