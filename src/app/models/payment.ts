export interface Payment{
    id?:number;
    userId:number;
    carId:number;
    processDate?:Date;
    totalAmount:number;
}