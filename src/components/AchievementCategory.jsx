import React, { useEffect, useState } from "react"
import { useRouteMatch } from "react-router"
import fetchAchievementCategory from "../api/achievementCategory"
import AchievementCard from "./AchievementCard"

const Component = () => {
    const match = useRouteMatch("/:groupId/:categoryId")
    const categoryId = match?.params.categoryId
    const [category, setCategory] = useState()
    useEffect(() => {
        const set = async () => {
            setCategory(await fetchAchievementCategory({ id: categoryId }))
        }
        set()
    }, [categoryId])

    if (!categoryId) {
        return null
    }

    return (
        <div className="col-span-3">
            {category?.achievements?.map((achievement) => (
                <AchievementCard achievementId={achievement} />
            ))}
        </div>
    )
}

export default Component
