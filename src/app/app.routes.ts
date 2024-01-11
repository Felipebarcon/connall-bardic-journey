import { Routes } from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
import {ExercicesComponent} from "./exercices/exercices.component";
import {JourneyComponent} from "./journey/journey.component";

export const routes: Routes = [
  { path: 'courses', component: CoursesComponent},
  { path: 'exercices', component: ExercicesComponent},
  { path: 'journey', component: JourneyComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
];
