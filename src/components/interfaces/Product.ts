import { Shop, Category, SubCategory } from "./ProductInterface";
export interface Unit {
    unitId: number,
    productId : number,
    name: string,
}

export interface Order {
    id: number,
    orderedDate : Date,
    items : OrderItem[],
}

export interface OrderItem {
    id: number,
    product : Product,
    qty : number,
    price : number,
}

export interface Product {
    id: number;
    name: String;
    price: number;
    shop: Shop;
    category: Category;
    subCategory: SubCategory;
    basicInformation: {
        productImages: [
            {
                index: number; // 0 1 etc
                dataURL: string; // based 64 string
                name: string; //* Cover Photo Image 1 etc..
            },
            {
                index: number; // 0 1 etc
                dataURL: string; // based 64 string
                name: string; //* Cover Photo Image 1 etc..
            },
            {
                index: number; // 0 1 etc
                dataURL: string; // based 64 string
                name: string; //* Cover Photo Image 1 etc..
            }
        ];
        productVideo: {
            index: number; // 0 1 etc
            dataURL: string; // based 64 string
            name: string; //* Cover Photo Image 1 etc..
        };
        productName: string;
        productDescription: string;
        category: Category;
        subCategory: SubCategory;
    };

    specification: {
        brand: string;
        manufacturer: string;
        manufacturedDate: Date;
        expiryDate: Date;
        weight: number;
        weightUnit: Unit;
        length: number;
        lengthUnit: Unit;
    };
    salesInformation: any;
    // salesInformation: [
    //     {
    //         id: number,
    //         name: string, // variation 1 , variation2 etc.,
    //         options: [
    //             {
    //                 optionName: string,
    //                 subOptions : any[],
    //             }
    //         ]
    //     }
    // ],
    variationInfo: {
        price: number;
        stock: number;
        sku: number;
    };
    variationList: any;
}
