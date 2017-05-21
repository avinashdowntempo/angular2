import { Injectable } from '@angular/core';
import { ADVISOR } from '.././models/mock-advisor';

@Injectable()
export class AdvisorService {
    getAdvisor() {
        return Promise.resolve(ADVISOR);
    }
}