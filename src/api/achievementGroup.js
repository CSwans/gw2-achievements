import { baseUrl } from "."

const fetchAchievementGroup = async ({ id }) => {
    try {
        const res = await fetch(`${baseUrl}/achievements/groups/${id}`)
        if (res.ok) {
            const data = await res.json()
            return data
        }
    } catch(e) {
        throw new Error()
    }
}

export default fetchAchievementGroup
