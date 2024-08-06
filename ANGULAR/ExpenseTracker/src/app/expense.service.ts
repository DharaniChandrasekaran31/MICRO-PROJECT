import { Injectable } from '@angular/core';
import { Expense } from './model/Expense';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  url:string;
  expenseArr:Expense[];
  expense:Expense;

  constructor(private http:HttpClient) {
    this.url="http://localhost:3000/expense";
    this.expense=new Expense();
    this.expenseArr=[];
   }
   insertExpense(expense:Expense){
    this.http.post<Expense>(this.url,expense).subscribe();
    return "Date of Expense is Inserted";
   }
   updateExpense(expense:Expense){
    this.http.put<Expense>(this.url+"/"+expense.Date,expense).subscribe();
    return "Expense Details Updated";
   }
   deleteExpense(Date:number){
    this.http.delete<Expense>(this.url+"/"+Date,).subscribe();
    return "Expense Details Deleted";
   }
   findAllExpense(){
    this.http.get<Expense[]>(this.url).subscribe(data=>this.expenseArr=data);
    return this.expenseArr;
   }
   findExpense(Date:number){
    this.http.get<Expense>(this.url+"/"+Date).subscribe(data=>this.expense=data);
    return this.expense;
   }
}
