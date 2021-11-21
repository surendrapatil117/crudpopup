import { Component,OnInit } from '@angular/core';
import { ngbCarouselTransitionIn } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularCRUD';
  
  constructor(){}

  ngOnInit(): void {
    localStorage.setItem('bearer-token', 'sdbvsfdbsrgbrgbrtgbrtbhtynbtyhnytnyu');
   
    }


   
}

