import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import fetchAchievementGroup from "../api/achievementGroup"
import AchievementCategoryLink from "./AchievementCategoryLink"

const Component = () => {
    let { groupId } = useParams()
    const [group, setGroup] = useState([])
    useEffect(async () => {
        setGroup(await fetchAchievementGroup({ id: groupId }))
    }, [groupId])

    console.log("Group", groupId, group)

    return (
        <>
            <h1>{group?.name}</h1>
            <p>{group?.description}</p>
            {group?.categories?.map((category) => (
                <li>
                    <AchievementCategoryLink categoryId={category} />
                </li>
            ))}
        </>
    )
}

export default Component
