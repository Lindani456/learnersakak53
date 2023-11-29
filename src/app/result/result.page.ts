import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
///import * as pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
const pdfMake = require('pdfmake/build/pdfmake.js');
// @ts-ignore
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  score: any;
  correctAnswers: any[]=[];
  incorrectAnswers:  any[]=[];
  unansweredQuestions:  any[]=[];
  state: any;
  private routeSubscription: Subscription | undefined;
  time: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe((params) => {
      if (params && this.router.getCurrentNavigation()?.extras.state) {
        // Retrieve the entire state object
        
        this.state = this.router.getCurrentNavigation()?.extras.state;
      this.score =this.state.score;
      this.time=this.state.time;
        // Extract individual properties from the state
        this.correctAnswers = this.state.correctAnswers;
        this.incorrectAnswers = this.state.incorrectAnswers;
        this.unansweredQuestions = this.state.unansweredQuestions;

        // Additional logic if needed
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
  async generatePDF() {
    console.log('Score:', this.score);
    // Define the content for the PDF
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

     let pdfContent = {
      content: [
        {
          text: 'Test Result',
          style: 'header',
        },
        {
          text: `Time: ${this.time}`,
          margin: [0, 0, 0, 10], // Add margin to separate from the header
        },
        {
          text: `Your Score: ${this.score.toFixed(2)}%`,
          style: 'score',
          margin: [0, 0, 0, 20], // Add margin below the score
        },
        {
          text: 'Correct Answers',
          style: 'answer-status correct',
          margin: [0, 0, 0, 10], // Add margin above correct answers
        },
        {
          ul: this.correctAnswers.map(answer => answer.text),
          margin: [0, 0, 0, 10], // Add margin below correct answers
        },
        {
          text: 'Incorrect Answers',
          style: 'answer-status incorrect',
          margin: [0, 0, 0, 10], // Add margin above incorrect answers
        },
        {
          ul: this.incorrectAnswers.map(answer => `${answer.text} (Your answer: ${answer.selectedAnswer})`),
          margin: [0, 0, 0, 10], // Add margin below incorrect answers
        },
        {
          text: 'Unanswered Questions',
          style: 'answer-status unanswered',
          margin: [0, 0, 0, 10], // Add margin above unanswered questions
        },
        {
          ul: this.unansweredQuestions.map(question => question.text),
          margin: [0, 0, 0, 10], // Add margin below unanswered questions
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        score: {
          fontSize: 16, // Use an appropriate numeric value
          bold: true,
          margin: [0, 0, 0, 20],
        },
        
        
        'answer-status': {
          bold: true,
          margin: [0, 0, 0, 10],
        },
        correct: {
          color: '#4caf50', // green
        },
        incorrect: {
          color: '#f44336', // red
        },
        unanswered: {
          color: '#ff9800', // orange
        },
      },
    };
  
      // Generate the PDF
      const pdfDocGenerator = await pdfMake.createPdf(pdfContent);

      const blob = await new Promise<Blob>((resolve) => {
        pdfDocGenerator.download();
      });
    }
 
}
