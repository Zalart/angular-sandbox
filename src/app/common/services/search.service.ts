export class SearchService {
  private dataSet: {country: string}[] = [
    {
      "country": "Zambia"
    },
    {
      "country": "Trinidad and Tobago"
    },
    {
      "country": "France"
    },
    {
      "country": "Laos"
    },
    {
      "country": "Lebanon"
    },
    {
      "country": "American Samoa"
    },
    {
      "country": "Norway"
    },
    {
      "country": "Zimbabwe"
    },
    {
      "country": "Turkmenistan"
    },
    {
      "country": "Reunion"
    },
    {
      "country": "French Guiana"
    },
    {
      "country": "Iran"
    },
    {
      "country": "Wallis and Futuna"
    },
    {
      "country": "Ukraine"
    },
    {
      "country": "Laos"
    },
    {
      "country": "Trinidad and Tobago"
    },
    {
      "country": "Martinique"
    },
    {
      "country": "Cape Verde"
    },
    {
      "country": "Heard Island and Mcdonald Islands"
    },
    {
      "country": "Bonaire, Sint Eustatius and Saba"
    },
    {
      "country": "Brazil"
    },
    {
      "country": "Bosnia and Herzegovina"
    },
    {
      "country": "Zambia"
    },
    {
      "country": "Madagascar"
    },
    {
      "country": "Saint Martin"
    },
    {
      "country": "Saint Pierre and Miquelon"
    },
    {
      "country": "United Kingdom (Great Britain)"
    },
    {
      "country": "Norfolk Island"
    },
    {
      "country": "Colombia"
    },
    {
      "country": "Korea, North"
    },
    {
      "country": "Yemen"
    },
    {
      "country": "Honduras"
    },
    {
      "country": "Romania"
    },
    {
      "country": "Australia"
    },
    {
      "country": "Belarus"
    },
    {
      "country": "Bulgaria"
    },
    {
      "country": "Sierra Leone"
    },
    {
      "country": "El Salvador"
    },
    {
      "country": "Congo (Brazzaville)"
    },
    {
      "country": "French Southern Territories"
    },
    {
      "country": "Brunei"
    },
    {
      "country": "Djibouti"
    },
    {
      "country": "Latvia"
    },
    {
      "country": "Barbados"
    },
    {
      "country": "Senegal"
    },
    {
      "country": "Lebanon"
    },
    {
      "country": "Dominica"
    },
    {
      "country": "Guatemala"
    },
    {
      "country": "Argentina"
    },
    {
      "country": "Panama"
    },
    {
      "country": "Tokelau"
    },
    {
      "country": "Peru"
    },
    {
      "country": "United States Minor Outlying Islands"
    },
    {
      "country": "Austria"
    },
    {
      "country": "Isle of Man"
    },
    {
      "country": "Bahrain"
    },
    {
      "country": "Turks and Caicos Islands"
    },
    {
      "country": "Palau"
    },
    {
      "country": "Martinique"
    },
    {
      "country": "Macedonia"
    },
    {
      "country": "Macao"
    },
    {
      "country": "Ghana"
    },
    {
      "country": "Italy"
    },
    {
      "country": "Congo, the Democratic Republic of the"
    },
    {
      "country": "Niger"
    },
    {
      "country": "Congo (Brazzaville)"
    },
    {
      "country": "Micronesia"
    },
    {
      "country": "Saint Pierre and Miquelon"
    },
    {
      "country": "Samoa"
    },
    {
      "country": "Spain"
    },
    {
      "country": "Cuba"
    },
    {
      "country": "Sudan"
    },
    {
      "country": "Nicaragua"
    },
    {
      "country": "Guernsey"
    },
    {
      "country": "Tokelau"
    },
    {
      "country": "Swaziland"
    },
    {
      "country": "Iceland"
    },
    {
      "country": "Ukraine"
    },
    {
      "country": "Slovakia"
    },
    {
      "country": "Slovakia"
    },
    {
      "country": "Slovenia"
    },
    {
      "country": "Cambodia"
    },
    {
      "country": "Saint Martin"
    },
    {
      "country": "United Arab Emirates"
    },
    {
      "country": "Japan"
    },
    {
      "country": "Namibia"
    },
    {
      "country": "Haiti"
    },
    {
      "country": "Yemen"
    },
    {
      "country": "Solomon Islands"
    },
    {
      "country": "Saint Lucia"
    },
    {
      "country": "Brazil"
    },
    {
      "country": "Pakistan"
    },
    {
      "country": "Montserrat"
    },
    {
      "country": "Zambia"
    },
    {
      "country": "Serbia"
    },
    {
      "country": "Korea, South"
    },
    {
      "country": "Korea, North"
    },
    {
      "country": "Bahrain"
    },
    {
      "country": "Mayotte"
    },
    {
      "country": "American Samoa"
    }
  ]
  searchRequest(query: string){
return this.dataSet.filter((item: {country: string}) => item.country.toLocaleLowerCase().includes(query.toLowerCase()));
  }

}
