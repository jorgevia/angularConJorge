import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { searchBarComponent } from "./searchBar.component";
import "./searchBar.scss";

export const SearchBarModule = angular
  .module("searchBar", [uiRouter])
  .component("searchBar", searchBarComponent)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider.state("searchBar", {
      url: "/index",
      component: "searchBar"
    });
    $urlRouterProvider.otherwise("/");
  }]).name;
