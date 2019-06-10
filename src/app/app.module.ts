import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
MatButtonModule,
MatCheckboxModule,
MatMenuModule,
MatCardModule,
MatGridListModule
} from '@angular/material';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ManualComponent } from './manual/manual.component';
import { ScoringComponent } from './scoring/scoring.component';
import { AmmoComponent } from './ammo/ammo.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';
import { ConvertToSpacesPipe } from './convertToSpaces.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    ScoringComponent,
    AmmoComponent,
    FilterPipe,
    ConvertToSpacesPipe
  ],
  imports: [
BrowserModule,
FormsModule,
AppRoutingModule,
BrowserAnimationsModule,
MatButtonModule,
MatCheckboxModule,
MatMenuModule,
MatCardModule,
MatGridListModule,
MatTableModule,
MatFormFieldModule,
MatSelectModule,
MatInputModule
  ],
exports: [
MatButtonModule,
MatCheckboxModule,
MatMenuModule, MatCardModule,
MatTableModule,
MatFormFieldModule,
MatSelectModule,
MatInputModule
],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}


