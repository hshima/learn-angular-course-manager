import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges { // Deals with async requests, instead of using OnInit

    @Input() // Allows foreign resources to be accessed
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void { // Takes action on the moment the resource is loaded
        this.starWidth = this.rating * 74 / 5; // apply a font-aawesome 
    }

}