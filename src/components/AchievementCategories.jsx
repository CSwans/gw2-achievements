import React, { useEffect, useState } from "react"
import fetchAchievementCategories from "../api/achievementCategories"
import AchievementCategory from "./AchievementCategory"

const Component = () => {
    const [categories, setCategories] = useState([])
    useEffect(async () => {
        setCategories(await fetchAchievementCategories())
    }, [])

    console.log("Categories", categories)

    return categories.map((categoryId) => (
        <AchievementCategory id={categoryId} />
    ))
}

export default Component
