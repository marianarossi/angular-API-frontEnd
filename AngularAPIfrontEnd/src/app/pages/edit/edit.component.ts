import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { ListProducts } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  btnAction = "Edit";
  formTitle = "Edit product"
  product!: ListProducts;

  constructor(private productService:ProductService, private router:Router, private route:ActivatedRoute){ }
  
  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.GetProductId(id).subscribe(response =>{
      this.product = response.data;
    });
  }

  editProduct(product: ListProducts){
    this.productService.EditProduct(product).subscribe(response =>{
      this.router.navigate([`/`])
    });
  }
}
