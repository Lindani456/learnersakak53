import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UpdatePasswordService } from '../update-password.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  selectedTest : any;
  constructor(private alertController: AlertController,
    private updatePasswordService: UpdatePasswordService) { }

  ngOnInit() {
  }



  

}
