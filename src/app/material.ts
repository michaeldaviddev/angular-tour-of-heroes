import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule, MatChipsModule, MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [MatToolbarModule, MatListModule, MatChipsModule, MatCardModule, MatInputModule, MatButtonModule],
    exports: [MatToolbarModule, MatListModule, MatChipsModule, MatCardModule, MatInputModule, MatButtonModule],
})

export class MaterialModule {}