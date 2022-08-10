import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NlpService {

  constructor() { }

  async sendText(datas: any): Promise<any> {
    const res = await axios.post('http://127.0.0.1:8080/resume/', { datas });
    return res.data;
  }
}
