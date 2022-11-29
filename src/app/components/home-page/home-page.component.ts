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
    switch(eventName) {
      case 'facebook':
        window.open("https://www.facebook.com/MaiClothing.vn");
        break;
      case 'instagram':
        window.open("https://www.instagram.com/m.a.i_clothings/");
        break;
      case 'shoppe':
        window.open("https://shopee.vn/maiclothing271220");
        break;
      case 'tiktok':
        window.open("https://www.tiktok.com/@tuyet_mai1006");
        break;
      case 'zalo':
        window.open("https://zalo.me/g/vlqefv859");
        break;
      case 'vay':
        window.open("https://shopee.vn/V%C3%A1y-Jean-ng%E1%BA%AFn-33cm-l%C3%B3t-qu%E1%BA%A7n-n%E1%BB%8Bt-khoen-l%C6%B0ng-ch%E1%BA%A5t-co-d%C3%A3n-i.33371895.14786911099?sp_atk=d29a356c-e45b-4b9c-ae24-ff7b1ee63487&xptdk=d29a356c-e45b-4b9c-ae24-ff7b1ee63487");
        break;
      default:
        break;
    }
  }

}
