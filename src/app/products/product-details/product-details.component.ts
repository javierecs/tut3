import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product:any = {}
  
  constructor(
    private route:ActivatedRoute, 
    private dataSvc: DataService, 
    private location: Location
    )  { }

  ngOnInit(): void {
    const productID = this.route.snapshot.paramMap.get('id');
    console.log('ProductID', productID );
    [this.product] = this.dataSvc.getProductById(productID);

  }

  onGoBack(): void{
    this.location.back();
  }

}
