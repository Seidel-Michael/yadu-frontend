import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule],
  exports: [MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule],
})
export class SharedMaterialModule {}
