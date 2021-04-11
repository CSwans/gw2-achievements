import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AchievementGroups from "./AchievementGroups"
import AchievementGroup from "./AchievementGroup"

function App() {
    return (
        <Router>
            <Switch>
                <Route path={"/groups/:groupId"}>
                    <AchievementGroup />
                </Route>
                <Route path={"/categories/:categoryId"}>Category</Route>
                <Route path={"/"}>
                    <AchievementGroups />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
