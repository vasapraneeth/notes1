import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteSlip } from './note.slip';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  arr: { [key: string]: NoteSlip } = {};
  constructor(private http: HttpClient) {}

  getMap() {
    return this.arr;
  }

  getEle(key: string) {
    return this.arr[key];
  }

  mpost(heading: string, content: string) {
    const postData: NoteSlip = { heading: heading, content: content };
    this.http
      .post(
        'https://notes1-9b032-default-rtdb.firebaseio.com/posts.json',
        postData,
        { observe: 'body' }
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => {
          console.log(e.message);
          //this.error.next(e.message);
        },
      });
  }

  mput(tempArr: { [key: string]: NoteSlip }) {
    this.http
      .put(
        'https://notes1-9b032-default-rtdb.firebaseio.com/posts.json',
        tempArr
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => {
          console.log(e.message);
          //this.error.next(e.message);
        },
      });
  }

  mget() {
    this.http
      .get<{ [key: string]: NoteSlip }>(
        'https://notes1-9b032-default-rtdb.firebaseio.com/posts.json'
      )
      .subscribe({
        next: (res) => {
          this.arr = res;
          //this.arr.push(res);
          console.log(this.arr);
          // console.log(this.arr);
        },
        error: (e) => {
          console.log(e);
        },
      });
  }

  mdelete(nameKey: string) {
    // this.http.delete()
    this.http
      .delete(
        'https://notes1-9b032-default-rtdb.firebaseio.com/posts/' +
          nameKey +
          '.json'
        // 'https://notes1-9b032-default-rtdb.firebaseio.com/posts/-NPGZrV-1F1LHTmh2o2u.json'
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.mget();
        },
        error: (e) => {
          console.log(e);
        },
      });
  }
}
