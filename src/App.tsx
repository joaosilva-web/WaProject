import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { QuestionsPage } from "./pages/QuestionsPage";

export function App() {

  return (
    <Router>
          <Header/>
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path="/questions">
              <QuestionsPage/>
            </Route>
          </Switch>
        </Router>
  )
}

