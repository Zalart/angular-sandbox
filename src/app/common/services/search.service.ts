export type Country =  {country: string;}

export class SearchService {
  private dataSet: Country[] = [
    {
      country: "Zambia"
    },
    {
      country: "Trinidad and Tobago"
    },
    {
      country: "France"
    },
    {
      country: "American Samoa"
    },
    {
      country: "Norway"
    },
    {
      country: "Zimbabwe"
    },
    {
      country: "Turkmenistan"
    },
    {
      country: "Reunion"
    },
    {
      country: "French Guiana"
    },
    {
      country: "Iran"
    },
    {
      country: "Wallis and Futuna"
    },
    {
      country: "Ukraine"
    },
    {
      country: "Laos"
    },
    {
      country: "Trinidad and Tobago"
    },
    {
      country: "Cape Verde"
    },
    {
      country: "Heard Island and Mcdonald Islands"
    },
    {
      country: "Bonaire, Sint Eustatius and Saba"
    },
    {
      country: "Bosnia and Herzegovina"
    },
    {
      country: "Madagascar"
    },
    {
      country: "Saint Martin"
    },
    {
      country: "Saint Pierre and Miquelon"
    },
    {
      country: "United Kingdom (Great Britain)"
    },
    {
      country: "Norfolk Island"
    },
    {
      country: "Colombia"
    },
    {
      country: "Korea, North"
    },
    {
      country: "Yemen"
    },
    {
      country: "Honduras"
    },
    {
      country: "Romania"
    },
    {
      country: "Australia"
    },
    {
      country: "Belarus"
    },
    {
      country: "Bulgaria"
    },
    {
      country: "Sierra Leone"
    },
    {
      country: "El Salvador"
    },
    {
      country: "Congo (Brazzaville)"
    },
    {
      country: "French Southern Territories"
    },
    {
      country: "Brunei"
    },
    {
      country: "Djibouti"
    },
    {
      country: "Latvia"
    },
    {
      country: "Barbados"
    },
    {
      country: "Senegal"
    },
    {
      country: "Lebanon"
    },
    {
      country: "Dominica"
    },
    {
      country: "Guatemala"
    },
    {
      country: "Argentina"
    },
    {
      country: "Panama"
    },
    {
      country: "Tokelau"
    },
    {
      country: "Peru"
    },
    {
      country: "United States Minor Outlying Islands"
    },
    {
      country: "Austria"
    },
    {
      country: "Isle of Man"
    },
    {
      country: "Turks and Caicos Islands"
    },
    {
      country: "Palau"
    },
    {
      country: "Martinique"
    },
    {
      country: "Macedonia"
    },
    {
      country: "Macao"
    },
    {
      country: "Ghana"
    },
    {
      country: "Italy"
    },
    {
      country: "Congo, the Democratic Republic of the"
    },
    {
      country: "Niger"
    },
    {
      country: "Micronesia"
    },
    {
      country: "Saint Pierre and Miquelon"
    },
    {
      country: "Samoa"
    },
    {
      country: "Spain"
    },
    {
      country: "Cuba"
    },
    {
      country: "Sudan"
    },
    {
      country: "Nicaragua"
    },
    {
      country: "Guernsey"
    },
    {
      country: "Tokelau"
    },
    {
      country: "Swaziland"
    },
    {
      country: "Iceland"
    },
    {
      country: "Ukraine"
    },
    {
      country: "Slovakia"
    },
    {
      country: "Slovakia"
    },
    {
      country: "Slovenia"
    },
    {
      country: "Cambodia"
    },
    {
      country: "Saint Martin"
    },
    {
      country: "United Arab Emirates"
    },
    {
      country: "Japan"
    },
    {
      country: "Namibia"
    },
    {
      country: "Haiti"
    },
    {
      country: "Yemen"
    },
    {
      country: "Solomon Islands"
    },
    {
      country: "Saint Lucia"
    },
    {
      country: "Brazil"
    },
    {
      country: "Pakistan"
    },
    {
      country: "Montserrat"
    },
    {
      country: "Serbia"
    },
    {
      country: "Korea, South"
    },
    {
      country: "Bahrain"
    },
    {
      country: "Mayotte"
    },
    {
      country: "American Samoa"
    }
  ]
  delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time))
  }
  searchRequest(query: string) {
      return this.delay(1000)
        .then(() => this.dataSet.filter((item: Country) => item.country.toLowerCase().indexOf(query.toLowerCase()) === 0)
      );
  }
}
