import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { ListProducts } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private productService : ProductService, private router: Router){ }
  
  createProduct(product : ListProducts){
    this.productService.CreateProduct(product).subscribe(response => {
      this.router.navigate(['/']);
    })
  }
}
