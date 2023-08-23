import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  food: Order[] = [];
  constructor(private foodOrder : OrderDetailsService) {}
  ngOnInit(): void{
    this.foodOrder.getAllOrder().subscribe(
      value => {this.food = value},
      error => {console.log("Error"),
      () => console.info("Completed")
    })
  }
}
