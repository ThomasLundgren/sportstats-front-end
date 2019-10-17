import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SportComponent } from "./component/sport/sport.component";
import { Sport } from "./model/sport.model";

const routes: Routes = [
  {
    path: "sport/:id",
    component: SportComponent,
    data: Sport
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  sports: Sport[];

  constructor() {}
}
