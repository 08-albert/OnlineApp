import {Component,OnInit} from "@angular/core";
import { IProduct } from "./product";


@Component({
selector: 'app-products',
templateUrl: './product-list.component.html',
styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit{

    pageTitle: string = 'Online Shop';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean =false;
  

    // get and set for filter to filtering my products
    private _listFilter: string = '';
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value:string){
      this. _listFilter = value;
      console.log('in setter:', value)
      this.filteredProducts = this.performFilter(value)
    }
   
//filters list
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "LG ",
            "model": "17Z90Q-K.ADB9U1",
            "ScreenSize": "17 inch",
           
            "price": 2000.061,
            "starRating": 3.2,
            "imageUrl": "assets/img/laptopgaming.jpg",
            "color": "Black",
            "hardDiskSize": "2 TB",
            "cPUModel": "Core i7",
            "ramMemoryInstalled": "32 GB",
            "operatingSystem": "Windows 11 Home",
           
          },
          {
            "productId": 2,
            "productName": "dell",
            "model": "Dell Inspiron",
            "ScreenSize": "15.6 Inches",
        
            "price": 250.1,
            "starRating": 3.5,
            "imageUrl": "assets/img/dell.jpg",
            "color": "Black",
            "hardDiskSize": "128 GB",
            "cPUModel": "Celeron",
            "ramMemoryInstalled": "8 GB",
            "operatingSystem": "Windows 10 ",
            
          },
          

          {
            "productId": 3,
            "productName": "HP",
            "model": "BrightView",
            "ScreenSize": "14 Inches",
   
            "price": 500,
            "starRating": 1.2,
            "imageUrl": "assets/img/hp.jpg",
            "color": "Rose Gold",
            "hardDiskSize": "2 TB",
            "cPUModel": "Core i7",
            "ramMemoryInstalled": "32 GB",
            "operatingSystem": "Windows 11 Home",
            
          },

          {
            "productId": 4,
            "productName": "ASUS",
            "model": "ASUS Rog Strix",
            "ScreenSize": "15.6 Inches",
          
            "price": 3000.061,
            "starRating": 3.2,
            "imageUrl": "assets/img/asus.jpg",
            "color": "Black",
            "hardDiskSize": "4 TB",
            "cPUModel": "	Ryzen 9",
            "ramMemoryInstalled": "32 GB",
            "operatingSystem": "Windows 10 Home",
           
          },

          {
            "productId": 5,
            "productName": "SAMSUNG ",
            "model": "NP641BEF-KA1US",
            "ScreenSize": "14 Inches",
           
            "price": 999.061,
            "starRating": 3.2,
            "imageUrl": "assets/img/samsung.jpg",
            "color": "Graphite",
            "hardDiskSize": "2 TB",
            "cPUModel": "Core i7",
            "ramMemoryInstalled": "16 GB",
            "operatingSystem": "Windows 11 Home",
            
          },

          {
            "productId": 6,
            "productName": "ANMESC",
            "model": "LT1505",
            "ScreenSize": "17 inch",
           
            "price": 459.99,
            "starRating": 3.2,
            "imageUrl": "assets/img/amesc.jpg",
            "color": "Gray",
            "hardDiskSize": "2 TB",
            "cPUModel": "Core i7",
            "ramMemoryInstalled": "32 GB",
            "operatingSystem": "Windows 11 Home",
            
          },

          {
            "productId": 7,
            "productName": "Acer",
            "model": "Aspire 5",
            "ScreenSize": "17 inch",
           
            "price": 2000.061,
            "starRating": 3.2,
            "imageUrl": "assets/img/acer.jpg",
            "color": "Black",
            "hardDiskSize": "2 TB",
            "cPUModel": "Core i7",
            "ramMemoryInstalled": "32 GB",
            "operatingSystem": "Windows 11 Home",
          
          },


          {
            "productId": 2,
            "productName": "Bmax",
            "model": "S14 A",
            "ScreenSize": "14.1 Inches",
            
            "price": 1234.99,
            "starRating": 3.2,
            "imageUrl": "assets/img/bmax.jpg",
            "color": "Black",
            "hardDiskSize": "2 TB",
            "cPUModel": "Core i7",
            "ramMemoryInstalled": "32 GB",
            "operatingSystem": "Windows 11 Home",
            
          },

          {
            "productId": 2,
            "productName": "dell",
            "model": "17Z90Q-K.ADB9U1",
            "ScreenSize": "17 inch",
          
            "price": 2000.061,
            "starRating": 3.2,
            "imageUrl": "assets/img/laptopgaming.jpg",
            "color": "Black",
            "hardDiskSize": "2 TB",
            "cPUModel": "Core i7",
            "ramMemoryInstalled": "32 GB",
            "operatingSystem": "Windows 11 Home",
           
          },


          {
            "productId": 2,
            "productName": "dell",
            "model": "17Z90Q-K.ADB9U1",
            "ScreenSize": "17 Inches",
          
            "price": 2000.061,
            "starRating": 3.2,
            "imageUrl": "assets/img/laptopgaming.jpg",
            "color": "Black",
            "hardDiskSize": "2 TB",
            "cPUModel": "Core i7",
            "ramMemoryInstalled": "32 GB",
            "operatingSystem": "Windows 11 Home",
            
          },

     
       

    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this.listFilter = ''
    }

    //function for perform filter to get the tet from Iproduct interface
performFilter(filterBy: string):IProduct[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product: IProduct)=>product.productName.toLocaleLowerCase().includes(filterBy));
}

       
    };
