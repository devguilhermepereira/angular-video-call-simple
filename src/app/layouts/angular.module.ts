import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
  ]
})
export class AngularModule {
}
