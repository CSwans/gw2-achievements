import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import fetchAchievementCategory from "../api/achievementCategory"
import AchievementLink from "./AchievementLink"

const Component = () => {
    const { categoryId } = useParams()
    const [category, setCategry] = useState()
    useEffect(async () => {
        setCategry(await fetchAchievementCategory({ id: categoryId }))
    }, [categoryId])

    console.log("Category", categoryId, category)
    return (
        <>
            <h1>{category?.name}</h1>
            <p>{category?.description}</p>
            {category?.achievements?.map((achievement) => (
                <li>
                    <AchievementLink achievementId={achievement} />
                </li>
            ))}
        </>
    )
}

export default Component
