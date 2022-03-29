import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Country, SearchService} from "../../services/search.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
  providers: [SearchService],
})
export class SearchFieldComponent implements OnInit {
  public searchField: FormControl = new FormControl();
  public searchResult: Country[] = [];
  public isActive: boolean = false;

  constructor(private searchService: SearchService) {
  }

  ngOnInit () {
    this.searchField.valueChanges.subscribe(value => {
      this.isActive = Boolean(value);
      value
       ? this.searchService.searchRequest(value)
          .then((res: Country[]) => {
            this.searchResult = res
            console.log(res)
          })
      : this.searchResult = []
    });
  }
onSelect(country: string): void {
    this.searchField.setValue(country);
    this.searchResult = [];
    this.isActive = !this.isActive;
}
}
