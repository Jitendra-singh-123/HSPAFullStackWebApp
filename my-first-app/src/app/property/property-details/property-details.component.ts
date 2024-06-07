import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../model/Property';
import { HousingServiceService } from '../../Services/housingService.service';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId: number;
  property = new Property();

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
    constructor(private route: ActivatedRoute,
                private router: Router,
                private housingService: HousingServiceService) { }
  
    ngOnInit() {

      this.galleryOptions = [
        {
          width: '100%',
          height: '450px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview:true
        },
        
      ];
  
      this.galleryImages = [
        {
          small: 'assets/images/prop-1.png',
          medium: 'assets/images/prop-1.png',
          big: 'assets/images/prop-1.png'
        },
        {
          small: 'assets/images/prop-2.png',
          medium: 'assets/images/prop-2.png',
          big: 'assets/images/prop-2.png'
        },
        {
          small: 'assets/images/prop-3.png',
          medium: 'assets/images/prop-3.png',
          big: 'assets/images/prop-3.png'
        },{
          small: 'assets/images/prop-4.png',
          medium: 'assets/images/prop-4.png',
          big: 'assets/images/prop-4.png'
        },
        {
          small: 'assets/images/prop-5.png',
          medium: 'assets/images/prop-5.png',
          big: 'assets/images/prop-5.png'
        }
      ];

      this.propertyId = +this.route.snapshot.params['id'];
      this.route.data.subscribe((data:Property) =>{
        this.property=data['prp'];
      })
      // this.housingService.getProperty(this.propertyId).subscribe(
      //   (data: Property) => {
      //     this.property = data;
      //   }
      // );
      
  
    }
}
