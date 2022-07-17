angular
  .module("groceryList")

  .component("groceryList", {
    templateUrl: "/features/grocery-list/groceryList.template.html",
    controller: [
      "Grocery",
      function GroceryListCtrl(Grocery) {
        this.groceries = Grocery.groceries;
      },
    ],
  });
