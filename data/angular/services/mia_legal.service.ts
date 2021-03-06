import { Injectable } from '@angular/core';
import { MiaLegal } from '../entities/mia_legal';
import { MiaBaseCrudHttpService } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiaLegalService extends MiaBaseCrudHttpService<MiaLegal> {

  constructor(
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = environment.baseUrl + 'mia-legal';
  }
 
}