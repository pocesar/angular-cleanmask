AngularJS clean mask directive
=================

Angular helper directive to use the $viewValue of a ui-mask

## Why?

When you use `ui-mask` directive, you end up with a model with only numbers (for example). 
You lose the format and everything, which is why you use `ui-mask` in the first place.

```html
<input ui-mask="(99) 9999-9999?9" ng-model="doh"> <!-- input is now (12) 3456-1234_ -->
```

You end up with:

```js
$scope.doh === '1234561234'
```

Not pretty.

## Usage

```js
angular.module('yourapp', ['ngCleanMask']);
```

```html
<input clean-view-value ui-mask="(99) 9999-9999?9" ng-model="yup"> <!-- input is now (12) 3456-1234_ -->
```

```js
$scope.yup === '(12) 3456-1234' // model is correct now!
```
