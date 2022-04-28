const mainColFields = [
    {
        id: 0,
        label: 'Basic Information',
        inputs: [
            {
                id: '',
                label: 'Product Images',
                inputType: 'image',
                key: 'productImages'
            },
            {
                id: '',
                label: 'Product Video',
                inputType: 'video',
                key: 'productVideo'
            },
            {
                id: '',
                label: '* Product Name',
                inputType: 'textfield',
                key: 'productName'
            },
            {
                id: '',
                label: '* Product Description',
                inputType: 'textfield',
                key: 'productDescription'
            },
            {
                id: '',
                label: 'Category',
                inputType: 'label',
                key: 'category'
            }
        ],
    },
    {
        id: 0,
        label: 'Specification',
        inputs: [
            {
                id: '',
                label: '* Brand',
                inputType: 'textfield',
                key: 'brand'
            },
            {
                id: '',
                label: '* Manufacturer',
                inputType: 'textfield',
                key: 'manufacturer'
            },
            {
                id: '',
                label: '* Manufactured Date',
                inputType: 'datepicker',
                key: 'manufacturedDate'
            },
            {
                id: '',
                label: '* Expiry Date',
                inputType: 'datepicker',
                key: 'expiryDate'

            },
            {
                id: '',
                label: '* Weight',
                inputType: 'numeric',
                key: 'weight'

            },
            {
                id: '',
                label: '* Length',
                inputType: 'numeric',
                key: 'length'

            },
        ]
    },
    {
        id: 0,
        label: 'Sales Information',
        inputs: [
            {
                id: '',
                label: 'Variation1',
                inputType: 'form',
            },
            {
                id: '',
                label: 'Variation2',
                inputType: 'form',
            }
        ]
    },
    {
        id: 0,
        label: 'Variation Information',
        inputs: [
            {
                id: '',
                label: 'Price',
                inputType: 'numeric',
            },
            {
                id: '',
                label: 'Stock',
                inputType: 'numeric',
            },
            {
                id: '',
                label: 'SKU',
                inputType: 'numeric',
            },
            {
                id: '',
                label: 'Apply to All',
                inputType: 'button',
            },
        ]
    },
    {
        id: 0,
        label: 'Variation List',
        inputs: [
            {
                id: '',
                label: 'Variation List',
                inputType: 'table',
            }
        ]
    }
];

export default mainColFields
