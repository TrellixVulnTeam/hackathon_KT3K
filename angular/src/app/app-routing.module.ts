import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutoptionsComponent } from './workoutoptions/workoutoptions.component';


const routes: Routes = [
  { path: 'workoutoptions', component: WorkoutoptionsComponent },
  { path: '**', component: WorkoutoptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
