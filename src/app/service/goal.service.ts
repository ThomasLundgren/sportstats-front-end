import { Injectable } from "@angular/core";
import { Goal } from "../model/goal.model";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GoalService {
  constructor(private http: HttpClient) {}

  addGoal(goal: Goal) {
    return this.http.post<Goal>(
      `api/game/add/goal/${goal.periodId}/${goal.penalty}/${goal.points}/${goal.playerId}/${goal.teamId}/${goal.goalTime}`,
      goal
    );

    // let url = "api/game/add/goal";
    // let params = new HttpParams();
    // params.append("", goal.periodId.toString());
    // params.append("", String(goal.penalty));
    // params.append("", goal.points.toString());
    // params.append("", goal.playerId.toString());
    // params.append("", goal.teamId.toString());
    // params.append("", goal.goalTime.toString());

    // console.log(params.toString());

    // let options = {
    //   headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    // };

    // this.http.post(url, params.toString(), options).subscribe(
    //   res => {
    //     console.log("POST Request was successful: " + res);
    //   },
    //   err => {
    //     console.log("Error occurred: " + err.toString);
    //   }
    // );
  }
}
