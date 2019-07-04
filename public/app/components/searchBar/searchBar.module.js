import angular from "angular";
import uiRouter from "angular-ui-router";
import { searchBarComponent } from "./searchBar.component";
import "./searchBar.scss";

export const searchBarComponent = angular
  .module("searchBar", [uiRouter])
  .component("searchBar", searchBarComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $stateProvider.state("searchBar", {
      url: "/index",
      component: "searchBar"
    });
    $urlRouterProvider.otherwise("/");
  }).name;
