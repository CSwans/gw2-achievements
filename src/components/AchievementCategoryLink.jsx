import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import fetchAchievementCategory from "../api/achievementCategory"

const Component = ({ categoryId }) => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        const set = async () => {
            setCategory(await fetchAchievementCategory({ id: categoryId }))
        }
        set()
    }, [categoryId])

    return (
        <Link to={`/categories/${categoryId}`}>
            {category?.name ?? "Unknown"}
        </Link>
    )
}

export default Component
