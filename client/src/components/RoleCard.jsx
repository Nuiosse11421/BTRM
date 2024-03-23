import React, { useEffect, useState } from "react";
import NavBar from './NavBar';
import axios from 'axios'
import { useGetUserID } from "../hook/useGetUserID";
const RoleCard = () => {
    const [roleData, setroleData] = useState([])
    const userID = useGetUserID()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/role-card', {
                    params: { userID }
                })
                setroleData(response.data);
            } catch (err) {

            }
        }
        if (userID) {
            fetchData()
        }
    }, [userID])

    return (
        <div>
            <NavBar />
            hello from Role card
            <ul>
                {Object.entries(roleData).map(([roleName, roleScore]) => (
                    <li key={roleName}>
                        {roleName}: {roleScore}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RoleCard