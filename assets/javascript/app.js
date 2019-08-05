$(document).ready(function () {
    

    var win = 0;
    var lost = 0;
    var skiped = 0;
    var count = 15;
    var timeInterval;
    var currentQues = 0;
    var queAnswered = false; 
    var correctAnswer;


    var queArray = [
    {
        question: "This is a Tropical Fruit ?",
        answer: ['STRAWBERRY','PINEAPPLE','APPLE','PEAR'],
        correctAnswer: "1",
        image: ("assets/images/pin.jpg")
    }, 
    {
        question: "This is not a Bird",
        answer: ['DUCK','OWL','BAT','PARROT'],
        correctAnswer: "2",
        image: ("assets//images/bat.jpg")
    },
    {
        question: "This is the Biggest Country In the World",
        answer: ['USA','CHINA','Germany','Russia'],
        correctAnswer: "3",
        image: ("assets//images/russia.jpg")
    }, 
    {
        question: "In a standard pack of cards, which king is the only one to not have a moustache?",
        answer: ["KING OF SPADES", "KING OF CLUBS", "KINGS OF HEARTS", "KING OF DIAMONDS"],
        correctAnswer: "2",
        image: ("assets//images/king.jpg")
    }, 
    {
        question: "Which month is Black History Month in USA? ",
        answer: ["JANUARY", "FEBRUARY", "OCTOBER", "NOVEMBER"],
        correctAnswer: "1",
        image: ("assets/images/feb.jpg")
    }, 
    {
        question: "What is the currency of India and Sri Lanka as well as a few other Asian countries?",
        answer: ["DINAR", "RUPEE", "RUBLE", "KAWANZA"],
        correctAnswer: "1",
        image: ("assets//images/rupee.jpg")
    }, 
    {
        question: "The female of what animal is known as a vixen?",
        answer: ["ELEPHANT", "FOX", "DUCK", "DEER"],
        correctAnswer: "3",
        image: ("assets//images/deer.jpg")
    }, 
    {
        question: "Which country features a maple leaf on its flag?",
        answer: ["MEXICO", "AUSTRALIA", "CANADA", "CHINA"],
        correctAnswer: "2",
        image: ("assets//images/canada.png")
    }];




    function gameStart() {
        console.log("hi");
        $('#start').remove();
        $('#text').remove();
        win = 0;
        lost = 0;
        skiped = 0;
        quesDisplay();
    }

    function quesDisplay() {
        queAnswered = false; 
        count = 15;
        timeInterval = setInterval(countDown, 1000);

        if (queAnswered === false) {
            countDown();
        }
        correctAnswer = queArray[currentQues].correctAnswer;
        var question = queArray[currentQues].question;
        $('#Q-display').html(question);

        for (var i = 0; i < 4; i++) {
            var answer = queArray[currentQues].answer[i];
            $('#A-display').append('<h4 class= choises id=' + i + '>' + answer + '</h4>');
        }

        $("h4").click(function () {
            console.log('h5 working')
            var id = $(this).attr('id');

            if (id === correctAnswer) {
                queAnswered = true;
                $('#Q-display').text("YES!!, THE CORRET ANSWER IS : " + queArray[currentQues].answer[correctAnswer]);
                correct();
            } 
            
            else {
                queAnswered = true;
                $('#Q-display').text("SORRY!!, YOUR ANSWER IS INCORRECT :" + queArray[currentQues].answer[id]  +","+" THE CORRECT ANSWER IS :" + queArray[currentQues].answer[correctAnswer]);
                incorrect();
            }
        });
    }

    function countDown() {
        
        if (count === 0) {
            queAnswered = true;
            clearInterval(timeInterval);
            $('#Q-display').text("THE CORRECT ANSWER IS: " + queArray[currentQues].answer[correctAnswer]);
            unAnswered();
         } 
         
         else if (queAnswered === true) {
            clearInterval(timeInterval);
        } 
        
        else {
            count--;
            $('#timer').text('Time Remaining   : ' + count );
        }
    }

    function correct() {
        win++;
        $('#timer').text("WELDONE!! THAT'S CORRECT!!")
        gameReset();
    }

    function incorrect() {
        lost++;
        $('#timer').text("THAT'S INCORRECT!!")
       gameReset();

    }

    function unAnswered() {
        skiped++;
        $('#timer').text("Times up!!")
       gameReset();
    }

    function gameReset() {
        $('.choises').remove();
        $('#A-display').append('<img class=images width="280" height="220" src="' + queArray[currentQues].image + ' ">'); // adds answer image
        currentQues++; 

        if (currentQues < queArray.length) {
            setTimeout(function () {
                quesDisplay();
                $('.images').remove();
            }, 5000);  
        } 
        else {
            setTimeout(function () {
                
                $('#Q-display').remove();
                $('#timer').remove();
                $('.images').remove();
                $('#A-display').append('<h4 class= choises end>CORRECT ANSWERS: ' + win + '</h4>');
                $('#A-display').append('<h4 class= choises end>INCORRECT ANSWERS: ' + lost + '</h4>');
                $('#A-display').append('<h4 class= choises end>UNANSWERED QUESTIONS: ' + skiped + '</h4>');
                
                setTimeout(function () {
                    location.reload();
                }, 7000);
            }, 5000);
        }
    };

    $('#start').on("click", function () {
             gameStart();

    });

});