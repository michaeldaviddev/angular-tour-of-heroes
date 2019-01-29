import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule, MatChipsModule, MatCardModule, MatInputModule, MatButtonModule, MatGridListModule } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule, 
        MatListModule, 
        MatChipsModule, 
        MatCardModule, 
        MatInputModule, 
        MatButtonModule, 
        MatGridListModule
    ],
    exports: [
        MatToolbarModule, 
        MatListModule, 
        MatChipsModule, 
        MatCardModule, 
        MatInputModule, 
        MatButtonModule, 
        MatGridListModule
    ],
})

export class MaterialModule {}