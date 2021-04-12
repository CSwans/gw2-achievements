import React, { useEffect, useState } from "react"
import fetchAchievementGroups from "../api/achievementGroups"
import AchievementGroupLink from "./AchievementGroupLink"

const Component = () => {
    const [groups, setGroups] = useState([])
    useEffect(() => {
        const set = async () => {
            setGroups(await fetchAchievementGroups())
        }
        set()
    }, [])

    return (
        <ul>
            {groups.map((group) => (
                <li key={group}>
                    <AchievementGroupLink groupId={group} />
                </li>
            ))}
        </ul>
    )
}

export default Component
