import { Component } from '@angular/core';
import { Expense } from './model/Expense';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  expense: Expense;
  result:string;
  expenseArr:Expense[];
  flag:boolean;

  constructor(private service:ExpenseService) {
    this.expense = new Expense();
    this.result="";
    this.expenseArr=[];
    this.flag=false;
  }

  insertExpense(data:any){
    this.expense.Date=data.Date;
    this.expense.Reason=data.Reason;
    this.expense.Expense=data.Expense;
    this.result=this.service.insertExpense(this.expense);
  }
  updateExpense(data:any){
    this.expense.Date=data.Date;
    this.expense.Reason=data.Reason;
    this.expense.Expense=data.Expense;
    this.result=this.service.updateExpense(this.expense);
  }
  deleteExpense(data:any){
    this.result=this.service.deleteExpense(data.Date);
  }
  findAllExpense(){
    this.expenseArr=this.service.findAllExpense();
    this.flag=true;
  }
  findExpense(data:any){
    this.expense=this.service.findExpense(data.Date);
    this.result=this.expense.Date+" "+this.expense.Reason+this.expense.Expense;
  }
}
