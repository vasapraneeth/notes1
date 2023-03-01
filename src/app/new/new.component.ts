import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  constructor(private dataService: DataService) {}
  vForm!: FormGroup;

  ngOnInit(): void {
    this.vForm = new FormGroup({
      heading: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.dataService.mpost(this.vForm.value.heading, this.vForm.value.content);
    // console.log(this.vForm.value);
    this.vForm.reset();
  }
}
