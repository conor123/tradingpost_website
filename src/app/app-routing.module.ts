import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAdvertComponent} from './adverts/create-advert/create-advert.component';
import { RouteProtectionService } from "./auth/route-protection.service";
import { MyAdvertsComponent } from "./adverts/my-adverts/my-adverts.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [RouteProtectionService] },
  { path: 'create-advert', component: CreateAdvertComponent, canActivate: [RouteProtectionService] },
  { path: 'my-adverts', component: MyAdvertsComponent, canActivate: [RouteProtectionService] },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
