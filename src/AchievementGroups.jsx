import React, { useEffect, useState } from "react"
import fetchAchievementGroups from "./api/achievementGroups"
import AchievementGroupLink from "./AchievementGroupLink"

const Component = () => {
    const [groups, setGroups] = useState([])
    useEffect(async () => {
        setGroups(await fetchAchievementGroups())
    }, [])

    return (
        <ul>
            {groups.map((group) => (
                <li>
                    <AchievementGroupLink groupId={group} />
                </li>
            ))}
        </ul>
    )
}

export default Component
