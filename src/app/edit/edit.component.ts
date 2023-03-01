import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NoteSlip } from '../note.slip';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  nameKey!: string;
  editMode = false;
  vForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.nameKey = params['nameKey'];
      console.log(this.nameKey);
      this.editMode = params['nameKey'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let tempHeading = '';
    let temContent = '';

    if (this.editMode) {
      const ele = this.dataService.getEle(this.nameKey);
      console.log(ele);
      tempHeading = ele['heading'];
      temContent = ele['content'];
      // console.log(tempHeading);
      // console.log(temContent);
    }
    this.vForm = new FormGroup({
      heading: new FormControl(tempHeading, Validators.required),
      content: new FormControl(temContent, Validators.required),
    });
  }

  onSubmit() {
    // console.log(this.vForm.value);
    const tempArr = this.dataService.getMap();
    tempArr[this.nameKey].heading = this.vForm.value.heading;
    tempArr[this.nameKey].content = this.vForm.value.content;
    const tempNS: NoteSlip = {
      heading: this.vForm.value.heading,
      content: this.vForm.value.content,
    };
    this.dataService.mput(tempArr);
    this.vForm.reset();
    this.router.navigate(['../'], );
  }
}
