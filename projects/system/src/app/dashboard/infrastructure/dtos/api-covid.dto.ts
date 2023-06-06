export interface ApiCovid {
  country: string;
  confirmed: number;
}

export interface DataCovid {
  country: string;
  casesConfirmed: number;
}

export class CovidDto {
  private constructor() {}

  static fromApiToData(data: ApiCovid[]): DataCovid[] {
    return data.map((item) => {
      return {
        country: item.country,
        casesConfirmed: item.confirmed,
      };
    });
  }
}
