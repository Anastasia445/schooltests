import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowCreateSubjectsComponent } from '../window-create-subjects/window-create-subjects.component';
import { WindowCreateClassesComponent } from '../window-create-classes/window-create-classes.component';

export interface Class {
  position: number;
  classnumber: number;
  classletter: string;
}

export interface Subject {
  position: number;
  subject: string;
}

const Classes: Class[] = [
  { position: 1, classnumber: 10, classletter: 'А' },
  { position: 2, classnumber: 7, classletter: 'Б' },
  { position: 3, classnumber: 6, classletter: 'Г' },
];

const Subjects: Subject[] = [
  { position: 1, subject: 'биология' },
  { position: 2, subject: 'русский язык' },
  { position: 3, subject: 'физика' },
];

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  [x: string]: any;

  displayedColumns_1: string[] = ['position', 'classnumber', 'classletter', 'options'];
  dataSource_1 = Classes;

  displayedColumns_2: string[] = ['position', 'subject', 'options'];
  dataSource_2 = Subjects;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialogClasses() {
    const dialogRef = this.dialog.open(WindowCreateClassesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogSubjects() {
    const dialogRef = this.dialog.open(WindowCreateSubjectsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
