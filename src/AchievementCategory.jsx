import React, { useEffect, useState } from 'react'
import fetchAchievementCategory from './api/achievementCategory'

const Component = ({id}) => {
    const [category, setCategry] = useState()
    useEffect(async () => {  
        setCategry(await fetchAchievementCategory({ id }))
    }, [])
    console.log("Category", id, category)
    return <div>{ category?.name ?? 'unknown' }</div>
}

export default Component