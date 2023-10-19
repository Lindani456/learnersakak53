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
      text: 'What does this road sign mean?',
      image: 'assets/road_sign.png',
      options: ['A. No Parking', 'B. Stop', 'C. Yield', 'D. Speed Limit'],
      correctAnswer: 'C. Yield',
      selectedAnswer: '',
    },
    {
      text: 'What does a red traffic light mean?',
      options: ['A. Go', 'B. Slow down', 'C. Stop', 'D. Yield'],
      correctAnswer: 'C. Stop',
      selectedAnswer: '',
    },
    {
      text: 'What does a yellow diamond-shaped sign indicate?',
      options: ['A. School zone', 'B. Construction zone', 'C. Warning', 'D. Hospital ahead'],
      correctAnswer: 'C. Warning',
      selectedAnswer: '',
    },
    {
      text: 'What does a round traffic sign with a white bar mean?',
      options: ['A. Stop', 'B. Yield', 'C. Do not enter', 'D. No parking'],
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
    const time=this.timer
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
