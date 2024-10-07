import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
signupUsers: any[] = [];
signupObj: any = {
  userName: '',
  email: '',
  password: ''
};
loginObj: any = {
  userName: '',
  password: ''
};

constructor(){}

ngOnInit(): void {
  setTimeout(() => {
    if (typeof window !== 'undefined' && localStorage) {
      const localData = localStorage.getItem('signUpUsers');
      if (localData !== null) {
        this.signupUsers = JSON.parse(localData);
      }
    } else {
      console.error('localStorage is not available.');
    }
  }, 0);
}

onLogin(){
  debugger
 const isUserExist = this.signupUsers.find( m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
 if(isUserExist != undefined){
  alert('User Logged in successfully');

 }else{
  alert('Wrong credentials');
 }
}
onSignUp(){
this.signupUsers.push(this.signupObj);
localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
this.signupObj = {
  userName: '',
  email: '',
  password: ''
};
}

}
