import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AchievementGroups from "./components/AchievementGroups"
import AchievementGroup from "./components/AchievementGroup"
import AchievementCategory from "./components/AchievementCategory"
import Achievement from "./components/Achievement"
import AddKey from "./components/AddKey"

function App() {
    return (
        <Router>
            <AddKey />
            <Switch>
                <Route path={"/achievements/:achievementId"}>
                    <Achievement />
                </Route>
                <Route path={"/groups/:groupId"}>
                    <AchievementGroup />
                </Route>
                <Route path={"/categories/:categoryId"}>
                    <AchievementCategory />
                </Route>
                <Route path={"/"}>
                    <AchievementGroups />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
