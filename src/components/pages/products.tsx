import { Category, SubCategory, Shop } from '../interfaces/ProductInterface';
import { Product } from "../interfaces/Product";
  
const products: Product[] = [
    {
        id: 0,
        name: 'Fresh Bananas',
        price: 10,
        shop: {
            shopId: 0,
            shopName: 'Farmart, Bedok',
            star: '4.9',
            duration: '8 mins',
            delivery: 'Free'
        },
        category:  {
            categoryId: 0,
            name: 'Fruits',
            image : 'category.png'
        },
        subCategory: {
            subCategoryId: 0,
            categoryId: 0,
            name: 'Organic',
        },
        basicInformation: {
            productImages: [
                {
                    index: 0, // 0 1 etc
                    dataURL: 'product1.png', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: 'product1-01.jpg', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: 'product1-02.jpg', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
            ],
            productVideo: {
                index: 0, // 0 1 etc
                dataURL: '', // based 64 string
                name: '', //* Cover Photo Image 1 etc..
            },
            productName: '',
            productDescription: '',
            category: {
                categoryId: 4,
                name: 'Diary',
                image : 'category.png'
            },
            subCategory: {
                subCategoryId: 0,
                categoryId: 5,
                name: 'Ready to Drink',
            },
        },

        specification: {
            brand : 'Banana',
            manufacturer : 'Fresh Mart Co.,ltd',
            manufacturedDate : new Date(),
            expiryDate : new Date(),
            weight : 7,
            weightUnit : 
            {
                unitId: 1,
                productId : 0,
                name: 'pcs',
            },
            length : 100,
            lengthUnit : {
                unitId: 1,
                productId : 0,
                name: 'pcs',
            }
        },
        salesInformation: [
            {
                id: 0,
                name: 'variation 1', // variation 1 , variation2 etc.,
                options: [
                    {
                        optionName: 'Wholesale',
                        subOptions : [
                            {
                                subOptionId : 0,
                                subOptionName: 'VIP Wholesaler',
                                price: 10,
                                stock: 5
                            },
                            {
                                subOptionId : 1,
                                subOptionName: 'VVIP Wholesaler',
                                price: 8,
                                stock: 10
                            }
                        ]
                    }
                ]
            },
        ],
        variationInfo: {
            price: 0,
            stock: 0,
            sku: 0
        },
        variationList: [
            {
                id: 0,
                name: 'variation 1', // variation 1 , variation2 etc.,
                options: [
                    {
                        optionName: 'Wholesale',
                        subOptions : [
                            {
                                subOptionId : 0,
                                subOptionName: 'VIP Wholesaler',
                                price: 10,
                                stock: 5,
                                sku : 10
                            },
                            {
                                subOptionId : 1,
                                subOptionName: 'VVIP Wholesaler',
                                price: 8,
                                stock: 10,
                                sku : 10
                            }
                        ]
                    }
                ]
            },
        ]
        // wholesale: '',
        // colorfamily: [
        //     {
        //         index: 0, // 0 1 etc
        //         dataURL: '', // based 64 string
        //         name: '', //* Cover Photo Image 1 etc..
        //     },
        //     {
        //         index: 1, // 0 1 etc
        //         dataURL: '', // based 64 string
        //         name: '', //* Cover Photo Image 1 etc..
        //     },
        // ],
        // sizeChart:
        // {
        //     index: 0, // 0 1 etc
        //     dataURL: '', // based 64 string
        //     name: '', //* Cover Photo Image 1 etc..
        // }
    },
    {
        id: 1,
        name: 'Red Apple',
        price: 10,
        shop: {
            shopId: 0,
            shopName: 'ABC Store',
            star: '4.9',
            duration: '8 mins',
            delivery: 'Free'
        },
        category: {
            categoryId: 4,
            name: 'Diary',
            image : 'category.png'
        },
        subCategory: {
            subCategoryId: 0,
            categoryId: 5,
            name: 'Ready to Drink',
        },
        basicInformation: {
            productImages: [
                {
                    index: 0, // 0 1 etc
                    dataURL: 'product2.png', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: '', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: '', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                }
            ],
            productVideo: {
                index: 0, // 0 1 etc
                dataURL: '', // based 64 string
                name: '', //* Cover Photo Image 1 etc..
            },
            productName: '',
            productDescription: '',
            category: {
                categoryId: 4,
                name: 'Diary',
                image : 'category.png'
            },
            subCategory: {
                subCategoryId: 0,
                categoryId: 5,
                name: 'Ready to Drink',
            },
        },

        specification: {
            brand : 'Banana',
            manufacturer : 'Fresh Mart Co.,ltd',
            manufacturedDate : new Date(),
            expiryDate : new Date(),
            weight : 1,
            weightUnit : {
                unitId: 0,
                productId : 0,
                name: 'Kg',
            },
            length : 0,
            lengthUnit : {
                unitId: 2,
                productId : 0,
                name: 'm',
            }
        },
        salesInformation: [],
        variationInfo: {
            price: 0,
            stock: 0,
            sku: 0
        },
        variationList: [],
    },
    {
        id: 2,
        name: 'Fresh Bananas',
        price: 10,
        shop: {
            shopId: 0,
            shopName: 'Farmart, Bedok',
            star: '4.9',
            duration: '8 mins',
            delivery: 'Free'
        },
        category:  {
            categoryId: 0,
            name: 'Fruits',
            image : 'category.png'
        },
        subCategory: {
            subCategoryId: 0,
            categoryId: 0,
            name: 'Organic',
        },
        basicInformation: {
            productImages: [
                {
                    index: 0, // 0 1 etc
                    dataURL: 'product1.png', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: 'product1-01.jpg', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: 'product1-02.jpg', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
            ],
            productVideo: {
                index: 0, // 0 1 etc
                dataURL: '', // based 64 string
                name: '', //* Cover Photo Image 1 etc..
            },
            productName: '',
            productDescription: '',
            category: {
                categoryId: 4,
                name: 'Diary',
                image : 'category.png'
            },
            subCategory: {
                subCategoryId: 0,
                categoryId: 5,
                name: 'Ready to Drink',
            },
        },

        specification: {
            brand : 'Banana',
            manufacturer : 'Fresh Mart Co.,ltd',
            manufacturedDate : new Date(),
            expiryDate : new Date(),
            weight : 7,
            weightUnit : 
            {
                unitId: 1,
                productId : 0,
                name: 'pcs',
            },
            length : 100,
            lengthUnit : {
                unitId: 1,
                productId : 0,
                name: 'pcs',
            }
        },
        salesInformation: [
            {
                id: 0,
                name: 'variation 1', // variation 1 , variation2 etc.,
                options: [
                    {
                        optionName: 'Wholesale',
                        subOptions : [
                            {
                                subOptionId : 0,
                                subOptionName: 'VIP Wholesaler',
                                price: 10,
                                stock: 5
                            },
                            {
                                subOptionId : 1,
                                subOptionName: 'VVIP Wholesaler',
                                price: 8,
                                stock: 10
                            }
                        ]
                    }
                ]
            },
        ],
        variationInfo: {
            price: 0,
            stock: 0,
            sku: 0
        },
        variationList: [
            {
                id: 0,
                name: 'variation 1', // variation 1 , variation2 etc.,
                options: [
                    {
                        optionName: 'Wholesale',
                        subOptions : [
                            {
                                subOptionId : 0,
                                subOptionName: 'VIP Wholesaler',
                                price: 10,
                                stock: 5,
                                sku : 10
                            },
                            {
                                subOptionId : 1,
                                subOptionName: 'VVIP Wholesaler',
                                price: 8,
                                stock: 10,
                                sku : 10
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 3,
        name: 'Red Apple',
        price: 10,
        shop: {
            shopId: 0,
            shopName: 'ABC Store',
            star: '4.9',
            duration: '8 mins',
            delivery: 'Free'
        },
        category: {
            categoryId: 4,
            name: 'Diary',
            image : 'category.png'
        },
        subCategory: {
            subCategoryId: 0,
            categoryId: 5,
            name: 'Ready to Drink',
        },
        basicInformation: {
            productImages: [
                {
                    index: 0, // 0 1 etc
                    dataURL: 'product2.png', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: '', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: '', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                }
            ],
            productVideo: {
                index: 0, // 0 1 etc
                dataURL: '', // based 64 string
                name: '', //* Cover Photo Image 1 etc..
            },
            productName: '',
            productDescription: '',
            category: {
                categoryId: 4,
                name: 'Diary',
                image : 'category.png'
            },
            subCategory: {
                subCategoryId: 0,
                categoryId: 5,
                name: 'Ready to Drink',
            },
        },

        specification: {
            brand : 'Banana',
            manufacturer : 'Fresh Mart Co.,ltd',
            manufacturedDate : new Date(),
            expiryDate : new Date(),
            weight : 1,
            weightUnit : {
                unitId: 0,
                productId : 0,
                name: 'Kg',
            },
            length : 0,
            lengthUnit : {
                unitId: 2,
                productId : 0,
                name: 'm',
            }
        },
        salesInformation: [],
        variationInfo: {
            price: 0,
            stock: 0,
            sku: 0
        },
        variationList: [],
    },
    {
        id: 4,
        name: 'Fresh Bananas',
        price: 10,
        shop: {
            shopId: 0,
            shopName: 'Farmart, Bedok',
            star: '4.9',
            duration: '8 mins',
            delivery: 'Free'
        },
        category:  {
            categoryId: 0,
            name: 'Fruits',
            image : 'category.png'
        },
        subCategory: {
            subCategoryId: 0,
            categoryId: 0,
            name: 'Organic',
        },
        basicInformation: {
            productImages: [
                {
                    index: 0, // 0 1 etc
                    dataURL: 'product1.png', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: 'product1-01.jpg', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: 'product1-02.jpg', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
            ],
            productVideo: {
                index: 0, // 0 1 etc
                dataURL: '', // based 64 string
                name: '', //* Cover Photo Image 1 etc..
            },
            productName: '',
            productDescription: '',
            category: {
                categoryId: 4,
                name: 'Diary',
                image : 'category.png'
            },
            subCategory: {
                subCategoryId: 0,
                categoryId: 5,
                name: 'Ready to Drink',
            },
        },

        specification: {
            brand : 'Banana',
            manufacturer : 'Fresh Mart Co.,ltd',
            manufacturedDate : new Date(),
            expiryDate : new Date(),
            weight : 7,
            weightUnit : 
            {
                unitId: 1,
                productId : 0,
                name: 'pcs',
            },
            length : 100,
            lengthUnit : {
                unitId: 1,
                productId : 0,
                name: 'pcs',
            }
        },
        salesInformation: [
            {
                id: 0,
                name: 'variation 1', // variation 1 , variation2 etc.,
                options: [
                    {
                        optionName: 'Wholesale',
                        subOptions : [
                            {
                                subOptionId : 0,
                                subOptionName: 'VIP Wholesaler',
                                price: 10,
                                stock: 5
                            },
                            {
                                subOptionId : 1,
                                subOptionName: 'VVIP Wholesaler',
                                price: 8,
                                stock: 10
                            }
                        ]
                    }
                ]
            },
        ],
        variationInfo: {
            price: 0,
            stock: 0,
            sku: 0
        },
        variationList: [
            {
                id: 0,
                name: 'variation 1', // variation 1 , variation2 etc.,
                options: [
                    {
                        optionName: 'Wholesale',
                        subOptions : [
                            {
                                subOptionId : 0,
                                subOptionName: 'VIP Wholesaler',
                                price: 10,
                                stock: 5,
                                sku : 10
                            },
                            {
                                subOptionId : 1,
                                subOptionName: 'VVIP Wholesaler',
                                price: 8,
                                stock: 10,
                                sku : 10
                            }
                        ]
                    }
                ]
            },
        ]
        // wholesale: '',
        // colorfamily: [
        //     {
        //         index: 0, // 0 1 etc
        //         dataURL: '', // based 64 string
        //         name: '', //* Cover Photo Image 1 etc..
        //     },
        //     {
        //         index: 1, // 0 1 etc
        //         dataURL: '', // based 64 string
        //         name: '', //* Cover Photo Image 1 etc..
        //     },
        // ],
        // sizeChart:
        // {
        //     index: 0, // 0 1 etc
        //     dataURL: '', // based 64 string
        //     name: '', //* Cover Photo Image 1 etc..
        // }
    },
    {
        id: 5,
        name: 'Red Apple',
        price: 10,
        shop: {
            shopId: 0,
            shopName: 'ABC Store',
            star: '4.9',
            duration: '8 mins',
            delivery: 'Free'
        },
        category: {
            categoryId: 4,
            name: 'Diary',
            image : 'category.png'
        },
        subCategory: {
            subCategoryId: 0,
            categoryId: 5,
            name: 'Ready to Drink',
        },
        basicInformation: {
            productImages: [
                {
                    index: 0, // 0 1 etc
                    dataURL: 'product2.png', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: '', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: '', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                }
            ],
            productVideo: {
                index: 0, // 0 1 etc
                dataURL: '', // based 64 string
                name: '', //* Cover Photo Image 1 etc..
            },
            productName: '',
            productDescription: '',
            category: {
                categoryId: 4,
                name: 'Diary',
                image : 'category.png'
            },
            subCategory: {
                subCategoryId: 0,
                categoryId: 5,
                name: 'Ready to Drink',
            },
        },

        specification: {
            brand : 'Banana',
            manufacturer : 'Fresh Mart Co.,ltd',
            manufacturedDate : new Date(),
            expiryDate : new Date(),
            weight : 1,
            weightUnit : {
                unitId: 0,
                productId : 0,
                name: 'Kg',
            },
            length : 0,
            lengthUnit : {
                unitId: 2,
                productId : 0,
                name: 'm',
            }
        },
        salesInformation: [],
        variationInfo: {
            price: 0,
            stock: 0,
            sku: 0
        },
        variationList: [],
    },
    {
        id: 6,
        name: 'Fresh Bananas',
        price: 10,
        shop: {
            shopId: 0,
            shopName: 'Farmart, Bedok',
            star: '4.9',
            duration: '8 mins',
            delivery: 'Free'
        },
        category:  {
            categoryId: 0,
            name: 'Fruits',
            image : 'category.png'
        },
        subCategory: {
            subCategoryId: 0,
            categoryId: 0,
            name: 'Organic',
        },
        basicInformation: {
            productImages: [
                {
                    index: 0, // 0 1 etc
                    dataURL: 'product1.png', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: 'product1-01.jpg', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: 'product1-02.jpg', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
            ],
            productVideo: {
                index: 0, // 0 1 etc
                dataURL: '', // based 64 string
                name: '', //* Cover Photo Image 1 etc..
            },
            productName: '',
            productDescription: '',
            category: {
                categoryId: 4,
                name: 'Diary',
                image : 'category.png'
            },
            subCategory: {
                subCategoryId: 0,
                categoryId: 5,
                name: 'Ready to Drink',
            },
        },

        specification: {
            brand : 'Banana',
            manufacturer : 'Fresh Mart Co.,ltd',
            manufacturedDate : new Date(),
            expiryDate : new Date(),
            weight : 7,
            weightUnit : 
            {
                unitId: 1,
                productId : 0,
                name: 'pcs',
            },
            length : 100,
            lengthUnit : {
                unitId: 1,
                productId : 0,
                name: 'pcs',
            }
        },
        salesInformation: [
            {
                id: 0,
                name: 'variation 1', // variation 1 , variation2 etc.,
                options: [
                    {
                        optionName: 'Wholesale',
                        subOptions : [
                            {
                                subOptionId : 0,
                                subOptionName: 'VIP Wholesaler',
                                price: 10,
                                stock: 5
                            },
                            {
                                subOptionId : 1,
                                subOptionName: 'VVIP Wholesaler',
                                price: 8,
                                stock: 10
                            }
                        ]
                    }
                ]
            },
        ],
        variationInfo: {
            price: 0,
            stock: 0,
            sku: 0
        },
        variationList: [
            {
                id: 0,
                name: 'variation 1', // variation 1 , variation2 etc.,
                options: [
                    {
                        optionName: 'Wholesale',
                        subOptions : [
                            {
                                subOptionId : 0,
                                subOptionName: 'VIP Wholesaler',
                                price: 10,
                                stock: 5,
                                sku : 10
                            },
                            {
                                subOptionId : 1,
                                subOptionName: 'VVIP Wholesaler',
                                price: 8,
                                stock: 10,
                                sku : 10
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 7,
        name: 'Red Apple',
        price: 10,
        shop: {
            shopId: 0,
            shopName: 'ABC Store',
            star: '4.9',
            duration: '8 mins',
            delivery: 'Free'
        },
        category: {
            categoryId: 4,
            name: 'Diary',
            image : 'category.png'
        },
        subCategory: {
            subCategoryId: 0,
            categoryId: 5,
            name: 'Ready to Drink',
        },
        basicInformation: {
            productImages: [
                {
                    index: 0, // 0 1 etc
                    dataURL: 'product2.png', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: '', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                },
                {
                    index: 1, // 0 1 etc
                    dataURL: '', // based 64 string
                    name: '', //* Cover Photo Image 1 etc..
                }
            ],
            productVideo: {
                index: 0, // 0 1 etc
                dataURL: '', // based 64 string
                name: '', //* Cover Photo Image 1 etc..
            },
            productName: '',
            productDescription: '',
            category: {
                categoryId: 4,
                name: 'Diary',
                image : 'category.png'
            },
            subCategory: {
                subCategoryId: 0,
                categoryId: 5,
                name: 'Ready to Drink',
            },
        },

        specification: {
            brand : 'Banana',
            manufacturer : 'Fresh Mart Co.,ltd',
            manufacturedDate : new Date(),
            expiryDate : new Date(),
            weight : 1,
            weightUnit : {
                unitId: 0,
                productId : 0,
                name: 'Kg',
            },
            length : 0,
            lengthUnit : {
                unitId: 2,
                productId : 0,
                name: 'm',
            }
        },
        salesInformation: [],
        variationInfo: {
            price: 0,
            stock: 0,
            sku: 0
        },
        variationList: [],
    },
];

export default products