export const angularLessons = [
  {
    slug: "intro-and-binding",
    title: "Intro & Data Binding",
    summary: "Hello AngularJS: modules, ng-app, and {{ }} binding.",
    level: "Beginner",
    time: 12,
    html: `
      <p>AngularJS (1.x) uses declarative templates. Bind values with <code>{{'{{'}} expression {{'}}'}}</code>.</p>
      <p>Start by creating a module and bootstrapping with <code>ng-app</code>.</p>
    `,
    htmlTemplate: `<div ng-app=\"funApp\" ng-controller=\"MainCtrl\">\n  <h2>Hello {{name}}! ??</h2>\n  <input ng-model=\"name\" placeholder=\"Type your name\"/>\n</div>`,
    jsTemplate: `angular.module('funApp', [])\n.controller('MainCtrl', function($scope){\n  $scope.name = 'AngularJS';\n});`,
  },
  {
    slug: "controllers-and-scope",
    title: "Controllers and $scope",
    summary: "Manage state and behavior in controllers.",
    level: "Beginner",
    time: 12,
    html: `
      <p>Controllers attach data and functions to <code>$scope</code> for the view.</p>
    `,
    htmlTemplate: `<div ng-app=\"funApp\" ng-controller=\"MainCtrl\">\n  <p>Count: {{count}}</p>\n  <button ng-click=\"inc()\">+1</button>\n</div>`,
    jsTemplate: `angular.module('funApp', [])\n.controller('MainCtrl', function($scope){\n  $scope.count = 0;\n  $scope.inc = function(){ $scope.count++; };\n});`,
  },
  {
    slug: "directives-basics",
    title: "Directives: ng-repeat, ng-click",
    summary: "Loop and interact with your templates.",
    level: "Intermediate",
    time: 14,
    html: `
      <p>Use <code>ng-repeat</code> to render lists; <code>ng-click</code> for events.</p>
    `,
    htmlTemplate: `<div ng-app=\"funApp\" ng-controller=\"MainCtrl\">\n  <ul>\n    <li ng-repeat=\"todo in todos\">\n      <label><input type=\"checkbox\" ng-model=\"todo.done\"/> {{todo.text}}</label>\n    </li>\n  </ul>\n  <button ng-click=\"add()\">Add Random</button>\n</div>`,
    jsTemplate: `angular.module('funApp', [])\n.controller('MainCtrl', function($scope){\n  $scope.todos = [{text:'Learn ng-repeat', done:false}];\n  $scope.add = function(){\n    $scope.todos.push({ text: 'Item ' + ($scope.todos.length+1), done:false });\n  };\n});`,
  },
  {
    slug: "filters-and-pipes",
    title: "Filters",
    summary: "Format and transform output.",
    level: "Intermediate",
    time: 10,
    html: `
      <p>Use built-in filters like <code>uppercase</code>, <code>currency</code>, and <code>date</code>.</p>
    `,
    htmlTemplate: `<div ng-app=\"funApp\" ng-controller=\"MainCtrl\">\n  <p>{{price | currency}}</p>\n  <p>{{when | date:'medium'}}</p>\n</div>`,
    jsTemplate: `angular.module('funApp', [])\n.controller('MainCtrl', function($scope){\n  $scope.price = 19.99;\n  $scope.when = new Date();\n});`,
  },
  {
    slug: "services-and-http",
    title: "Services and $http (with fetch)",
    summary: "Fetch data and share logic across app.",
    level: "Intermediate",
    time: 16,
    html: `
      <p>Services encapsulate logic. We'll simulate HTTP with <code>fetch</code> via a tiny wrapper.</p>
    `,
    htmlTemplate: `<div ng-app=\"funApp\" ng-controller=\"MainCtrl\">\n  <button ng-click=\"load()\">Load Posts</button>\n  <ul>\n    <li ng-repeat=\"p in posts\">{{p.title}}</li>\n  </ul>\n</div>`,
    jsTemplate: `angular.module('funApp', [])\n.factory('api', function($q){\n  return {\n    getPosts: function(){\n      var d = $q.defer();\n      fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')\n        .then(r => r.json())\n        .then(d.resolve)\n        .catch(d.reject);\n      return d.promise;\n    }\n  };\n})\n.controller('MainCtrl', function($scope, api){\n  $scope.posts = [];\n  $scope.load = function(){\n    api.getPosts().then(function(data){ $scope.posts = data; });\n  };\n});`,
  }
];
