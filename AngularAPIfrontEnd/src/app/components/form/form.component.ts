import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() btnAction!:string;
  @Input() formTitle!:string;
  @Output() onSubmit = new EventEmitter<ListProducts>();
  @Input() productData : ListProducts | null = null;

  productForm!:FormGroup;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(this.productData ? this.productData.id : 0),
      name: new FormControl(this.productData ? this.productData.name : ''),
      description: new FormControl(this.productData ? this.productData.description : ''),
      price: new FormControl(this.productData ? this.productData.price : 0),
      dateCreated: new FormControl(new Date().toISOString())
    });
  }

  submit(){
    this.onSubmit.emit(this.productForm.value);
  }

}
