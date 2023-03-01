import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NoteSlip } from '../note.slip';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.css'],
})
export class SlipComponent implements OnInit {
  slip1: NoteSlip = {
    heading: 'First slip heading',
    content: 'First slip content',
  };
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.mget();
    // console.log(this.dataService.arr);
  }

  onDelete(namekey: string) {
    //alert(i)
    this.dataService.mdelete(namekey);
  }
}
