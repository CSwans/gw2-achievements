import React, { useEffect, useState } from "react"
import { useRouteMatch } from "react-router"
import fetchAchievementGroup from "../api/achievementGroup"
import ListLink from "./ListLink"
import fetchAchievementCategory from "../api/achievementCategory"

const Component = () => {
    const match = useRouteMatch("/:groupId")
    const groupId = match?.params.groupId

    const [group, setGroup] = useState([])
    useEffect(() => {
        const set = async () => {
            setGroup(await fetchAchievementGroup({ id: groupId }))
        }

        set()
    }, [groupId])

    if (!group) {
        return null
    }

    return (
        <div className="flex flex-col">
            {group.categories?.map((category) => (
                <ListLink
                    key={category}
                    id={category}
                    urlPrefix={`/${groupId}`}
                    dataFetch={fetchAchievementCategory}
                />
            ))}
        </div>
    )
}

export default Component
