import { Component, OnInit } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';




@Component({
  selector: 'app-crud-op',
  templateUrl: './crud-op.component.html',
  styleUrls: ['./crud-op.component.css']
})
export class CrudOpComponent implements OnInit  {
products=[];
id:number;
 headers=new Headers({'Content-Type':'application/json'});
  constructor(private http: Http) { }
  fetchData()
  {
  this.http.get("http://localhost:5555/products").subscribe(
    (res:Response) =>{

      this.products=res.json();
   
    }

  )
  }
  deleteProduct = function(id){
    if(confirm("Are you sure?"))
    {
      const url="http://localhost:5555/products/"+id;
      return this.http.delete(url,this.headers).toPromise().then(
      
      
        ()=>{
          this.fetchData();
        }

      )
    }


  }
  ngOnInit(){

  this.fetchData();

  }



}