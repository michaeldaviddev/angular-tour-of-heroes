import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule, MatChipsModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [MatToolbarModule, MatListModule, MatChipsModule, MatCardModule, MatInputModule],
    exports: [MatToolbarModule, MatListModule, MatChipsModule, MatCardModule, MatInputModule],
})

export class MaterialModule {}