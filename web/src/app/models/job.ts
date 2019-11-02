export interface Job {
    locations: Locations
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