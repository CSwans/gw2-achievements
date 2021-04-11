import React, { useEffect, useState } from 'react'
import fetchAchievementGroups from './api/achievementGroups'
import AchievementGroup from './AchievementGroup'

const Component = () => {
    const [groups, setGroups] = useState([])
    useEffect(async () => {  
        setGroups(await fetchAchievementGroups())
    }, [])

    console.log("Groups", groups)
    
    return groups.map(groupId => <AchievementGroup id={groupId}/>)
}

export default Component