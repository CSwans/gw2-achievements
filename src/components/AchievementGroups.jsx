import React, { useEffect, useState } from "react"
import fetchAchievementGroups from "../api/achievementGroups"
import ListLink from "./ListLink"
import fetchAchievementGroup from "../api/achievementGroup"

const Component = () => {
    const [groups, setGroups] = useState([])
    useEffect(() => {
        const set = async () => {
            setGroups(await fetchAchievementGroups())
        }
        set()
    }, [])

    return (
        <div className="flex flex-col">
            {groups.map((groupId) => (
                <ListLink
                    id={groupId}
                    urlPrefix=""
                    dataFetch={fetchAchievementGroup}
                />
            ))}
        </div>
    )
}

export default Component
