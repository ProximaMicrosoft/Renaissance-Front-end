import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import { Home } from "./pages/Home";
import { Reservar } from "./pages/Reservas";
import { SignIn } from "./pages/SignIn";


export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/home/reservar" component={Reservar}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

