import { ChildComponent ,} from './../child/child.component';
import { Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  formGroup: FormGroup
  constructor(private fb : FormBuilder) {
    this.formGroup = this.fb.group(
      {
        firstName: '',
        lastName: '',
        address: this.fb.group({
          city: '',
          street: ''
        })
      }
    )
  }
  onSubmit() {
    console.log(this.formGroup.value);
  }
  ngOnInit(): void {}

}
