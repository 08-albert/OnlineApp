import { Injectable } from '@angular/core';
import { Food } from './share/models/Food';


@Injectable({
  providedIn: 'root'
})
export class WebAppService {

  constructor() { }

  getAll() : Food[]{
    return [
      { 
         id: 1,  
         name: 'Pizza Pepperoni',   
         cookTime: '10-20',
         price:10,        
         favorite:false,   
         origins:['italy'],    
         stars: 4.5,     
         imageUrl:'../../../assets/images/food6.jpg ' ,
         tags: ['fasFood', 'Pizza', 'lunch'] ,
      },


      { 
        id: 1,  
        name: 'Pizza Pepperoni',   
        cookTime: '10-20',
        price:10,        
        favorite:false,   
        origins:['italy'],    
        stars: 4.5,     
        imageUrl:'../../../assets/images/food5.jpg ' ,
        tags: ['fasFood', 'Pizza', 'lunch'] ,
     },
      
     
    ]
  }
}

