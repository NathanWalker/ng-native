import { Component } from '@angular/core';
import { TNSPDF } from 'nativescript-pdf';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    
    public createPDF() {
        TNSPDF.createPDF();
    }
}
