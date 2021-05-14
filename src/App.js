import "./App.css";
import { TopBar, SideBar } from "./components";
import {
  HomeScreen,
  AppointmentScreen,
  ScheduleScreen,
  AddOfficerScreen,
  WorkingScreen,
  MedicineScreen,

  OfficerListScreen,
} from "./screens";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <TopBar />
        <div className="content">
          <SideBar />
          {/* Screen Routing */}
          <Switch>
            <Route path="/working">
              <WorkingScreen />
            </Route>
            <Route path="/medicine">
              <MedicineScreen />
            </Route>
            <Route path="/officerlistscreen">
              <OfficerListScreen/>
            </Route>

            <Route path="/addofficer">
              <AddOfficerScreen/>
            </Route>


            <Route path="/schedule">
              <ScheduleScreen />
            </Route>
            <Route path="/appointment">
              <AppointmentScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
