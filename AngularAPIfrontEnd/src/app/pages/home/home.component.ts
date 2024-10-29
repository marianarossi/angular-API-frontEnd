import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ListProducts } from '../../models/product';
import { response } from 'express';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  products: ListProducts[] = [];
  generalProduct: ListProducts[] = [];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.GetProducts().subscribe(response => {
      this.products = response.data;
      this.generalProduct = response.data;
    });
  }

  search(event:Event)
  {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.products = this.generalProduct.filter(product => {
      return product.name.toLowerCase().includes(value);
    })
  }

  delete(id:number | undefined)
  {
    this.productService.DeleteProduct(id).subscribe(response =>
    {
      window.location.reload();
    })
  }
}