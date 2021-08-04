import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  selectedItem: { id: number; name: string };
  // selectedItem2: { id: number; name: string };
  selectedItem2: { subId: string; name: string };

  items: { id: number; name: string }[] = [];
  items2: { subId: string; name: string }[] = [];

  // 制御用(trueが非活性)
  isDisabledItem: boolean = true;

  constructor() {}

  ngOnInit() {
    // 配列設定
    for (let index = 0; index < 10; index++) {
      this.items.push({ id: index + 1, name: `${index + 1}ban` });
    }

    this.items2.push({ subId: 'aaa', name: 'saisyo' });
    this.items2.push({ subId: 'bbb', name: 'nikome' });
    this.items2.push({ subId: 'ccc', name: 'sankome' });
    this.items2.push({ subId: 'ddd', name: 'yonkome' });
    this.items2.push({ subId: 'eee', name: 'gokome' });
  }

  onChange() {
    if (this.selectedItem) {
      this.isDisabledItem = false;
    } else {
      this.isDisabledItem = true;
    }
  }
}
