import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';






@NgModule({
    
    imports: [
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatProgressSpinnerModule,
        
        
        

      
    ]
    
  })
  export class MaterialModule { }
