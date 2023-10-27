import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  questions: any[] = [
    {
      text: 'Abandoned vehicles may...',
      options: ['A. Not removed by anyone', 'B. Be removed and impounded by traffic officer', 'C. Be removed by passers by who feels that it is likely to be a cause of danger'],
      correctAnswer: 'B. Be removed and impounded by traffic officer',
      selectedAnswer: '',
    },
    {
      text: 'Sign A6 tells you that...',
      image: 'assets/a66.jpg',
      options: ['A. To yield to pedestrians.', 'B. To yield at a mini-circle', 'C. To yield at some intersections and give away to traffic on the road that you are approaching.'],
      correctAnswer: 'A. To yield to pedestrians.',
      selectedAnswer: '',
    },
    {
      text: 'Sign M9 warns you that...',
      image: 'assets/image2.jpg',
      options: ['A. There is a sharp junction ahead.', 'B. There are power pylons ahead.', 'C. That the dual roadway you are travelling on comes to an end ahead.'],
      correctAnswer: 'C. Warning',
      selectedAnswer: '',
    },
    {
      text: 'You are allowed to unfasten your seatbelts when reversing. This statement is...',
      options: ['A. False', 'B. true only in certain situations.', 'C. True'],
      correctAnswer: 'C. True',
      selectedAnswer: '',
    },
    {
      text: 'Signs P4 warns that...',
      image: 'assets/p4.jpg',
      options: ['A. There may animals suddenly accross the road', 'B. No hunting is allowed in this area', 'C. There is a guest ahead'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Which of the following actions is compulsory?',
      options: ['A. Set the handbrake before leaving the vehicle unattended.', 'B. Switch on the headlamps on at 17:30 in winter.', 'C. Give right of way to eldery drivers'],
      correctAnswer: 'A. Set the handbrake before leaving the vehicle unattended.',
      selectedAnswer: '',
    },
    {
      text: 'Signs S5 warns that...',
      image: 'assets/s5.jpg',
      options: ['A. There is a river ahead.', 'B. There is a drift ahead which may contain water debris.', 'C. There is a weigh bridge ahead'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'You may park...',
      options: ['A. On a two way road that is narrower than 5.5 meters in an urban area.', 'B. On a traffic island', 'C. 10 meters away from an intersection'],
      correctAnswer: 'C. 10 meters away from an intersection',
      selectedAnswer: '',
    },
    {
      text: 'The road marking Y8 shows that...',
      image: 'assets/y8.jpg',
      options: ['A. You are allowed to park there for one hour', 'B. You must keep this area clear at all times.', 'C. Buses are allowed to stop here.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Your vehicle breaks down on a freeway. What must you do?',
      options: ['A. Put your hazards lights on.', 'B. Get your vehicle as far off the road as possible.', 'C. Both of the above.'],
      correctAnswer: 'C. Both of the above.',
      selectedAnswer: '',
    },
    {
      text: 'When you see the road marking Y4 on the road you must...',
      image: 'assets/y4.jpg',
      options: ['A. Drive on the painted island to allow others to pass.', 'B. Not drive or stop on the painted island.', 'C. Only overtake in this area.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'The seat belts have been removed from your vehicle, which rule is applicable here?',
      options: ['A. The vehicle may be used on a public road until you get them replaced.', 'B. The rules do not apply for vehicles older than 2 years.', 'C. The vehicle may not be used on a public road.'],
      correctAnswer: 'C. The vehicle may not be used on a public road.',
      selectedAnswer: '',
    },
    {
      text: 'Signs O3 warns you that...',
      image: 'assets/o3.jpg',
      options: ['A. There is a T-Junction ahead.', 'B. There are concealed driveways on the left and the right.', 'C. There are curves ahead.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'What must you do at the entrance of the tunnel?',
      options: ['A. Switch on your headlamps and proceed through the tunnel with your bright beam.', 'B. switch on your headlamps and dip the beam.', 'C. Switch on your parking lamps.'],
      correctAnswer: 'B. switch on your headlamps and dip the beam.',
      selectedAnswer: '',
    },
    {
      text: 'Road marking Y3 shows you that...',
      image: 'assets/y3.jpg',
      options: ['A. A dual roadway begins.', 'B. You may not stop in this area.', 'C. You may not cross or overtake in this area.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'You are approaching traffic lights. The red light is flashing, this means that you must...',
      options: ['A. Slow down', 'B. Proceed with caution.', 'C. Stop as for a four way stop and yield to pedestians.'],
      correctAnswer: 'C. Stop as for a four way stop and yield to pedestians.',
      selectedAnswer: '',
    },
    {
      text: 'Signs B3 commands that...',
      image: 'assets/b3.jpg',
      options: ['A. You may overtake on the left on this area.', 'B. You must drive in the direction of the sign indicated by the arrow.', 'C. You must drive to the direction of this sign.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'You are approaching the pedestrian crossing. How must you react?',
      options: ['A. Give way to pedestrians who are crossing.', 'B. You do not have to give way to pedestrians who are waiting to cross.', 'C. Slow down and hoot.'],
      correctAnswer: 'A. Give way to pedestrians who are crossing.',
      selectedAnswer: '',
    },
    {
      text: 'Signs E2 prohibits you from...',
      image: 'assets/image1.jpg',
      options: ['A. Picking up hitch-hikers for the next two kilometres.', 'B. Overtaking for the next 100 meters.', 'C. Stopping to pick up hitch-hikers for 500 meters beyond the sign.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Which one of the following explanations is correct as far as the 2 second rule for the following of a vehicle is concerned.',
      options: ['A. Wait until the back of a vehicle in front of you passes a fixed point alongside the road. Slowly count to 10. If the front of the vehicle has not passed that point before you have finished counting you are following as a safe distance.', 'B. Wait until the back of a vehicle passes a fixed point alongside the road. Then count "1001, 1002". If the front of the vehicle has not passed that point before you have finished counting you are following at a safe distance.', 'C. Wait until the back of a vehicle in front of you passes a fixed point alongside the road. Count to two, if the front of your vehicle has not passed that point before you have finished counting you are at a safe distance.'],
      correctAnswer: 'B. Wait until the back of a vehicle passes a fixed point alongside the road. Then count "1001, 1002". If the front of the vehicle has not passed that point before you have finished counting you are following at a safe distance.',
      selectedAnswer: '',
    },
    {
      text: 'The chevron T8 with the arrows pointing outwards shows..',
      image: 'assets/image1.jpg',
      options: ['A. That there in boom barricade.', 'B. That the road is closed at this point.', 'C. The position of the adjoining road at the T-junction.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'What is the stopping distance behind another vehicle?',
      options: ['A. 4 meters or one vehicle length', 'B. 2 meters.', 'C. 1.5 meters.'],
      correctAnswer: 'A. 4 meters or one vehicle length',
      selectedAnswer: '',
    },
    {
      text: 'The diagrammatic sign W5 indicates...',
      image: 'assets/image1.jpg',
      options: ['A. The converging of a traffic lane.', 'B. The right lane splits.', 'C. There is an additional lane.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Signs E8 indicates that...',
      image: 'assets/e8.jpg',
      options: ['A. You may not turn right.', 'B. You may not make a U turn for the 500 meters.', 'C. You may not make a U turn where the sign is displayed.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'When you are towing another vehicle, the maximum distance that the two vehicles may be parked...',
      options: ['A. 2 meters.', 'B. 5 meters.', 'C. 3.5 meters.'],
      correctAnswer: 'B. 5 meters.',
      selectedAnswer: '',
    },
    {
      text: 'Which sign means that you must pay toll fees?',
      image: 'assets/tollfee.jpg',
      options: ['A. C4', 'B. D4', 'C. E3'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Which of the following statements is correct?',
      options: ['A. Hand signals may not be used on freeways, except in emergencies.', 'B. Hand signals may be used by mototcylists.', 'C. Hand signals are used by tractor drivers only.'],
      correctAnswer: 'B. Hand signals may be used by mototcylists.',
      selectedAnswer: '',
    },
    {
      text: 'You may drive on the shoulder of the road, left of the yellow edge line under certain circumstances. Which statement is wrong?',
      options: ['A. On a single lane roadway between sunrise and sunset to allow vehicles to overtake.', 'B. If it is safe to do so and visibility is good for 150 meters.', 'C. If it safe to do so and visibilty is good for 50 meters.'],
      correctAnswer: 'A. On a single lane roadway between sunrise and sunset to allow vehicles to overtake.',
      selectedAnswer: '',
    },
    {
      text: 'Arrow B in sketch book sketch 5 shows you that...',
      image: 'assets/arrowB.jpg',
      options: ['A. Must proceed straight on or proceed left.', 'B. May only proceed straight on.', 'C. may only turn left.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Both hands must be on the steering wheel at all times as far as possible. What is the correct position of your hands on the steering wheel driving?',
      options: ['A. The 12 Oclock position', 'B. Hands should either be quarter to three or the ten to two posotion.', 'C. Hands should be half past six position.'],
      correctAnswer: 'B. Hands should either be quarter to three or the ten to two posotion.',
      selectedAnswer: '',
    },
    {
      text: 'In the sketch 8 under what position are you allowed to drive to the left of the yellow line RM4.1',
      image: 'assets/rm41.jpg',
      options: ['A. If the faster cars behind you want to pass.', 'B. When you want to drive slower than 100km/h.', 'C. If your tyre is flat and you need to change.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Which of the following actions is permissible?',
      options: ['A. A passenger may steer the vehicle.', 'B. A baby may travel on a babys lap', 'C. None of the above.'],
      correctAnswer: 'C. None of the above.',
      selectedAnswer: '',
    },
    {
      text: 'what does the road marking GM1 in sketch 9 tell you?',
      image: 'assets/gm1.jpg',
      options: ['A. That these lines are found on freeways.', 'B. That these are the lane lines for all road users.', 'C. That you may not cross when you see these lines.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Road marking (a) in the sketch 6 tells you that...',
      image: 'assets/sketch6A.jpg',
      options: ['A. You may not stop next to this line.', 'B. Only ambulances amy stop here.', 'C. This lane is for dangerous goods vehicles only.'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'what is the maximum distance that goods may project to the rear of the vehicle?',
      options: ['A. 1.5 meters', 'B. 1.8 meters', 'C. 2 meters'],
      correctAnswer: 'B. 1.8 meters',
      selectedAnswer: '',
    },
    {
      text: 'Which of the following signs indicate that a goods vehicle may not overtake another goods vehicle for the next 500 meters?',
      image: 'assets/image1.jpg',
      options: ['A. H4', 'B. E10', 'C. E9'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'The distance it takes for a heavy vehicle to stop, is...',
      options: ['A. Longer if the vehicle is heavily loaded.', 'B. Shorter on a wet road than on dry road.', 'C. None of the above.'],
      correctAnswer: 'A. Longer if the vehicle is heavily loaded.',
      selectedAnswer: '',
    },
    {
      text: 'Sign ___ shows that if the length of a vehicle exceeds the indicated length it may not proceed beyond a certain point.',
      image: 'assets/image1.jpg',
      options: ['A. D8', 'B. D9', 'C. D10'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'What are the rules for carrying passengers in a drawn vehicle?',
      options: ['A. The drawn vehicle must be a semi-trailer.', 'B. The vehicle must not exceed a speed of 40km/h.', 'C. The drawn vehicle must be a trailer.'],
      correctAnswer: 'B. The vehicle must not exceed a speed of 40km/h.',
      selectedAnswer: '',
    },
    {
      text: 'Signs ___ shows that vehicles carrying dangerous goods are prohibited from using a road.',
      image: 'assets/image1.jpg',
      options: ['A. G1', 'B. G2', 'C. D1'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'The furthest you may reverse your vehicle is...',
      options: ['A. 150 meters', 'B. 180 meters', 'C. As far as it is safe to do so.'],
      correctAnswer: 'C. As far as it is safe to do so.',
      selectedAnswer: '',
    },
    {
      text: 'Signs ___ indicates that delivery vehicles are prohibited beyond the sign during the two periods indicated on the sign.',
      image: 'assets/image1.jpg',
      options: ['A. K8', 'B. K3', 'C. K4'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Sketch 3. Which number must you use if you want to check if there are vehicles approaching from behind or from sides?',
      image: 'assets/image1.jpg',
      options: ['A. 1 and 3', 'B. 2 and 4', 'C. 4 and 6'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Which controls prevent your parked vehicle from moving? Refer to sketch 3.',
      image: 'assets/image1.jpg',
      options: ['A. 7', 'B. 8', 'C. 9'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    {
      text: 'Which controls must you use when you make a sharp turn? Refer to sketch 3',
      image: 'assets/controls.jpg',
      options: ['A. 3,4,6,9 and 10', 'B. 1,3,4,6,8 and 9', 'C. 1,3,5,6 and 8'],
      correctAnswer: 'C. Do not enter',
      selectedAnswer: '',
    },
    
    // Add more questions...
  ];
  

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
