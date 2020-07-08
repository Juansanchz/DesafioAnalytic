import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

const { URL } = environment;

export const apiCommerce = `${URL}/commerces`;

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
