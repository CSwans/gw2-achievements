import React, { useEffect, useState } from "react"
import fetchAchievementCategories from "../api/achievementCategories"
import AchievementCategory from "./AchievementCategory"

const Component = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const set = async () => {
            setCategories(await fetchAchievementCategories())
        }
        set()
    }, [])

    return categories.map((categoryId) => (
        <AchievementCategory id={categoryId} />
    ))
}

export default Component
