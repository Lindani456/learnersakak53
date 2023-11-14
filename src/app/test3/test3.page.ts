import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.page.html',
  styleUrls: ['./test3.page.scss'],
})
export class Test3Page implements OnInit {
  questions: any[] = [
    {
      text: "Abandoned vehicles may...",
      options: [
        "A. Not removed by anyone",
        "B. Be removed and impounded by traffic officer",
        "C. Be removed by passers by who feels that it is likely to be a cause of danger"
      ],
      correctAnswer: "B. Be removed and impounded by traffic officer",
      selectedAnswer: ""
    },
    {
      text: "What is the minimum age that is required to obtain a learners license for a light motor vehicle, the mass of which does not exceed 3500kg, and what period of time is the license valid?",
      options: [
        "A. 18yrs, 18 months",
        "B. 17yrs, 24 months",
        "C. 18yrs, 24 months"
      ],
      correctAnswer: "B. 17yrs, 24 months",
      selectedAnswer: ""
    },
    {
      text: "Sign A8 tell you that...",
      img: "",
      options: [
        "A. You may proceed carefully.",
        "B. No delivery may enter.",
        "C. No vehicle may proceed pass this sign."
      ],
      correctAnswer: "A. You may proceed carefully.",
      selectedAnswer: ""
    },
    {
      text: "People are herding animals on a public road they must...",
      options: [
        "A. Carry the red flag during the day.",
        "B. Carry a red flag at night.",
        "C. These must be displayed 150 meters behind the herd."
      ],
      correctAnswer: "B. Carry a red flag at night.",
      selectedAnswer: ""
    },
    {
      text: "Sign D5 tell you that...",
      img: "",
      options: [
        "A. You must switch on the head lamps (Dipped beam until visibility improves).",
        "B. You must dip your head lamps.",
        "C. You must switch off your head lamps."
      ],
      correctAnswer: "A. You must switch on the head lamps (Dipped beam until visibility improves).",
      selectedAnswer: ""
    },
    {
      text: "What is the function of guidance and information sign?",
      options: [
        "A. They control function and direct traffic flow.",
        "B. They warn potential hazard.",
        "C. They serve as navigational aids."
      ],
      correctAnswer: "C. They serve as navigational aids.",
      selectedAnswer: ""
    },
    {
      text: "Sign E7 prohibits you from...",
      img: "",
      options: [
        "A. Turning left at this point.",
        "B. Making a U-turn.",
        "C. Turning right at this point."
      ],
      correctAnswer: "B. Making a U-turn.",
      selectedAnswer: ""
    },
    {
      text: "You are allowed to drive over the dividing space or barrier on dividing roads. In the following conditions:",
      options: [
        "A. At the intersection or opening where it is not prohibited by a road sign or a traffic officer.",
        "B. If there is no vehicle driving next to you.",
        "C. If there is no oncoming traffic."
      ],
      correctAnswer: "A. At the intersection or opening where it is not prohibited by a road sign or a traffic officer.",
      selectedAnswer: ""
    },
    {
      text: "Sign N6 warns you that...",
      img: "",
      options: [
        "A. There is detours.",
        "B. There is a winding road ahead with curves.",
        "C. The road is a slippery service ahead."
      ],
      correctAnswer: "B. There is a winding road ahead with curves.",
      selectedAnswer: ""
    },
    {
      text: "You have been involved in an incident but you have not been injured. Are you allowed to refuse to give blood or breathe specimen?",
      options: [
        "A. Yes, but you will need to explain the reason for your refusal.",
        "B. Yes, and you will not be penalized for doing so.",
        "C. No, you are obliged to provide a blood or breathe sample if requested by the police."
      ],
      correctAnswer: "A. Yes, but you"
    },
    {
      text: "Sign Q3 warns that...",
      img: "",
      options: [
        "A. There is possibility of slow moving vehicles ahead.",
        "B. There is a gravel road ahead.",
        "C. There is a road works ahead."
      ],
      correctAnswer: "B. There is a gravel road ahead.",
      selectedAnswer: ""
    },
    {
      text: "Which statement is not correct?",
      options: [
        "A. You may not stop in a tunnel.",
        "B. A hooter may not be used to greet your friends.",
        "C. On freeways, the speed limit for a light motor vehicle is 120km/h."
      ],
      correctAnswer: "C. On freeways, the speed limit for a light motor vehicle is 120km/h.",
      selectedAnswer: ""
    },
    {
      text: "Sign R1 warns that...",
      img: "",
      options: [
        "A. There is a dangerous curve ahead.",
        "B. There is a reduced visibility ahead.",
        "C. There is a slippery road ahead especially in wet weather."
      ],
      correctAnswer: "A. There is a dangerous curve ahead.",
      selectedAnswer: ""
    },
    {
      text: "You are driving on a public road and a cellular phone rings. What must you do?",
      img: "",
      options: [
        "A. Answer the call if you feel it is safe to do so.",
        "B. Pulls off the road where it is safe and allowed and answers your call.",
        "C. Answers your call and asks the person to call later."
      ],
      correctAnswer: "B. Pulls off the road where it is safe and allowed and answers your call.",
      selectedAnswer: ""
    },
    {
      text: "The hazard marking Sign T1 shows that...",
      img: "",
      options: [
        "A. The hazard and the danger plate indicate that you must pass the hazard on the side to which the white stripes point.",
        "B. There is sharp bends to the left.",
        "C. There is a ditch next to the road."
      ],
      correctAnswer: "A. The hazard and the danger plate indicate that you must pass the hazard on the side to which the white stripes point.",
      selectedAnswer: ""
    },
    {
      text: "Is it advisable to drive with the left foot on your clutch pedal?",
      options: [
        "A. Yes, because it will enable you to achieve a smooth movement.",
        "B. Yes, because it will give you a place to rest your foot.",
        "C. No, because it could cause unnecessary wear/garb on your clutch"],
        correctAnswer: "A. The hazard and the danger plate indicate that you must pass the hazard on the side to which the white stripes point.",
        selectedAnswer: ""
      },
      {
        text: "What is the meaning of Sign DD5?",
        img: "https://drivingschool.co.za/images/traffic_signs/dd5.jpg",
        options: [
          "A. It warns of a dead end to the right.",
          "B. It shows an entrance to a shopping area.",
          "C. It warns of a dead end to the left."
        ],
        correctAnswer: "C. It warns of a dead end to the left.",
        selectedAnswer: ""
      },
      {
        text: "What is the speed limit for buses and mini buses conveying passengers outside urban area?",
        img: "",
        options: [
          "A. 100km/h",
          "B. 120km/h",
          "C. 80km/h"
        ],
        correctAnswer: "B. 120km/h",
        selectedAnswer: ""
      },
      {
        text: "Sign B10 indicates that...",
        img: "https://drivingschool.co.za/images/traffic_signs/b10.jpg",
        options: [
          "A. Only motorcycles may drive there.",
          "B. Only pedal cycles may drive there.",
          "C. Drivers must be aware of cyclists."
        ],
        correctAnswer: "C. Drivers must be aware of cyclists.",
        selectedAnswer: ""
      },
      {
        text: "You may missed the next exit on freeway. What must you do?",
        img: "https://drivingschool.co.za/images/traffic_signs/c21.jpg",
        options: [
          "A. Parking in this area for longer than 13 hours.",
          "B. Motor cars from driving on this road.",
          "C. Motor cars from stopping in this area."
        ],
        correctAnswer: "B. Motor cars from driving on this road.",
        selectedAnswer: ""
      },
      ///
      {
        text: "The blind spot...",
        options: [
            "A. Is the area behind the advertisement board.",
            "B. Is the area that you cannot see on your mirror.",
            "C. Is the area on your windscreen where your license disc is affixed."
        ],
        correctAnswer: "B. Is the area that you cannot see on your mirror.",
        selectedAnswer: ""
    },
    {
        text: "Sign G5 forbids...",
        img: "img",  // Replace with the actual image path
        options: [
            "A. Tractors to use this road.",
            "B. Any animals on this road.",
            "C. Animals drawn vehicles to use this road."
        ],
        correctAnswer: "C. Animals drawn vehicles to use this road.",
        selectedAnswer: ""
    },
    {
        text: "Your hooter must be audible for at least",
        options: [
            "A. 90 meters",
            "B. 100 meters",
            "C. 80 meters"
        ],
        correctAnswer: "A. 90 meters",
        selectedAnswer: ""
    },

    /////////
    {
      text: "The blind spot...",
      options: [
          "A. Is the area behind the advertisement board.",
          "B. Is the area that you cannot see on your mirror.",
          "C. Is the area on your windscreen where your license disc is affixed."
      ],
      correctAnswer: "B. Is the area that you cannot see on your mirror.",
      selectedAnswer: ""
  },
  {
      text: "Sign G5 forbids...",
      img: "img1.jpg",  // Replace with the actual image path
      options: [
          "A. Tractors to use this road.",
          "B. Any animals on this road.",
          "C. Animals drawn vehicles to use this road."
      ],
      correctAnswer: "C. Animals drawn vehicles to use this road.",
      selectedAnswer: ""
  },
  {
      text: "Your hooter must be audible for at least",
      options: [
          "A. 90 meters",
          "B. 100 meters",
          "C. 80 meters"
      ],
      correctAnswer: "A. 90 meters",
      selectedAnswer: ""
  },
  {
      text: "Sign Q8 warns you that...",
      img: "img2.jpg",  // Replace with the actual image path
      options: [
          "A. The road narrows from the right-hand side.",
          "B. The freeway ends here.",
          "C. The road narrows from both sides."
      ],
      correctAnswer: "A. The road narrows from the right-hand side.",
      selectedAnswer: ""
  },
  {
      text: "Which one of the following statements is correct?",
      options: [
          "A. You must keep driving license at home in a safe place.",
          "B. You must have your driving license with you when driving.",
          "C. You must ask your supervisor to lock it safe at work for safekeeping."
      ],
      correctAnswer: "B. You must have your driving license with you when driving.",
      selectedAnswer: ""
  },
  {
      text: "Sign J8 prohibits you from driving...",
      img: "img3.jpg",  // Replace with the actual image path
      options: [
          "A. Too fast because it is heavy mist.",
          "B. Faster than 100km/h at night.",
          "C. Slower than 100km/h"
      ],
      correctAnswer: "C. Slower than 100km/h",
      selectedAnswer: ""
  },
  {
      text: "Generally, guidance and information have a green or brown background. What colour background does this board have for freeways?",
      options: [
          "A. Blue",
          "B. Red",
          "C. Yellow"
      ],
      correctAnswer: "C. Yellow",
      selectedAnswer: ""
  },
  {
      text: "Which one of the following signs indicates that you must give right of way to other traffic?",
      img: "img4.jpg",  // Replace with the actual image path
      options: [
          "A. A5",
          "B. CC9",
          "C. B6"
      ],
      correctAnswer: "B. CC9",
      selectedAnswer: ""
  },
  {
      text: "A zigzag zone indicates an area where...",
      options: [
          "A. You may pass other vehicle.",
          "B. Buses may park.",
          "C. You may not stop except for pedestrians."
      ],
      correctAnswer: "C. You may not stop except for pedestrians.",
      selectedAnswer: ""
  },
  {
      text: "Which of the following signs specifically show that the parking is exclusively for buses?",
      img: "img5.jpg",  // Replace with the actual image path
      options: [
          "A. BB2",
          "B. BB10",
          "C. BB8"
      ],
      correctAnswer: "A. BB2",
      selectedAnswer: ""
  },
  {
      text: "Which rules must be adhered to when towing a vehicle?",
      options: [
          "SELECT THE CORRECT COMBINATION",
          "(a) the two vehicles must not be more than 5 meters apart.",
          "(b) the tow rope must be securely attached.",
          "(c) the towed vehicle must have efficient brakes.",
          "(a) don't exceed 50km/h.",
          "(b) the two vehicles must be more than 4 meters apart.",
          "(c) no passengers are allowed in a towed vehicle.",
          "(a) the person controlling the towed vehicle must have a valid license for the same class of vehicle being towed.",
          "(b) the towed vehicle must have efficient brakes.",
          "(c) the two vehicles not be more than 3.5 meters apart."
      ],
      correctAnswer: "C. (a) the person controlling the towed vehicle must have a valid license for the same class of vehicle being towed. (b) the towed vehicle must have efficient brakes. (c) the two vehicles must not be more than 3.5 meters apart.",
      selectedAnswer: ""
  },
  {
      text: "Which of the following warning signs indicates that there are low flying aircraft ahead?",
      img: "img6.jpg",  // Replace with the actual image path
      options: [
          "A. S6",
          "B. S4",
          "C. D4"
      ],
      correctAnswer: "A. S6",
      selectedAnswer: ""
  },
  {
      text: "A load may not project more than to the rear of the vehicle.",
      options: [
          "A. 1 meter",
          "B. 1.8 meters",
          "C. 1.4 meters"
      ],
      correctAnswer: "B. 1.8 meters",
      selectedAnswer: ""
  },
  {
      text: "Arrow D in the sketch booklet sketch 5, shows you that...",
      img: "img7.jpg",  // Replace with the actual image path
      options: [
          "A. Must turn right.",
          "B. Must proceed straight or turn right.",
          "C. Must turn left."
      ],
      correctAnswer: "C. Must turn left.",
      selectedAnswer: ""
  },
  {
      text: "What is the last action before changing lanes?",
      options: [
          "A. Flash your lights.",
          "B. Sound your hooter.",
          "C. Check your blind spot to ensure that it is still safe to change lanes."
      ],
      correctAnswer: "C. Check your blind spot to ensure that it is still safe to change lanes.",
      selectedAnswer: ""
  },
  {
      text: "Road marking RTM3 in sketch 8 tells you that...",
      img: "img8.jpg",  // Replace with the actual image path
      options: [
          "A. These lines divide traffic.",
          "B. There are lines for pedestrians to cross at.",
          "C. These are the stop lines for an intersection."
      ],
      correctAnswer: "A. These lines divide traffic.",
      selectedAnswer: ""
  },
  {
      text: "If your vehicle driver's seatbelt is broken, may you use the vehicle on a public road?",
      options: [
          "A. No",
          "B. Yes",
          "C. Yes, only if you have a letter from a garage."
      ],
      correctAnswer: "A. No",
      selectedAnswer: ""
  },
  {
      text: "What does the road marking RM5 in sketch 8 tell you?",
      options: [
          "A. That it is a parking zone.",
          "B. That you may stop there.",
          "C. That it is a painted traffic island and that you may not ride there."
      ],
      correctAnswer: "B. That you may stop there.",
      selectedAnswer: ""
  },
  {
      text: "What is the rule concerning emergency and construction vehicles as far as parking is concerned?",
      options: [
          "A. They may not park in a no stopping area.",
          "B. They may not park 5 meters to an urban area.",
          "C. They may park anywhere while on official business, but they must display necessary identification lamps."
      ],
      correctAnswer: "C. They may park anywhere while on official business, but they must display necessary identification lamps.",
      selectedAnswer: ""
  },
  {
      text: "On sketch 4 road marking RTM1 means that...",
      options: [
          "A. Vehicle A must treat this as a yield sign.",
          "B. Vehicle B is allowed to pass vehicle A if the intersection is clear.",
          "C. Vehicle A must stop before the line RTM1."
      ],
      correctAnswer: "C. Vehicle A must stop before the line RTM1.",
      selectedAnswer: ""
  },
  {
      text: "What does a flashing red light at a traffic light tell you?",
      options: [
          "A. To watch out for pedestrians.",
          "B. That there was an accident.",
          "C. That you should treat this intersection as a four-way stop."
      ],
      correctAnswer: "C. That you should treat this intersection as a four-way stop.",
      selectedAnswer: ""
  },
  {
      text: "Look at sketch 6 in the booklet. When you see marking A, you know that you...",
      img: "img9.jpg",  // Replace with the actual image path
      options: [
          "A. May not stop there at all times.",
          "B. May not stop there at night.",
          "C. May only stop there over the weekends."
      ],
      correctAnswer: "A. May not stop there at all times.",
      selectedAnswer: ""
  },
  {
      text: "The distance it takes a heavy motor vehicle to stop is...",
      options: [
          "A. Longer if the vehicle is heavily loaded.",
          "B. Longer on a wet road than a dry road.",
          "C. Both of the above."
      ],
      correctAnswer: "C. Both of the above.",
      selectedAnswer: ""
  },
  {
      text: "Which of the following signs prohibits goods over the indicated GVM?",
      img: "img10.jpg",  // Replace with the actual image path
      options: [
          "A. F10",
          "B. C9",
          "C. P10"
      ],
      correctAnswer: "A. F10",
      selectedAnswer: ""
  },
  {
      text: "What is the speed limit unless indicated by a regulator sign for vehicles/combination of vehicles with GVM/GLM over 9000kg on freeways?",
      options: [
          "A. 100km/h",
          "B. 90km/h",
          "C. 80km/h"
      ],
      correctAnswer: "C. 80km/h",
      selectedAnswer: ""
  },
  {
      text: "Sign ____ shows that only goods vehicles are allowed in this area.",
      img: "img11.jpg",  // Replace with the actual image path
      options: [
          "A. C8",
          "B. F9",
          "C. C5"
      ],
      correctAnswer: "A. C8",
      selectedAnswer: ""
  },
  {
      text: "The furthest you may reverse your vehicle is...",
      options: [
          "A. 30 meters.",
          "B. As far as it is safe to do so.",
          "C. 300 meters."
      ],
      correctAnswer: "B. As far as it is safe to do so.",
      selectedAnswer: ""
  },
  {
      text: "Sign _____ shows that a vehicle higher than the indicated height may not proceed beyond a certain point.",
      img: "img12.jpg",  // Replace with the actual image path
      options: [
          "A. D8",
          "B. D9",
          "C. D10"
      ],
      correctAnswer: "A. D8",
      selectedAnswer: ""
  },
  {
      text: "A learner driver of a heavy motor vehicle...",
      options: [
          "A. Must have someone with him/her who has a driving license of the same code and permit.",
          "B. May not carry passengers while driving.",
          "C. Is not allowed to drive on a freeway."
      ],
      correctAnswer: "A. Must have someone with him/her who has a driving license of the same code and permit.",
      selectedAnswer: ""
  },
  {
      text: "A warning sign's color codes are...",
      options: [
          "A. Yellow and blue triangle",
          "B. Blue and white disc",
          "C. A black symbol with a white background with a red border (triangular)"
      ],
      correctAnswer: "C. A black symbol with a white background with a red border (triangular)",
      selectedAnswer: ""
  },
  {
      text: "Sketch 3. To make your vehicle move faster you must use number?",
      img: "img13.jpg",  // Replace with the actual image path
      options: [
          "A. 7",
          "B. 8",
          "C. 10"
      ],
      correctAnswer: "C. 10",
      selectedAnswer: ""
  },
  {
      text: "Which number must you use if you want to check if there are vehicles approaching from behind or from sides?",
      options: [
          "A. 1 and 3",
          "B. 2 and 4",
          "C. 4 and 5"
      ],
      correctAnswer: "B. 2 and 4",
      selectedAnswer: ""
  },
  {
      text: "To change gear you must use number...",
      options: [
          "A. 6 and 8",
          "B. 6 and 9",
          "C. 7 and 8"
      ],
      correctAnswer: "A. 6 and 8",
      selectedAnswer: ""
  },
  {
    text: "To change gear you must use number...",
    options: [
        "A. 6 and 8",
        "B. 6 and 9",
        "C. 7 and 8"
    ],
    correctAnswer: "B. 6 and 9",
    selectedAnswer: ""
},
{
    text: "You intend moving forward from parker position you must...",
    options: [
        "A. Put on your hazard lamps.",
        "B. Put on your head lamps.",
        "C. Put on your indicator to warn other road users."
    ],
    correctAnswer: "C. Put on your indicator to warn other road users.",
    selectedAnswer: ""
},
{
    text: "Which control prevents your parked vehicle from moving?",
    options: [
        "A. 9",
        "B. 6",
        "C. 7"
    ],
    correctAnswer: "C. 7",
    selectedAnswer: ""
},
{
    text: "Which control must you use when you make a sharp turn?",
    options: [
        "A. 1,3,5,6 and 9",
        "B. 1,3,4,5,6,8 and 9",
        "C. 3,4,5,8 and 10"
    ],
    correctAnswer: "B. 1,3,4,5,6,8 and 9",
    selectedAnswer: ""
},
{
    text: "To make the vehicle turn you must use number...",
    options: [
        "A. 6",
        "B. 4",
        "C. 9"
    ],
    correctAnswer: "C. 9",
    selectedAnswer: ""
},
{
    text: "To stop your vehicle you must use number...",
    options: [
        "A. 6",
        "B. 9",
        "C. 10"
    ],
    correctAnswer: "B. 9",
    selectedAnswer: ""
}
    ]
      
  


  currentQuestionIndex = 0;
  userAnswers: string[] = [];
  timeRemaining = 5400; // 90 minutes in seconds
  timer: any;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.startTimer();
  }

  selectAnswer(answer: any) {
    this.questions[this.currentQuestionIndex].selectedAnswer = answer.detail.value;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  prevQuestion() {
    this.currentQuestionIndex--;
  }

  submitTest() {
  
    // Calculate score
    const time=this.formatTime(this.timeRemaining);
    const correctAnswers = this.questions.filter(
      (q) => q.selectedAnswer === q.correctAnswer
    );
    const score = (correctAnswers.length / this.questions.length) * 100;
  
    // Prepare data to be passed as state
    const navigationExtras: NavigationExtras = {
      state: {
        score,
        time,
        correctAnswers,
        incorrectAnswers: this.questions.filter(
          (q) => q.selectedAnswer !== q.correctAnswer
        ),
        unansweredQuestions: this.questions.filter(
          (q) => q.selectedAnswer === ''
        ),
      },
    };
  
    // Navigate to the 'result' page with the specified state
    this.navCtrl.navigateForward('/result', navigationExtras);
    clearInterval(this.timer);
  }

  private startTimer() {
    this.timer = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        this.submitTest();
      }
    }, 1000);
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

}
