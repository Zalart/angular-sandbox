import { Component, OnDestroy, OnInit} from '@angular/core';
import {Country, SearchService} from "../../services/search.service";
import {FormControl} from "@angular/forms";
import {debounceTime, Subscription} from "rxjs";

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
  providers: [SearchService],
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  public searchField: FormControl = new FormControl();
  public searchResult: Country[] = [];
  public isActive: boolean = false;
  public subscription: Subscription = new Subscription();

  constructor(private searchService: SearchService) {
  }

  ngOnInit () {
    this.subscription = this.searchField.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.isActive = !!value;
      if (value) {
           this.searchService.searchRequest(value)
            .then((res: Country[]) => {
              this.searchResult = res
            })
      } else {
        this.searchResult = []
      }
    });
  }
ngOnDestroy() {
    this.subscription.unsubscribe();
}

  onSelect(country: string): void {
    this.searchField.setValue(country);
    this.searchResult = [];
    this.isActive = !this.isActive;
}
}
