import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.moule';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatSidenavModule} from '@angular/material/sidenav';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatListModule } from '@angular/material/list';

import { PastTrainingComponent } from './training/past-training/past-training.component';
import { FutureTrainingComponent } from './training/future-training/future-training.component';
import { TrainingComponent } from './training/training.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StopTrainingComponent } from './training/current-training/stop-training.component';

import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { MatDialogRef } from '@angular/material/dialog';







@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,

    PastTrainingComponent,
    FutureTrainingComponent,
    TrainingComponent,
    StopTrainingComponent,
    CurrentTrainingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MaterialModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogRef,
 
    
    
  
   
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
