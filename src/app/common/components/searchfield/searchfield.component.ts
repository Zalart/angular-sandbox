import {AfterContentChecked, Component, Input, OnChanges, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {TimeInterval} from "rxjs";

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
  providers: [SearchService],
})
export class SearchFieldComponent implements AfterContentChecked{
  public queryString = '';
  public searchResult: {country: string}[] = [];
  public isActive: boolean = false;

  constructor(private searchService: SearchService ) { }
ngAfterContentChecked(): void {
  this.isActive = Boolean(this.queryString && this.searchResult.length > 0);
  this.searchResult = this.searchService.searchRequest(this.queryString);
}
onEnter(event: any): void{
    setTimeout( ()=> {
    this.queryString = event.target.value;
  },1000)
}
onSelect(country: string): void {
    this.queryString = country;
    this.searchResult = [];
    this.isActive = !this.isActive;
}
onClear(): void {
    this.queryString = '';
}

}
