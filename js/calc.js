var calculator = (function(){
  function calc(){
    var accumulator = [];
    function validate(input){
      if(accumulator.length > 9){
        return false;
      }

      var exp = accumulator.join('');
      //append 0 before decimal number
      if(input === '.' && (exp.length == 0  || '.x/+-%'.indexOf(exp[exp.length-1]) >= 0)){
        accumulator.push('0');
        return true;
      }
      //prevent operator input before number
      else if(exp.length == 0 && 'x/+-%'.indexOf(input) >= 0){
        return false;
      }
      //prevent operator and . duplicate.
      else if('.x/+-%'.indexOf(input) >= 0 && '.x/+-%'.indexOf(exp[exp.length-1]) >= 0){
        return false;
      }

      var last = exp.match(/^[-+]?\d*\.?\d*$/);
      if(last && last[0]){
        var lastNumber = last[0];
        console.log(lastNumber);
        if(lastNumber === '0' && input === '0'){
          return false;
        }
        if(input === '.' && lastNumber.toString().indexOf('.') > 0){
          return false;
        }
      }
      return true;
    };
    return {
      input: function(val){
        if(validate(val)){
          accumulator.push(val);
        }
        return accumulator.join('');
      },
      pop: function(){
        if(accumulator.length > 0){
          accumulator.pop();
        }
        return accumulator.join('');
      },
      answer: function(){
        var ans = ' ';
        try{
          var exp = accumulator.join('').replace(/x/gi,'*');
          ans = eval(exp) || " ";
          //console.log("answer: " + ans);
        }
        catch(err){
          //console.error("invalid expression " + accumulator.join(''));
        }

        return ans;
      },
      clear: function(){
        accumulator = [];
      }
    };
  }
  return calc();
})();
