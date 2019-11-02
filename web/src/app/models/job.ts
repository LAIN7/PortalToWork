export interface Job{
    id: number;
    date_posted: string;
    date_updated: string;
    date_expires: string;
    employer_id: number;
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
}

export interface Locations {
    data: Location[];
}

export interface Location {
    id: number,
    name: string,
    street: string,
    city: string,
    state: string,
    zipcode: string,
    created_at: string,
    updated_at: string
}
