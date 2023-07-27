import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmployerAddEditComponent } from '../employer-add-edit/employer-add-edit.component';
import { EmployeeService } from '../services/employee.service';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CoreService } from '../core/core.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  displayedColumns: string[] = [
    'id', 
    'firstName', 
    'lastName', 
    'email', 
    'dob',
    'experience',
    'education',
    'gender',
    'package',
    'company',
    'action'
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog:MatDialog, 
    private _empService: EmployeeService,
    private _coreService: CoreService) {}
  
  openAddEditForm(){
     const dialogRef = this._dialog.open(EmployerAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val)=>{
        if(val){
          this.getEmployeeList()
        }
      }
    }) 
  
    
  }

  getEmployeeList(){
    this._empService.getEmployeeList().subscribe({
      next:(res)=>{
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
      this.getEmployeeList()
  }

  deleteEmployee(id : number){
    this._empService.deleteEmployee(id).subscribe({
      next: (res)=>{
        this. _coreService.openSnackBar('employee deleted!', 'done')
       
        this.getEmployeeList()
      },

      error: console.log,
    })
  }


  openEditForm(data: any){
   const dialogRef =this._dialog.open(EmployerAddEditComponent,{
    data,
   });

   dialogRef.afterClosed().subscribe({
    next: (val)=>{
      if(val){
        this.getEmployeeList()
      }
    }
  }) 

 
   
 }
}
