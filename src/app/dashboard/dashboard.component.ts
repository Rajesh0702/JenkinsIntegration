import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
declare var $: any; 



export interface PeriodicElement {
  cobrand: string;
  param: string;
  value: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {cobrand: 'billshrink', param: 'phc.sc.aactivation.auto', value: 'True'},
  {cobrand: 'bestbuy', param: 'header.url', value: 'False'},
  {cobrand: 'billshrink', param: 'phc.sc.aactivation.url', value: 'True'},
  {cobrand: 'bustbuy', param: 'body.url', value: 'False'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['cobrand','editcobrand','param', 
  'editparam','value','editvalue','actions'];
  searchInfo: PeriodicElement[];
  isStateAdmin: boolean = true;

  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;

  constructor(private adminService : AdminService) { }
  ngOnInit() {
    // $(document).ready(function () {
    //   $('#dtBasicExample').DataTable();
    //   $('.dataTables_length').addClass('bs-select');
    // });
    this.searchInfo = ELEMENT_DATA;
    this.getAllRecords();
  }
  getAllRecords(){
    this.adminService.getAllrecords().subscribe(res =>{

    },err =>{

    });
  }
  editedIcon(row) {
    
    row.edited = true;
    row.searchInfoCopy = Object.assign({}, row);
    this.isStateAdmin = false;

  }
  resetDetails(searchInfo) {
    searchInfo.edited = false;
    this.isStateAdmin = true;
    searchInfo.cobrand = searchInfo.searchInfoCopy.cobrand;
    searchInfo.param = searchInfo.searchInfoCopy.param;
    searchInfo.value = searchInfo.searchInfoCopy.value;
  }
  deleteRow(row){
    $('#deleteModal').modal({
      backdrop: 'static',
      keyboard: false,
      show: true
    });
  
  }

  updateDetails(updatedInfo) {
		updatedInfo.edited = false;
		const reqObj = {
			'cobrand': updatedInfo.userType,
			'param': updatedInfo.userId,
			'value': updatedInfo.mobile,
	};

		this.adminService.updateRecord().subscribe(res => {
		//	this.getViewDetails();
		//	this.sharedService.showSuccessToast(this.toastr, 'User Details Updated Successfully.');
		}, err => {
		//	this.sharedService.showErrorToast(this.toastr, err);
		});
  }
  
  deleteRecord(){
    this.adminService.deleteRecord().subscribe(res => {
      //	this.getViewDetails();
      //	this.sharedService.showSuccessToast(this.toastr, 'User Details Updated Successfully.');
      }, err => {
      //	this.sharedService.showErrorToast(this.toastr, err);
      });
    
  }



}
