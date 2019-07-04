import templateUrl from "./searchBar.html";

export const searchBarComponent = {
  templateUrl,
  controller: class searchBarComponent {
    constructor() {
      this.showAlert();
    }
    showAlert() {
      alert("Hola Mundo");
    }
  }
};
