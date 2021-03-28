export interface Rental{
    id?: number;
    carId: number;
    customerId: number;
    rentDate?: any;
    returnDate?: any | null;
}