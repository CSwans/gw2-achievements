import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import fetchAchievementCategory from "../api/achievementCategory"
// import AchievementLink from "./AchievementLink"
import AchievementCard from "./AchievementCard"

const Component = () => {
    const { categoryId } = useParams()
    const [category, setCategry] = useState()
    useEffect(() => {
        const set = async () => {
            setCategry(await fetchAchievementCategory({ id: categoryId }))
        }
        set()
    }, [categoryId])

    return (
        <>
            <h1>{category?.name}</h1>
            <p>{category?.description}</p>
            <div className="md:grid md:grid-cols-2 md:gap-4 space-y-4 mt-4">
                {category?.achievements?.map((achievement) => (
                    <AchievementCard achievementId={achievement} />
                ))}
            </div>
        </>
    )
}

export default Component
