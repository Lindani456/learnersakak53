import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {

  questions: any[] = [
     //Q5
    {
      text: 'Sign A5 tells you...',
      image: 'assets/test2A5.jpg',
      options: ['A. To yield to mini-circle.', 'B. To yield at pedestrians ', 'C. To yield and give way to traffic on that you are crossing.'],
      correctAnswer: 'C. To yield and give way to traffic on that you are crossing.',
      selectedAnswer: '',
    },

    {
      text: 'You goods vehicle has been broken down on a public road. You must display Emergency triangle at least ___ meters behind the vehicle.',
      options: ['A. 20 meters', 'B. 30 meters', 'C. 45 meters'],
      correctAnswer: 'C. 45 meters',
      selectedAnswer: '',
    },
    {
      text: 'Sign D4 tells you that...',
      image: 'assets/test2D4.jpg',
      options: ['A. You are at the beginning of a toll road and that you must pay toll at the toll plaza.', 'B. You are approaching a tunnel.', 'C. There is a taxi stand ahead.'],
      correctAnswer: 'A. You are at the beginning of a toll road and that you must pay toll at the toll plaza.',
      selectedAnswer: '',
    },
    {
      text: 'What is the function of regulatory road sign?',
      options: ['A. They control and direct traffic flow.', 'B. They warn of potential hazards.', 'C. They serve as navigation aids.'],
      correctAnswer: 'A. They control and direct traffic flow.',
      selectedAnswer: '',
    },
    {
      text: 'Sign E8 prohibits you from...',
      image: 'assets/test2E8.jpg',
      options: ['A. Turning left at this point.', 'B. Turning a U turn at this point.', 'C. Turning right at this point.'],
      correctAnswer: 'B. Turning a U turn at this point.',
      selectedAnswer: '',
    },
    {
      text: 'The flat raised hand of a traffic official means...',
      options: ['A. Slow down.', 'B. Proceed with caution.', 'C. Stop.'],
      correctAnswer: 'C. Stop.',
      selectedAnswer: '',
    },
    {
      text: 'Sign N8 warns that...',
      image: 'assets/test2N8.jpg',
      options: ['A. There is a bumpy road ahead.', 'B. There is two way traffic ahead.', 'C. There is a cross road ahead.'],
      correctAnswer: 'B. There is two way traffic ahead.',
      selectedAnswer: '',
    },
    {
      text: 'You are a game ranger, are you allowed to have adjustable spotlight on your vehicle?',
      options: ['A. Yes', 'B. No', 'C. Yes. Only under certain conditions'],
      correctAnswer: 'B. No',
      selectedAnswer: '',
    },
    {
      text: 'Sign P8 warns that...',
      image: 'assets/test2P8.jpg',
      options: ['A. There are two lanes ahead.', 'B. There is a dual road ahead.', 'C. There is a tunnel ahead.'],
      correctAnswer: 'C. There is a tunnel ahead.',
      selectedAnswer: '',
    },
    {
      text: 'Which statement is correct?',
      options: ['A. You may straddle lane lines.', 'B. The general speed limit for a motor vehicle on a road in urban areas is 100km/h.', 'C. You may not park on a traffic island.'],
      correctAnswer: 'C. You may not park on a traffic island.',
      selectedAnswer: '',
    },
    {
      text: 'Sign Q10 warns that...',
      image: 'assets/test2Q10.jpg',
      options: ['A. There is a speed bump ahead.', 'B. There is a bumpy road ahead.', 'C. There is a mini-circle.'],
      correctAnswer: 'A. There is a speed bump ahead.',
      selectedAnswer: '',
    },
    {
      text: 'You may drive through an amber traffic light if...',
      options: ['A. There is no time for an emergency stop.', 'B. There in so other traffic at the intersection.', 'C. Your vehicle is already over the stop line.'],
      correctAnswer: 'C. Your vehicle is already over the stop line.',
      selectedAnswer: '',
    },
    {
      text: 'Sign T3 shows that...',
      image: 'assets/test2T3.jpg',
      options: ['A. You may not enter beyond the sign.', 'B. You are approaching a double boom track railway level crossing.', 'C. You are approaching a double boom gates ahead.'],
      correctAnswer: 'B. You are approaching a double boom track railway level crossing.',
      selectedAnswer: '',
    },
    {
      text: 'Will the examiner tell you to adjust your mirror while driving?',
      options: ['A. Yes because you could cause an accident.', 'B. No.', 'C. No because you are endangering other road users.'],
      correctAnswer: 'B. No.',
      selectedAnswer: '',
    },
    {
      text: 'Sign CC5...',
      image: 'assets/test2CC5.jpg',
      options: ['A. Controls the number of vehicles in the lane at a given time.', 'B. Indicates the minimum speed that is on this lane.', 'C. Controls the maximum speed that is on this lane.'],
      correctAnswer: 'C. Controls the maximum speed that is on this lane.',
      selectedAnswer: '',
    },
    {
      text: 'Which statement is false as far as the general duties of a driver is concerned? You may...',
      options: ['A. Not allow passenger to get on or off the vehicle it is moving.', 'B. Not run the engine if it is giving of excessive smoke of fumes.', 'C. Leave engine running while fuel is being pumped into the vehicle.'],
      correctAnswer: 'C. Leave engine running while fuel is being pumped into the vehicle.',
      selectedAnswer: '',
    },
    {
      text: 'Sign G10 shows that this area is reserved for...',
      image: 'assets/test2G10.jpg',
      options: ['A. Taxis', 'B. Motor vehicles', 'C. Minibuses'],
      correctAnswer: 'A. Taxis',
      selectedAnswer: '',
    },
    {
      text: 'A flashing yellow light tells you...',
      options: ['A. Proceed slowly and with caution.', 'B. To yield to any pedestrians crossing the road.', 'C. Both of the above.'],
      correctAnswer: 'C. Both of the above.',
      selectedAnswer: '',
    },
    {
      text: 'Sign A1 instruct you to...',
      image: 'assets/test2A1.jpg',
      options: ['A. Stop', 'B. Slow down', 'C. Yield'],
      correctAnswer: 'A. Stop',
      selectedAnswer: '',
    },
    {
      text: 'There are different types of hazards. Which of the following fall under Bridges, T-junctions and trees.',
      options: ['A. Moving hazards', 'B. Fixed hazards', 'C. Changing hazards'],
      correctAnswer: 'B. Fixed hazards',
      selectedAnswer: '',
    },
    {
      text: 'Sign E5 forbids you...',
      image: 'assets/test2E5.jpg',
      options: ['A. To make a U turn in this area.', 'B. To overtake on the right.', 'C. To turn right.'],
      correctAnswer: 'C. To turn right.',
      selectedAnswer: '',
    },
    {
      text: 'Under which circumstances will you not let engine run',
      options: ['A. While you are sitting in the drivers seat and talking to a friend in front of his house.', 'B. While you are waiting at a traffic light.', 'C. While you are filling up with fuel.'],
      correctAnswer: 'C. While you are filling up with fuel.',
      selectedAnswer: '',
    },
    {
      text: 'Sign P1 warns you that...',
      image: 'assets/test2P1.jpg',
      options: ['A. There is a pedestrian crossing ahead.', 'B. There are children ahead.', 'C. There is a shopping centre ahead.'],
      correctAnswer: 'B. There are children ahead.',
      selectedAnswer: '',
    },
    {
      text: 'Which of the following is correct as far as the use of cellular phones is concerned?',
      options: ['A. You may hold or operate a phone in your hand while driving if you are not endangering other road users.', 'B. You are not allowed to hold or operate a hand held cellular phone while driving.', 'C. You may not use a cellular phone in your hands while driving if you are in heavy traffic going very slow and you are late for work and you want to noify the office.'],
      correctAnswer: 'B. You are not allowed to hold or operate a hand held cellular phone while driving.',
      selectedAnswer: '',
    },
    {
      text: 'Sign R5 warns you that...',
      image: 'assets/test2R5.jpg',
      options: ['A. There are stones falling from above.', 'B. There are loose stones on the road.', 'C. There are road works ahead.'],
      correctAnswer: 'B. There are loose stones on the road.',
      selectedAnswer: '',
    },
    {
      text: 'For what distance beyond no overtaking sign are you allowed to overtake a motor vehicle travelling in the same direction',
      options: ['A. 500 meters.', 'B. 300 meters.', 'C. 800 meters.'],
      correctAnswer: 'A. 500 meters.',
      selectedAnswer: '',
    },
    {
      text: 'Which one of the following signs indicates a sharp turn to the left?',
      image: 'assets/test2STL.jpg',
      options: ['A. Sign N3', 'B. Sign B4', 'C. Sign A9'],
      correctAnswer: 'A. Sign N3',
      selectedAnswer: '',
    },
    {
      text: 'A double white line separating the two lanes of traffic moving in the same direction means that...',
      options: ['A. You may cross to access property.', 'B. No traffic may cross the traffic lines for any reasons.', 'C. You may overtake if it is safe to do so.'],
      correctAnswer: 'B. No traffic may cross the traffic lines for any reasons.',
      selectedAnswer: '',
    },
    {
      text: 'Which one of the traffic signals indicates a flashing red arrow which means that you must stop and proceed to the left if there is no crossing traffic?',
      image: 'assets/test2X.jpg',
      options: ['A. X2', 'B. X3', 'C. X6'],
      correctAnswer: 'A. X2',
      selectedAnswer: '',
    },
        ///Q35 combo
    {
      text: 'Which one of the following diagrammatic signs indicate that there is an arrestor bed lane ahead.',
      image: 'assets/test2UW.jpg',
      options: ['A. W1', 'B. U6', 'C. W9'],
      correctAnswer: 'C. W9',
      selectedAnswer: '',
    },
    {
      text: 'You are driving a light motor vehicle, who is exempt from using a seatbelt in this vehicle?',
      options: ['A. A child of ten years old sitting next to the driver.', 'B. A person who has a medical certificate and drivers who are busy reversing.', 'C. Elderly people.'],
      correctAnswer: 'B. A person who has a medical certificate and drivers who are busy reversing.',
      selectedAnswer: '',
    },
    {
      text: 'A prohibition signs colour codes are...',
      options: ['A. A yellow and white disc.', 'B. Red, white and black triangle.', 'C. A black symbol on a white disc with a red boarder.'],
      correctAnswer: 'C. A black symbol on a white disc with a red boarder.',
      selectedAnswer: '',
    },
    {
      text: 'What must you do if you missed an exit on a freeway?',
      options: ['A. Reverse to turn off.', 'B. Make a U-turn and go back.', 'C. Carry on until you are safely on the freeway by means of another exit.'],
      correctAnswer: 'C. Carry on until you are safely on the freeway by means of another exit.',
      selectedAnswer: '',
    },
    {
      text: 'Beyond which sign will you find a police road block?.',
      image: 'assets/test2RB.jpg',
      options: ['A. S1', 'B. S2', 'C. R6'],
      correctAnswer: 'B. S2',
      selectedAnswer: '',
    },
    {
      text: 'Which one of the following statement is incorrect?',
      options: ['A. You may stop and pick up hikers on the road.', 'B. You may not stop in a tunnel.', 'C. You may not park on a traffic island.'],
      correctAnswer: 'A. You may stop and pick up hikers on the road.',
      selectedAnswer: '',
    },
    {
      text: 'Which sign indicated that only motor cars park there? REFER TO SEPARATE SHEETS OF SIGNS GIVEN',
      options: ['A. I6', 'B. G10', 'C. W9'],
      correctAnswer: 'A. I6',
      selectedAnswer: '',
    },
    {
      text: 'You want to turn left at an intersection. Which procedure should be followed?',
      options: ['A. Indicate your intention; wait for crossing pedestians and keep close possible to the left side of the road.', 'B. Indicate your intention; indicate to pedestrians to wait and turn left.', 'C. Indicate your intention; cut through if other traffic is taking too long.'],
      correctAnswer: 'A. Indicate your intention; wait for crossing pedestians and keep close possible to the left side of the road.',
      selectedAnswer: '',
    },
    {
      text: 'Arrow A in Sketch booklet 5 shows you that...',
      image: 'assets/test2ArrowA.jpg',
      options: ['A. Must turn left.', 'B. Must proceed straight on or turn right.', 'C. May turn left.'],
      correctAnswer: 'A. Must turn left.',
      selectedAnswer: '',
    },
    {
      text: 'What documents should you carry in your vehicle while driving?',
      options: ['A. ID book and passport.', 'B. Driving or learners licence.', 'C. Birth certificate.'],
      correctAnswer: 'B. Driving or learners licence.',
      selectedAnswer: '',
    },
    {
      text: 'In sketch 8, under what circumstances are you allowed to drive to the yellow line RM4.1',
      image: 'assets/test2RM41.jpg',
      options: ['A. When you want to drive slower than 100km/h.', 'B. If the faster cars behind you want to pass.', 'C. If your car breaks down.'],
      correctAnswer: 'C. If your car breaks down.',
      selectedAnswer: '',
    },
    //Q47 combo
    {
      text: 'What does the road marking RM3 in sketch 9 indicate?',
      image: 'assets/test2RM3.jpg',
      options: ['A. That these are the lines for all road users.', 'B. That there are mandatory errors ahead.', 'C. That there is an intersection ahead.'],
      correctAnswer: 'A. That these are the lines for all road users.',
      selectedAnswer: '',
    },
    {
      text: 'What is the speed limit unless otherwise indicated by a regulatory sign for mini-buses conveying passengers on a freeway?',
      options: ['A. 80 km/h', 'B. 120 km/h', 'C. 100 km/h'],
      correctAnswer: 'C. 100 km/h',
      selectedAnswer: '',
    },
    {
      text: 'Look at sketch 4 in the sketch booklet. Vehicle B...',
      options: ['A. Must drive past vehicle A if there no other vehicles.', 'B. Can drive over the stop line following vehicle A if there are no oncoming vehicles.', 'C. Must stop behind vehicle A. Wait until vehicle A moved from stop sign. Make full observation and move only if it is safe to do so.'],
      correctAnswer: 'C. Must stop behind vehicle A. Wait until vehicle A moved from stop sign. Make full observation and move only if it is safe to do so',
      selectedAnswer: '',
    },
    {
      text: 'Under which conditions will you be allowed to drive a motor vehicle on a public road once you have passed your learners licence? WHICH STATEMENT IS CORRECT?',
      options: ['A. You must drive under the supervision of a person in possession of a valid driving licence for the code of vehicle to that which you intend to drive.', 'B. The person should be seated on the back side of the vehicle on the left hand side.', 'C. The person should be seated next to you or directly behind you if he/she cannot sit next to you.'],
      correctAnswer: 'A. You must drive under the supervision of a person in possession of a valid driving licence for the code of vehicle to that which you intend to drive.',
      selectedAnswer: '',
    },
    {
      text: 'Road marking B in sketch 6 tells you that...',
      image: 'assets/test2Sketch6.jpg',
      options: ['A. Only ambulance may stop there.', 'B. This lane is for dangerous goods vehicles only.', 'C. You may not stop next to the line.'],
      correctAnswer: 'C. You may not stop next to the line.',
      selectedAnswer: '',
    },
    //Q85 to 90 missing
    {
      text: 'What is the speed limit unless otherwise indicated by a regulatory sign for vehicles with a GWM/GCM over 9000kg?',
      options: ['A. 80 km/h', 'B. 120 km/h', 'C. 90 km/h'],
      correctAnswer: 'A. 80 km/h',
      selectedAnswer: '',
    },
    {
      text: 'Sign ___ indicate that these are slow moving heavy vehicle travel downhill ahead.',
      image: 'assets/test2Downhill.jpg',
      options: ['A. Q1', 'B. Q3', 'C. Q2'],
      correctAnswer: 'B. Q3',
      selectedAnswer: '',
    },
    {
      text: 'Sketch 3. Which number must you use if you want to check if there are vehicles approaching from behind or from the sides?',
      image: 'assets/test2Controls.jpg',
      options: ['A. 1 and 3', 'B. 2 and 6', 'C. 4 and 5'],
      correctAnswer: 'A. 1 and 3',
      selectedAnswer: '',
    },
    {
      text: 'To make your vehicle move faster, you must use number...',
      image: 'assets/test2Controls.jpg',
      options: ['A. 9', 'B. 6', 'C. 10'],
      correctAnswer: 'C. 10',
      selectedAnswer: '',
    },
    {
      text: 'Which control prevents your parked vehicle from moving?',
      image: 'assets/test2Controls.jpg',
      options: ['A. 7', 'B. 9', 'C. 8'],
      correctAnswer: 'A. 7',
      selectedAnswer: '',
    },
    {
      text: 'To show other vehicles that you are going to turn, use control number...',
      image: 'assets/test2Controls.jpg',
      options: ['A. 5', 'B. 4', 'C. 8'],
      correctAnswer: 'A. 5',
      selectedAnswer: '',
    },
    {
      text: 'Which controls must you use when you make a sharp turn?',
      image: 'assets/test2Controls.jpg',
      options: ['A. 3,4,9 and 10', 'B. 1,3,5,6 and 8', 'C. 1,3,4,5,6,8 and 9'],
      correctAnswer: 'C. 1,3,4,5,6,8 and 9',
      selectedAnswer: '',
    },
    {
      text: 'To make the vehicle turn you must use number...',
      image: 'assets/test2Controls.jpg',
      options: ['A. 8', 'B. 5', 'C. 4'],
      correctAnswer: 'C. 4',
      selectedAnswer: '',
    },
    {
      text: 'To change gears you must use numbers...',
      image: 'assets/test2Controls.jpg',
      options: ['A. 6 and 7', 'B. 6 and 8', 'C. 7 and 9'],
      correctAnswer: 'B. 6 and 8',
      selectedAnswer: '',
    },
    {
      text: 'To stop your vehicle you must use number...',
      image: 'assets/test2Controls.jpg',
      options: ['A. 9', 'B. 8', 'C. 7'],
      correctAnswer: 'A. 9',
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
