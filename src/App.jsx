import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AchievementGroups from "./components/AchievementGroups"
import AchievementGroup from "./components/AchievementGroup"
import AchievementCategory from "./components/AchievementCategory"

function App() {
    return (
        <Router>
            <Switch>
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
