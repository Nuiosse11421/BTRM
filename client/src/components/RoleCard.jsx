import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useGetUserID } from "../hook/useGetUserID";
import '../components/css/RoleDescription.css'
const RoleCard = () => {
    const [roleData, setroleData] = useState([])
    const [roleDescription, setRoleDescription] = useState([])
    const userID = useGetUserID()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/role-latest', {
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
    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/role-card')
                setRoleDescription(response.data)
            } catch (err) {

            }
        }
        fecthData()
    }, [])
    const sortedRoleArray = Object.entries(roleData).sort((a, b) => b[1] - a[1]);
    if (userID == null) {
        return (
            <div>

                {Object.values(roleDescription).map(rdt => (
                    <div className="role-area" key={rdt.name}>
                        <div className="role-name">{rdt.name}</div>
                        <div className="role-detail">
                            <p>{rdt.description}</p>
                            <p><span className="heatext">Strengths:</span> {rdt.strengths}</p>
                            <p><span className="heatext">Allowable weaknesses:</span> {rdt.weeknesses}</p>
                            <p><span className="heatext">Don't be surprised to find that:</span> {rdt.surprised}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    const displayRoleDes = sortedRoleArray.map(([roleN]) => {
        const rdt = roleDescription[roleN]
        return (

            <div className="role-area" key={roleN}>
                <div className="role-name">
                    {rdt.name}
                </div>
                <div className="role-detail">
                    <p>{rdt.description}</p>
                    <p ><span className="heatext">Strengths:</span>
                        {rdt.strengths}
                    </p>
                    <p> <span className="heatext">Allowable weaknesses:</span>
                        {rdt.weeknesses}</p>
                    <p ><span className="heatext">Don't be surprised to find that: </span>
                        {rdt.surprised}</p>
                </div>
            </div>

        )
    })
    return (
        <div className="grid-container">
            {displayRoleDes}
        </div>
    )
}
export default RoleCard