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
