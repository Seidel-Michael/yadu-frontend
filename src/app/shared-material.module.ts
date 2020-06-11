import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule],
  exports: [MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule],
})
export class SharedMaterialModule {}
