


var count =30;
var wins=0;
var lost=0;
var quesdisplay=0;

// var clickPinapple= false;
// var cAnswer=0;
// var wAnswer=0;

var queArray=[{ qes: "This is a Tropical Fruit",
                ans:['STRAWBERRY','PINEAPPLE','APPLE','PEAR'],
                correctanswer:"PINEAPPLE"
              } ,
              { qes: "This is not a Bird",
                ans:['DUCK','OWL','BAT','PARROT'],
                correctanswer:"BAT"
              } ,  
              {qes: "This is the Biggest Country In the World",
              ans:['USA','CHINA','Germany','Russia'],
              correctanswer:"CHINA"
            }
]

console.log("queArray: " + queArray);

$('#start').on('click',function(){
// $('#main-container').append('<h2> Time Remaining:<div id="timer">30</div> </h2>');
objGame.runQuestion();
});


var objGame={
  questions:queArray,
  correctanswer:0,
  rightanswer:0,
  wronganswer:0,
  countdown: function(){
  count--;
  if (count!==0){
      $('#timer').html('Time Remaining :'+ count);
  }
   if (count===0){
            $('#timer').html("Time's up");
}
},

runQuestion: function(){
  questime = setInterval(objGame.countdown, 1000);
  // $('#Q-div').html('<h2>' + this.questions[this.quesdisplay].qes + '</h2>' );
  // for (var i = 0; i< questions[this.quesdisplay].ans.length; i++){
    // $('#Q-div').append('<button class="answer-button" id="button"' + 'data-name="' + 
    //   questions[this.quesdisplay].ans[i] + '">' + 
    //   questions[this.quesdisplay].ans[i]+ '</button>');
    for( var i =0; i<queArray[this.countdown].length; i++){
    $('#Q-div').append('<h2>'+queArray[i].qes+'</h2>'+
    '<h4>'+queArray[i].ans[0]+'</h4>'+
    '<h4>'+queArray[i].ans[1]+'</h4>'+
    '<h4>'+queArray[i].ans[2]+'</h4>'+
    '<h4>'+queArray[i].ans[3]+'</h4>')
  }

},

nextques:function (){
    count=30;
    $('#timer').html(count);
    objGame.quesdisplay++;
    objGame.runQuestion();
  },


}

  console.log(objGame.nextques)
  console.log(objGame.runQuestion)


  //  function nextques(){
  //   count=30;
  //   $('#timer').html(count);
  //   objGame.currentQuestion++;
  //   objGame.loadQuestion();
  // }

  








  // var countdown = setInterval(function () {
  //     // for (let i = 0; i < 2; i++) {
  //     count--;
  //     if (count!==0){
  //         $('#timer').html('Time Remaining :'+ count);
  //     }
  //      if (count===0){
  //               clearInterval(countdown);
  //               $('#timer').html("Time's up");
                   
  //     }
  // },1000);

   
    
    
    



  //  while (i < queArray.length) {
     
     
  //   $('#Q-div').append('<h2>'+queArray[i].qes+'</h2>'+
  //   '<h4>'+queArray[i].ans[0]+'</h4>'+
  //   '<h4>'+queArray[i].ans[1]+'</h4>'+
  //   '<h4>'+queArray[i].ans[2]+'</h4>'+
  //   '<h4>'+queArray[i].ans[3]+'</h4>');
  

  // };





