import angular from "angular";
import { SearchBarModule } from "./searchBar/searchBar.module";
import { ProductList } from "./productList/productList.module";
import { ProductDetail } from "./productDetail/productDetail.module";

export const ComponentsModule = angular.module("app.components", [
  SearchBarModule,
  ProductList,
  ProductDetail
]).name;
