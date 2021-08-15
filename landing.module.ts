import { LandingComponent } from './landing.component';
import{ShareSheet} from './landing.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule, MatProgressBarModule, MatExpansionModule, MatStepperModule, MatFormField, MatInputModule, MatSnackBarModule } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

import { LandingRoutingModule } from './landing-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';







@NgModule({
  declarations: [
    LandingComponent,
    ShareSheet,
 

  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSnackBarModule,
    MatCarouselModule,
    MatTooltipModule,
    MatBottomSheetModule,
    
    

    





    ]
})
export class LandingModule { }
