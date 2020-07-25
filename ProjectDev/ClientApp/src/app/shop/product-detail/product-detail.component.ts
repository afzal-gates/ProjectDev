import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  //deadline = new Date(Date.parse((new Date()).toString()) + 69 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000);

  @Input('images') images: string[];
  currentImage: string;
  reviewshow: boolean;
  descriptionshow: boolean;
  infoshow: boolean;
  id: string;
  ProductId: string;

  constructor(private router: Router,
    public route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

    const navigation = this.router.getCurrentNavigation();
    this.ProductId = navigation.extras.state ? navigation.extras.state.ProductId : 0;

    console.log("AFZAL");
    console.log(this.id);
    console.log(this.ProductId);
    console.log("AFZAL");
  }

  games;
  gamesFormatted;

  changeImage(n: number): void {
    this.currentImage = this.games[n];
  }

  handleImageChange(): void {

  }

  handleMouseOut(): void {

  }


  infoShowHide(): void {
    this.infoshow = !this.infoshow;
  }

  descriptionShowHide(): void {
    this.descriptionshow = !this.descriptionshow;
  }

  reviewShowHide(): void {
    this.reviewshow = !this.reviewshow;
  }


  ngOnInit() {

    this.games = ["../../../assets/images/item-02.jpg", "../../../assets/images/cover1.jpg", "../../../assets/images/cover2.jpg", "../../../assets/images/cover3.jpg", "../../../assets/images/item-06.jpg"];
    this.gamesFormatted = [];
    var j = -1;

    for (var i = 0; i < this.games.length; i++) {
      if (i % 4 == 0) {
        j++;
        this.gamesFormatted[j] = [];
        this.gamesFormatted[j].push(this.games[i]);
      }
      else {
        this.gamesFormatted[j].push(this.games[i]);
      }
    }

    this.currentImage = this.games[0];
  }

}

export class timeClock {
  constructor(public total: number, public days: number, public hours: number, public minutes: number, public seconds: number) {

  }
}
