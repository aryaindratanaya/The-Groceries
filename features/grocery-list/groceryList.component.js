angular
  .module("groceryList")

  .component("groceryList", {
    templateUrl: "/features/grocery-list/groceryList.template.html",
    controller: function () {
      this.groceries = [
        { completed: true, name: "milk", date: "2014-10-1" },
        { completed: true, name: "cookies", date: "2014-10-1" },
        { completed: true, name: "ice cream", date: "2014-10-1" },
        { completed: true, name: "potatoes", date: "2014-10-1" },
        { completed: true, name: "cereal", date: "2014-10-1" },
        { completed: true, name: "bread", date: "2014-10-1" },
        { completed: true, name: "eggs", date: "2014-10-1" },
        { completed: true, name: "tortillas", date: "2014-10-1" },
      ];
    },
  });
