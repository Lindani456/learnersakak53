import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

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


 
}
