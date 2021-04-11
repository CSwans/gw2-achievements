import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import fetchAchievementGroup from "../api/achievementGroup"

const Component = ({ groupId }) => {
    const [group, setGroup] = useState([])
    useEffect(() => {
        const set = async () => {
            setGroup(await fetchAchievementGroup({ id: groupId }))
        }
        set()
    }, [groupId])

    return <Link to={`/groups/${groupId}`}>{group?.name ?? "Unknown"}</Link>
}

export default Component
