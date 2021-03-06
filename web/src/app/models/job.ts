import { Employer } from './employer';

export interface Jobs {
    data: Job[];
}

export interface Job{
    id: number;
    date_posted: string;
    date_updated: string;
    date_expires: string;
    employer_id: number;
    employer: Employer;
    locations: Locations;
    title: string;
    job_id: number;
    pay_rate: string;
    data_source: string;
    data_site: string;
    url: string;
    fake: number;
    created_at: string;
    updated_at: string;
    description:string;
    req_education:string;
}

export interface Locations {
    data: Location[];
}

export interface Location {
    id: number;
    name: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
    lat: number;
    lng: number;
    created_at: string;
    updated_at: string;
}
