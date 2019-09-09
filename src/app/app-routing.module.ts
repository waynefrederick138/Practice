import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmmoComponent } from './ammo/ammo.component';
import { ScoringComponent } from './scoring/scoring.component';
import { ManualComponent } from './manual/manual.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShooterListComponent } from './shooter-list/shooter-list.component';
import { InstructionComponent } from './instruction/instruction.component';
import { RecordScoresComponent } from './scoring/record-scores/record-scores.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shooter-list', component: ShooterListComponent },
  { path: 'ammo', component: AmmoComponent },
  { path: 'scoring', component: ScoringComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'instruction', component: InstructionComponent },
  { path: 'record-scores', component: RecordScoresComponent  },
  { path: '**', redirectTo: 'AppComponent', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}