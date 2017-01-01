# dynamic-class
AngularJS directive such that an element's has a class added or removed based on its value

[on npm](https://www.npmjs.com/package/dynamic-class)

[![Latest release](https://img.shields.io/github/release/pstrinkle/dynamic-class.svg)](https://github.com/pstrinkle/dynamic-class/releases/latest)
[![npm](https://img.shields.io/npm/v/dynamic-class.svg)](https://www.npmjs.com/package/dynamic-class)

# Installing
Installing package via **NPM** <br/>
`npm i dynamic-class --save`

Installing package via **Bower** <br/>
`bower install dynamic-class --save`

# Usage
Given some element in the DOM, you attach an `options` and a `value` that you want to use as input to the directive, `dynamic-class`.  
The `options` should be an array of Objects each with three keys: `min` the minimum value to use for this class, `max` the value strictly 
greater than and the `class` to use.  As the value specified changes a class is chosen and applied to the DOM element given the options 
on a first-fit approach.

```html
<div ng-controller="startCtrl">
  <div>
    <h2 ng-bind="value" options="coloringOptions" value="value" dynamic-class></h2>
  </div>
  <div>
    <input type="number" ng-model="value" />
  </div>
</div>
```

```js
angular.module("ColoringDirectiveApp", ["dynamicClass"]).controller('startCtrl', ['$scope', function($scope) {
    $scope.coloringOptions = [
        /* <= < */
        {min: 0, max: 5, class: 'low'},
        {min: 5, max: 10, class: 'med'},
        {min: 10, max: 15, class: 'high'},
    ];
}]);
```

# License
MIT
