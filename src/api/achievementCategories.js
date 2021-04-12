import { baseUrl } from "."

const fetchAchievementCategories = async () => {   
    try {
        const res = await fetch(`${baseUrl}/achievements/categories`)
        if (res.ok) {
            const data = await res.json()
            return data
        }
    } catch(e) {
        throw new Error()
    }
}

export default fetchAchievementCategories
