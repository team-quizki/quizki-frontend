import { Component, OnInit } from '@angular/core';
import { ApiService } from './../_services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface EXAM {
  title: string;
  description: string;
  difficulty: string;
  complete: string;
}


@Component({
  selector: 'app-search-for-an-exam-page',
  templateUrl: './search-for-an-exam-page.component.html',
  styleUrls: ['./search-for-an-exam-page.component.css']
})
export class SearchForAnExamPageComponent implements OnInit {

  exams: EXAM[] = [];
  constructor(private apiService: ApiService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.apiService.getExam('/user/getExam')
    .subscribe(
        (response: any) => {

            const titles: string[] = response.title;
            const descriptoins: string[] = response.description;
            const difficulties: string[] = response.difficulty;
            const completes: string[] = response.complete;

            for (let i=0; i<titles.length; i++) {
               this.exams[i] = {title: titles[i], description: descriptoins[i], difficulty: difficulties[i], complete: completes[i]};
            }
        },
        (error:any) => {console.log("error");
                        this.showStatusMsg("failure");
                        }
    );

  }

  showStatusMsg(status:string){
    if(status === "success"){
        this.snackBar.open("Question Saved!", "", {panelClass:['success-msg'], verticalPosition:'top', duration:2000, });
    }
    if(status === "failure"){
        this.snackBar.open("Question Failure", "Check entries", {panelClass:['failure-msg'],  verticalPosition:'top', duration:2000, });
    }
};

}
