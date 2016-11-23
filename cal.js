var calculator = (function(){
  function calc(){
    var accumulator = [];
    var answer = 0;
    return {
      add: function(no){
        answer+=no;
      },
      subtract: function(no){
        answer-=no;
      },
      multiply: function(no){
        answer*=no;
      },
      divide: function(no){
        answer/=no;
      },
      number: function(no){
        accumulator.push(no);
      },            
      answer: function(){
        return answer + "";
      },
      clear: function(){
        accumulator = [];
        answer = 0;
      }
    };
  }
  return calc();
})();