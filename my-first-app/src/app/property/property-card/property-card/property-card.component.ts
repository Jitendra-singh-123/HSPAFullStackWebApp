import { Component, Input } from '@angular/core';
import { PropertyListComponent } from '../../property-list/property-list.component';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  @Input() property:any

}
