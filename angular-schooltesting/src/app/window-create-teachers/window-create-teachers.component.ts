import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { element } from 'protractor';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-window-create-teachers',
  templateUrl: './window-create-teachers.component.html',
  styleUrls: ['./window-create-teachers.component.css'],
})
export class WindowCreateTeachersComponent implements OnInit {
  formTeachers: FormGroup;
  getSubjects = new FormControl();
  toppingList: string[] = [];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  teacherControl = new FormControl('', Validators.required);
  ngOnInit() {
    this.formTeachers = new FormGroup({
      FIO: new FormControl(null, [Validators.required]),
      /*subject: new FormControl(null, [Validators.required]),*/
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

    if (this.data.item) {
      this.formTeachers.get('FIO').setValue(this.data.item.FIO);
      /*   this.formStudents.get('class').setValue(this.data.item.class);*/
     /* this.formTeachers.get('subject').setValue(this.data.item.subject);*/
      this.formTeachers.get('username').disable(this.data.item.username);
      this.formTeachers.get('password').disable(this.data.item.password);
    }
  }

  onSubmitStudents() {}
}
