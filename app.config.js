angular
  .module("app")

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/", {
        template: "<grocery-list></grocery-list>",
      });
    },
  ]);
