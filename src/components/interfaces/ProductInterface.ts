export interface Category {
    categoryId: number,
    name: string,
    image : string
}

export interface SubCategory {
    subCategoryId: number,
    categoryId: number,
    name: string,
}

export interface Shop {
    shopId : number,
    shopName: string,
    star: string,
    duration: string,
    delivery: string
}




