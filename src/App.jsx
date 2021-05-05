import { BrowserRouter as Router } from "react-router-dom"
import AchievementGroups from "./components/AchievementGroups"
import AchievementGroup from "./components/AchievementGroup"
import AchievementCategory from "./components/AchievementCategory"
import AddKey from "./components/AddKey"
import ListKeys from "./components/ListKeys"

function App() {
    return (
        <Router>
            <AddKey />
            <ListKeys />
            <div className="grid grid-cols-5">
                <AchievementGroups />
                <AchievementGroup />
                <AchievementCategory />
            </div>
        </Router>
    )
}

export default App
