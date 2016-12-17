(function(){
  var app = angular.module('myApp', []);
  app.controller('appController', function($scope){
    var reset = true;
    $scope.current = "0";
    $scope.log = "0";
    $scope.accumulator = [];
    $scope.ctrls = {
     current: function(value){
       if(value === '='){
        $scope.answer = calculator.answer();
       }
       else if(value === '<<'){
        $scope.log = calculator.pop(value);
        $scope.answer = calculator.answer();
       }
       else{
        $scope.log = calculator.input(value);
        $scope.answer = calculator.answer();
       }
     },
     clear: function(){
       calculator.clear();
       $scope.answer = " ";
       $scope.log = "0";
     },
   };
  });
})();
