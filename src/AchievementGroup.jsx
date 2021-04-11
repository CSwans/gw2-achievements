import React, { useEffect, useState } from 'react'
import fetchAchievementGroup from './api/achievementGroup'

const Component = ({ id }) => {
    const [group, setGroup] = useState([])
    useEffect(async () => {  
        setGroup(await fetchAchievementGroup({ id }))
    }, [])

    console.log("Group", group)
    
    return <div>{ group?.name ?? 'unknown' }</div>
}

export default Component