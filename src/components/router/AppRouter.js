import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { NotFound404 } from "../commons/NotFound404";
import Product from "../views/Product";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

  return (
    <Router>
        <div>
            <Switch>

                <PublicRoute 
                    exact 
                    path="/" 
                    component={ Product }
                />
                
                <PublicRoute 
                    exact 
                    path="/404" 
                    component={ NotFound404 }
                />

                <Redirect to="/404" />   
            </Switch>
        </div>
    </Router>
  );
};
