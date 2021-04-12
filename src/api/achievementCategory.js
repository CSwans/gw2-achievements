import { baseUrl } from "."

const fetchAchievementCategory = async ({ id }) => {   
    try {
        const res = await fetch(`${baseUrl}/achievements/categories/${id}`)
        if (res.ok) {
            const data = await res.json()
            return data
        }
    } catch(e) {
        throw new Error()
    }
}

export default fetchAchievementCategory
