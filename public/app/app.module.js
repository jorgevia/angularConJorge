import angular from "angular";
import uiRouter from "angular-ui-router";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import "./app.scss";

export const AppModule = angular
  .module("app", [ComponentsModule, uiRouter])
  .component("app", AppComponent).name;
