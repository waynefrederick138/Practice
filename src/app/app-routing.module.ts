import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmmoComponent } from './ammo/ammo.component';
import { ScoringComponent } from './scoring/scoring.component';
import { ManualComponent } from './manual/manual.component';
import { AppComponent } from './app.component';

const routes: Routes = [
{ path: 'ammo', component: AmmoComponent },
{ path: 'scoring', component: ScoringComponent },
{ path: 'manual', component: ManualComponent },
{ path: '**', redirectTo: 'AppComponent', pathMatch: 'full'  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}