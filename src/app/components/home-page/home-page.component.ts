import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(eventName: string) {
    /* A switch statement. It is used to perform different actions based on different conditions. */
    switch(eventName) {
      case 'facebook':
        window.open("https://www.facebook.com/MaiClothing.vn");
        break;
      case 'instagram':
        window.open("https://www.instagram.com/m.a.i_clothings/");
        break;
      case 'shoppe':
        window.open("https://shopee.vn/maiclothing.vn");
        break;
      case 'tiktok_0':
        window.open("https://www.tiktok.com/@tuyet_mai1006");
        break;
      case 'tiktok_1':
        window.open("https://www.tiktok.com/@maiclothing1");
        break;
      case 'tiktok_2':
        window.open("https://www.tiktok.com/@maiclothing2");
        break;
      case 'zalo':
        window.open("https://zalo.me/g/vlqefv859");
        break;
      default:
        break;
    }
  }

}
