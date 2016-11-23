(function(){
  var app = angular.module('myApp', []);
  app.controller('appController', function($scope){
    var reset = true;
    $scope.current = "0";
    $scope.log = "0";
   $scope.ctrls = {     
     current: function(value){       
       /*if(value !== "."  && ($scope.current === "0" || isNaN(value))){
         $scope.current = value;         
       }
       else if(Number($scope.current) && Number(value) || 
              (value === "." && $scope.current.indexOf(".") === -1)){
         $scope.current += value;                  
       }*/
       if(reset){
         if(value === "." && $scope.current.indexOf(".") > -1){
            value = "";
         }         
         $scope.current = parseInt(value) + "";                         
       }
       else{
         if(value === "." && $scope.current.indexOf(".") > -1){
           value = "";
         }
         $scope.current += value;
       }
       
       reset = false;
     },
     clear: function(){
       calculator.clear();
       $scope.current = "0";
       $scope.log = "0";
     },
     operator: function(operator){
       reset = true;
       var val = parseFloat($scope.current);
       switch(operator){
        case "+":
          calculator.add(val);    
           break;
        case "-":
          calculator.subtract(val);    
           break;
        case "x":
          calculator.multiply(val);    
           break;
        case "/":
          calculator.divide(val);    
           break;        
       }    
       if(operator === "+"
          || operator === "-"
          || operator === "x"
          || operator === "/"){
         $scope.current = operator;
         $scope.log = $scope.log === "0" ? $scope.current : $scope.log + $scope.current;
       }
       else if(operator === "="){
         var answer = calculator.answer();
         $scope.current = answer;
         $scope.log = answer;
       }
     },     
   };
  });
})();