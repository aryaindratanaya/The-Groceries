angular
  .module("app")

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/", {
          template: "<grocery-list></grocery-list>",
        })

        .when("/add-an-item", {
          template: "<add-item-form></add-item-form>",
        });
    },
  ]);
