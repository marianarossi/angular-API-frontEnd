import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListProducts } from '../../models/product';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<ListProducts>();

  productForm!:FormGroup;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(0),
      dateCreated: new FormControl(new Date().toISOString())
    })
  }

  submit(){
    console.log(this.productForm.value);
    this.onSubmit.emit(this.productForm.value);
  }

}
