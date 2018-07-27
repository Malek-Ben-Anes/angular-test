import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bureau } from '../types';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BureauService {

  constructor(private http: HttpClient) { }
  private baseLink = ' https://datanova.legroupe.laposte.fr/api/records/1.0/search/?dataset=laposte_poincont&rows=10&refine.';

  getBureauxLocalite(localite): Observable<Bureau[]> {
    const Url = `${this.baseLink}localite=${localite}`;
    return this.http.get(Url).pipe(map((res: any) => <Bureau[]>res.records));
  }

  getBureauxCodepostal(codepostal): Observable<Bureau[]> {
    const Url = `${this.baseLink}code_postal=${codepostal}`;
    return this.http.get(Url).pipe(map((res: any) => <Bureau[]>res.records.map(res => {
      let bureau = new Bureau();
      bureau.name = res.fields.libelle_du_site;
      bureau.numPhone = res.fields.numero_de_telephone;
      bureau.adresse.rue = res.fields.adresse;
      bureau.adresse.codePostal = res.fields.code_postal;
      bureau.adresse.ville = res.fields.localite;
      console.log('bureau', bureau);
      return bureau;
    })));
  }
}
