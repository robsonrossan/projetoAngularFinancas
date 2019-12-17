import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../shared/category.model";
import {CategoryService} from "../shared/category.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
