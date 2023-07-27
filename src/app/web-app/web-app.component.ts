import { Component, OnInit } from '@angular/core';
import { WebAppService } from './web-app.service';
import { Food } from './share/models/Food';
@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.css']
})
export class WebAppComponent  implements OnInit{
  
  foods: Food[] = [];
  constructor (private webService : WebAppService){}


  ngOnInit(): void {
      this.foods = this.webService.getAll()
  }


}
