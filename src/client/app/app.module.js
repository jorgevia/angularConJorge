import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import "./app.scss";

export const AppModule = angular
  .module("app", [ComponentsModule, uiRouter])
  .component("app", AppComponent)
  .name;
