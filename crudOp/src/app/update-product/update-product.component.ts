import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  data: object = [];
  products = [];
  productObj: Object = [];
  private headers = new Headers({ 'Content-type': 'application/json' });



  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }
  updateProduct(product) {
    this.productObj = {

      "name": product.name,
      "color": product.color,
  

    }
    const url="http://localhost:5555/products/"+this.id;
    this.http.put(url,JSON.stringify(this.productObj),{headers:this.headers})
    .toPromise().then(()=>{

      this.router.navigate(['/']);
    })

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.http.get("http://localhost:5555/products").subscribe(
      (res: Response) => {
        this.products = res.json();
        for (var i = 0; i < this.products.length; i++) {
          if (parseInt(this.products[i].id) === this.id) {

            this.data = this.products[i];
            break;

          }


        }

      }

    )


  }

}

