import React from 'react';
// import component 👇

//import styles 👇
import 'react-modern-drawer/dist/index.css'

// style
import styles from '../css/pages.module.css';

import { FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// app bar
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//datepicker
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

//image uploading
import ImageUploading, { ImageListType } from "react-images-uploading";
import noImage from './../../assets/images/no-image.png';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { SelectionRange } from 'typescript';
import { Category, SubCategory } from '../interfaces/ProductInterface';
import { Product } from "../interfaces/Product";
import categories from './categories';
import shops from './shops';
import subCategories from './subCategories';
import products from './products';
import DateTimePicker from '@mui/lab/DateTimePicker';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { OptionUnstyled } from '@mui/base';
import { AnyCnameRecord } from 'dns';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ConnectedTvOutlined } from '@mui/icons-material';

const mainColFields = [
    {
        basicInfo: [
            {
                id: 'pImages',
                label: 'Product Images',
                inputType: 'Image',
            },
            {
                id: 'pVideo',
                label: 'Product Video',
                inputType: 'Video',
            },
            {
                id: '',
                label: '* Product Name',
                inputType: ' ',
            },
            {
                id: '',
                label: '* Product Description',
                inputType: '',
            },
            {
                id: '',
                label: 'Category',
                inputType: '',
            }
        ],
        specification: [
            {
                id: '',
                label: '* Brand',
                inputType: 'Image',
            },
            {
                id: '',
                label: '* Manufacturer',
                inputType: 'Image',
            },
            {
                id: '',
                label: '* Manufactured Date',
                inputType: 'Image',
            },
            {
                id: '',
                label: '* Expiry Date',
                inputType: 'Image',
            },
            {
                id: '',
                label: '* Weight',
                inputType: 'Image',
            },
            {
                id: '',
                label: '* Length',
                inputType: 'Image',
            },
        ],
        SalesInformation: [
            {
                id: '',
                label: 'Variation1',
                inputType: '',
            },
            {
                id: '',
                label: 'Variation2',
                inputType: '',
            }
        ],
        VariationInformation: [
            {
                id: '',
                label: 'Price',
                inputType: '',
            },
            {
                id: '',
                label: 'Stock',
                inputType: '',
            },
            {
                id: '',
                label: 'SKU',
                inputType: '',
            },
        ],
        VariationList: [],
        Wholesale: ''
    }

];
const cursor = {
    cursor: 'pointer'
};

const LabelStyle = {
    fontSize: "5px",
    color: "#FFF"
};

const imageStyle = {
    width: '80px',
    height: '80px'
};

const cellStyle = {
    textAlign: 'center'
};


const ProductEntry = (props: any) => {
    const [product, setProduct] = React.useState(products[0]);

    const [serviceType, setServiceType] = React.useState('grocery');

    const handleChange = (event: any) => {
        setServiceType(event.target.value);
    };
    const [images, setImages] = React.useState([
        {
            index: 0,
            dataURL: '',
            name: '* Cover Photo'
        },
        {
            index: 1,
            dataURL: '',
            name: 'Image 1'
        },
        {
            index: 2,
            dataURL: '',
            name: 'Image 2'
        },
        {
            index: 3,
            dataURL: '',
            name: 'Image 3'
        },
        {
            index: 4,
            dataURL: '',
            name: 'Image 4'
        },
        {
            index: 5,
            dataURL: '',
            name: 'Image 5'
        },
        {
            index: 6,
            dataURL: '',
            name: 'Image 6'
        },
        {
            index: 7,
            dataURL: '',
            name: 'Image 7'
        },
        {
            index: 8,
            dataURL: '',
            name: 'Image 8'
        },
    ]);
    const [video, setVideo] = React.useState([
        {
            index: 0,
            dataURL: '',
            name: 'Product Video'
        }
    ]);
    const [colorFamilyImages, setColorFamilyImages] = React.useState([
        {
            index: 0,
            dataURL: '',
            name: 'Red'
        },
        {
            index: 1,
            dataURL: '',
            name: 'White'
        },
        {
            index: 2,
            dataURL: '',
            name: 'Black'
        },
        {
            index: 3,
            dataURL: '',
            name: 'Brown'
        }
    ]);
    const [sizeChart, setSizeChart] = React.useState([
        {
            index: 0,
            dataURL: '',
            name: 'Example'
        }
    ]);

    const [value, setValue] = React.useState(new Date());

    const handleDateChange = (newValue: any) => {
        setValue(newValue);
    };

    const [values, setValues] = React.useState({
        weight: '',
        length: '',
    });



    const handleChangeWH = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
    };



    const tempData_ProductImages: any[] = [];
    const tempData_ProductVideo: any[] = [];
    const tempData_ColorFamilyImages: any[] = [];
    const tempData_SizeChartImages: any[] = [];

    const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

    const maxNumber = 69;

    const onChangeProductImages = (
        imageList: any,
    ) => {
        if (imageList.length > 0) {
            let temp = images;
            let ind = temp.findIndex(img => img.index == selectedImageIndex);
            if (ind >= 0) {
                temp[ind].dataURL = imageList[0].dataURL;
                setImages(temp);
                let tempProduct: any = product;
                tempProduct.basicInformation.productImages = temp;
                setProduct(product);
            }
        }
        setSelectedImageIndex(-1)
    };

    const onChangeProductVideo = (
        imageList: ImageListType,
    ) => {
        if (imageList.length > 0) {
            let temp: any[] = video;
            if (temp.length > 0) {
                temp[0].dataURL = imageList[0].dataURL;
                setVideo(temp);
                let tempProduct: any = product;
                tempProduct.basicInformation.productVideo = temp;
                setProduct(product);
            }
        }
        setSelectedImageIndex(-1)
    };

    // const onChangeColorFamilyImages = (
    //     imageList: ImageListType,
    // ) => {
    //     if (imageList.length > 0) {
    //         let temp: any[] = colorFamilyImages;
    //         let ind = temp.findIndex(img => img.index == selectedImageIndex);
    //         if (ind >= 0) {
    //             temp[ind].dataURL = imageList[0].dataURL;
    //             setColorFamilyImages(temp);
    //             let tempProduct : any = product;
    //             tempProduct.colorfamily = temp;
    //             setProduct(product);
    //         }
    //     }
    //     setSelectedImageIndex(-1)
    // };

    // const onChangeSizeChartImage = (
    //     imageList: ImageListType,
    // ) => {
    //     if (imageList.length > 0) {
    //         let temp: any[] = sizeChart;
    //         if (temp.length > 0) {
    //             temp[0].dataURL = imageList[0].dataURL;
    //             setSizeChart(temp);
    //             let tempProduct : any = product;
    //             tempProduct.sizeChart = temp;
    //             setProduct(product);
    //         }
    //     }
    //     setSelectedImageIndex(-1)
    // };

    const onOpenBrowse = (imageIndex: number) => {
        setSelectedImageIndex(imageIndex);
    }

    const ImageWrapper = () => {
        return (
            <ImageUploading
                multiple
                value={tempData_ProductImages}
                onChange={onChangeProductImages}
                maxNumber={maxNumber}
            >
                {({
                    imageList,
                    onImageRemoveAll,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI

                    <div className="upload__image-wrapper">
                        <img src={images[0].dataURL == '' ? noImage : images[0].dataURL} alt="Product" style={imageStyle} onClick={() => { onOpenBrowse(0); onImageUpload(); }} />
                        <img src={images[1].dataURL == '' ? noImage : images[1].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(1); }} />
                        <img src={images[2].dataURL == '' ? noImage : images[2].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(2); }} />
                        <img src={images[3].dataURL == '' ? noImage : images[3].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(3); }} />
                        <img src={images[4].dataURL == '' ? noImage : images[4].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(4); }} />
                        <img src={images[5].dataURL == '' ? noImage : images[5].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(5); }} />
                        <img src={images[6].dataURL == '' ? noImage : images[6].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(6); }} />
                        <img src={images[7].dataURL == '' ? noImage : images[7].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(7); }} />
                        <img src={images[8].dataURL == '' ? noImage : images[8].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(8); }} />
                    </div>
                )}
            </ImageUploading>
        )
    }

    const ImageWrapperVideo = () => {
        return (
            <ImageUploading
                multiple
                value={tempData_ProductVideo}
                onChange={onChangeProductVideo}
                maxNumber={maxNumber}
            >
                {({
                    imageList,
                    onImageRemoveAll,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI

                    <div className="upload__image-wrapper">
                        <img src={video[0].dataURL == '' ? noImage : video[0].dataURL} alt="Product" style={imageStyle} onClick={() => { onOpenBrowse(0); onImageUpload(); }} />
                    </div>
                )}
            </ImageUploading>
        )
    }

    // const ImageWrapperColorFamily = () => {
    //     return (
    //         <ImageUploading
    //             multiple
    //             value={tempData_ColorFamilyImages}
    //             onChange={onChangeColorFamilyImages}
    //             maxNumber={maxNumber}
    //         >
    //             {({
    //                 imageList,
    //                 onImageRemoveAll,
    //                 onImageUpload,
    //                 onImageUpdate,
    //                 onImageRemove,
    //                 isDragging,
    //                 dragProps
    //             }) => (
    //                 // write your building UI

    //                 <div className="upload__image-wrapper">
    //                     <img src={colorFamilyImages[0].dataURL == '' ? noImage : colorFamilyImages[0].dataURL} alt="Product" style={imageStyle} onClick={() => { onOpenBrowse(0); onImageUpload(); }} />
    //                     <img src={colorFamilyImages[1].dataURL == '' ? noImage : colorFamilyImages[1].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(1); }} />
    //                     <img src={colorFamilyImages[2].dataURL == '' ? noImage : colorFamilyImages[2].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(2); }} />
    //                     <img src={colorFamilyImages[3].dataURL == '' ? noImage : colorFamilyImages[3].dataURL} alt="Product" style={imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(3); }} />
    //                 </div>
    //             )}
    //         </ImageUploading>
    //     )
    // }

    // const ImageWrapperSizeChart = () => {
    //     return (
    //         <ImageUploading
    //             multiple
    //             value={tempData_SizeChartImages}
    //             onChange={onChangeSizeChartImage}
    //             maxNumber={maxNumber}
    //         >
    //             {({
    //                 imageList,
    //                 onImageRemoveAll,
    //                 onImageUpload,
    //                 onImageUpdate,
    //                 onImageRemove,
    //                 isDragging,
    //                 dragProps
    //             }) => (
    //                 // write your building UI

    //                 <div className="upload__image-wrapper">
    //                     <img src={sizeChart[0].dataURL == '' ? noImage : sizeChart[0].dataURL} alt="Product" style={imageStyle} onClick={() => { onOpenBrowse(0); onImageUpload(); }} />
    //                 </div>
    //             )}
    //         </ImageUploading>
    //     )
    // }
    const [subOptionList, setOptionList] = React.useState([]);

    const [variationList, setVariationList] = React.useState([
        {
            id: 0,
            name: 'variation 1', // variation 1 , variation2 etc.,
            options: [
                {
                    optionName: 'Wholesale',
                    subOptions: [
                        {
                            subOptionId: 0,
                            subOptionName: 'VIP Wholesaler',
                            price: 10,
                            stock: 5,
                            sku: 100
                        },
                        {
                            subOptionId: 1,
                            subOptionName: 'VVIP Wholesaler',
                            price: 8,
                            stock: 10,
                            sku: 100
                        }
                    ]
                }
            ]
        },
        {
            id: 1,
            name: 'variation 2', // variation 1 , variation2 etc.,
            options: [
                {
                    optionName: 'Special Wholesale',
                    subOptions: [
                        {
                            subOptionId: 0,
                            subOptionName: 'VIP Wholesaler',
                            price: 10,
                            stock: 5,
                            sku: 100
                        },
                        {
                            subOptionId: 1,
                            subOptionName: 'VVIP Wholesaler',
                            price: 8,
                            stock: 10,
                            sku: 100
                        }
                    ]
                }
            ]
        }
    ]);

    const [optionValues, setOptionValues] = React.useState({
        price: 0,
        stock: 0,
        sku: 0
    });

    const handleChangeO = (prop: any) => (event: any) => {
        setOptionValues({ ...optionValues, [prop]: event.target.value });
    };

    const setValuestoVariation = () => {
        let tempV = variationList;
        for (let v of tempV) {
            v.options[0].subOptions.map((subO) => {
                subO.price = optionValues.price;
                subO.stock = optionValues.stock;
                subO.sku = optionValues.sku;
            })
        }
        setVariationList([...tempV]);
    }

    const changedVariationName = (props: { optionName: string, id: number }) => (event: any) => {
        console.log('event', event)
        let temp = variationList;
        let ind = temp.findIndex(v => v.id == props.id);
        if (ind > -1) temp[ind].options[0].optionName = event.target.value;
        setVariationList([...temp]);
    }

    const subOptionChanged = (subOption: any, option: any, variation: any) => (event: any) => {
        console.log('subOptionChanged')
        let tempV = variationList;
        let ind = tempV.findIndex(v => v.id == variation.id);
        if (ind > -1) {
            let ind3 = tempV[ind].options[0].subOptions.findIndex(y => y.subOptionId == subOption.subOptionId);
            if (ind3 > -1) {
                tempV[ind].options[0].subOptions[ind3].subOptionName = event.target.value;
                console.log('event.target.value', event.target.value, tempV[ind].options[0].subOptions[ind3].subOptionName)
                setVariationList([...tempV]);
            }
        }
    }
    const subOptionDeleted = (subOption: any, option: any, variation: any) => {
        console.log('subOptionDeleted', subOption, option, variation);
        let tempV = variationList;

        let ind = tempV.findIndex(v => v.id == variation.id);

        if (ind > -1) {
            let suboptions = tempV[ind].options[0].subOptions;
            let ind3 = suboptions.findIndex(y => y.subOptionId == subOption.subOptionId);
            if (ind3 > -1) {
                tempV[ind].options[0].subOptions.splice(ind3, 1);
                setVariationList([...tempV]);
                console.log('tempV', tempV, variationList)

            }
        }
    }

    const addVariation = () => {
        let temp = Object.assign([], variationList);
        temp.push(
            {
                id: variationList.length,
                name: 'variation ' + (variationList.length + 1), // variation 1 , variation2 etc.,
                options: [
                    {
                        optionName: 'Premium Wholesale',
                        subOptions: [
                            {
                                subOptionId: 0,
                                subOptionName: 'VIP Level1',
                                price: 0,
                                stock: 0,
                                sku: 0
                            },
                            {
                                subOptionId: 1,
                                subOptionName: 'VIP Level2',
                                price: 0,
                                stock: 0,
                                sku: 0
                            }
                        ]
                    }
                ]
            }
        )
        setVariationList([...temp]);
    }

    const addSubOption = (option: any, variation: any) => {
        let temp = variation.options[0].subOptions;
        temp.push(
            {
                subOptionId: 0,
                subOptionName: 'Premium Level1',
                price: 5,
                stock: 100,
                sku: 100

            }
        )
        let tempV = variationList;
        let ind = tempV.findIndex(v => v.id == variation.id);
        if (ind > -1) tempV[ind].options[0].subOptions = temp;
        setVariationList([...tempV]);
    }

    const selectTemplate = [];
    for (let cate of categories) {
        selectTemplate.push(<MenuItem value={cate.categoryId}> {cate.name} </MenuItem>);
    }

    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    const handleChangeCategory = (event: any) => {
        console.log('event', event)
        let index = categories.findIndex(cat => cat.categoryId == event.target.value)
        if (index > -1) {
            setSelectedCategory(categories[index]);
        }
    };

    return (
        <>
            {/* <div style={{ alignItems: "center" }}> */}
            <div>
                <div style={{  margin: "15px" }}>
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={4}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Select Categories
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ p: 1 }}>

                            <Box sx={{ minWidth: '100%' }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Category </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={selectedCategory.categoryId}
                                        label={selectedCategory.name}
                                        onChange={handleChangeCategory}
                                    >
                                        {selectTemplate}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography className={styles.send_typography} variant="subtitle2" component="div" sx={{ flexGrow: 1, mb: 3 }}>
                        Basic Information
                    </Typography>
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={4} sx={{ p: 1 }}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Product Images
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ p: 1 }}>
                            {ImageWrapper()}
                        </Grid>
                        <Grid item xs={4} sx={{ p: 1 }}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Product Video
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ p: 1 }}>
                            {ImageWrapperVideo()}
                        </Grid>

                        <Grid item xs={4} sx={{ pb: 3 }}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                * Product Name
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ pb: 3 }}>
                            <TextField className={styles.send_textfield}  id="outlined-basic" label=" * Product Name" variant="outlined" sx={{ width: '100%', height: '40px' }} />
                        </Grid>
                        <Grid item xs={4} sx={{ pb: 3 }}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                * Product Description
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ pb: 3 }}>
                            <TextField className={styles.send_textfield}  id="outlined-basic" label="* Product Description" variant="outlined" sx={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={4} sx={{ pb: 3 }}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Category
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ pb: 3 }}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                {selectedCategory.name}

                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography className={styles.send_typography} variant="subtitle2" component="div" sx={{ flexGrow: 1, mb: 3 }}>
                        Specification
                    </Typography>
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={6}>
                            <Grid container sx={{ mb: 2 }}>
                                <Grid item xs={4}>
                                    <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                        * Brand
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField className={styles.send_textfield}  id="outlined-basic" label="Brand" variant="outlined" sx={{ width: '100%' }} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container sx={{ mb: 2 }}>
                                <Grid item xs={4}>
                                    <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                        * Manufacturer
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Box sx={{ minWidth: 200 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Select Manufacturer</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={serviceType}
                                                label="Manufacturer"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value={'grocery'}>Asia Beverage Co.,ltd</MenuItem>
                                                <MenuItem value={'grocery'}>Coca Cola Pinya Co.,ltd</MenuItem>
                                                <MenuItem value={'grocery'}>Myanmar Brewery Co.,ltd</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={6}>
                            <Grid container sx={{ mb: 2 }}>
                                <Grid item xs={4}>
                                    <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                        * Manufactured Date
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ width: '100%' }}>
                                        <DateTimePicker
                                            label="Date&Time picker"
                                            value={value}
                                            onChange={handleDateChange}
                                            renderInput={(params: any) => <TextField className={styles.send_textfield}  {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={6}>
                            <Grid container sx={{ mb: 2 }}>
                                <Grid item xs={4}>
                                    <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                        * Expiry Date
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ width: '100%' }}>
                                        <DateTimePicker
                                            label="Date&Time picker"
                                            value={value}
                                            onChange={handleDateChange}
                                            renderInput={(params: any) => <TextField className={styles.send_textfield}  {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={6}>
                            <Grid container sx={{ mb: 2 }}>
                                <Grid item xs={4}>
                                    <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                        * Weight
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-weight"
                                            value={values.weight}
                                            onChange={handleChangeWH('weight')}
                                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                            aria-describedby="outlined-weight-helper-text"
                                            inputProps={{
                                                'aria-label': 'weight',
                                            }}
                                        />
                                        {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Stack direction="row" spacing={2}>
                        <Typography className={styles.send_typography} variant="subtitle2" component="div" sx={{ mb: 3 }}>
                            Sales Information
                        </Typography>
                        <AddCircleIcon sx={{ color: '#E39435', fontSize: 28, ml: 2 }} onClick={() => addVariation()} style={cursor}></AddCircleIcon>
                    </Stack>

                    {
                        variationList.map((variation) => (
                            <Grid container sx={{ mb: 3 }}>
                                <Grid item xs={4}>
                                    <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                        {variation.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    {
                                        variation.options.map((option: any) => (

                                            <Paper sx={{ p: 3 }}>
                                                <Grid container>
                                                    <Grid item xs={4}>
                                                        <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                                            Name
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        {/* <TextField className={styles.send_textfield}  id="outlined-basic" label="" variant="outlined" sx={{ width: '100%', mb: 1 }}
                                                            defaultValue={option.optionName} onChange={() => changedVariationName({ optionName: option.optionName, id: variation.id })} /> */}
                                                        <FormControl sx={{ width: 'calc(100% - 30px)', mb: 1 }} variant="outlined">
                                                                            <OutlinedInput
                                                                                id="outlined-adornment-weight"
                                                                                value={option.optionName}
                                                                                onChange={changedVariationName({ optionName: option.optionName, id: variation.id })}
                                                                            endAdornment={<InputAdornment position="start"></InputAdornment>}
                                                                            aria-describedby="outlined-weight-helper-text"
                                                                            inputProps={{
                                                                                'aria-label': '',
                                                                            }} />
                                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Stack direction="row" spacing={2}>
                                                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ p: 1 }}>
                                                                Options
                                                            </Typography>

                                                        </Stack>

                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <>
                                                            {option.subOptions.map((subOption: any) => (

        
                                                                    <Stack direction="row" spacing={2}>

                                                                        {/* <TextField className={styles.send_textfield}  id="outlined-basic" label={subOption.subOptionName} variant="outlined" sx={{ width: 'calc(100% - 30px)', mb: 1 }}
                                                                            defaultValue={subOption.subOptionName} onChange={() => subOptionChanged(subOption, option, variation)} /> */}
                                                                        <FormControl sx={{ width: 'calc(100% - 30px)', mb: 1 }} variant="outlined">
                                                                            <OutlinedInput
                                                                                id="outlined-adornment-weight"
                                                                                value={subOption.subOptionName}
                                                                                onChange={subOptionChanged(subOption, option, variation)}
                                                                            endAdornment={<InputAdornment position="start">S$</InputAdornment>}
                                                                            aria-describedby="outlined-weight-helper-text"
                                                                            inputProps={{
                                                                                'aria-label': '',
                                                                            }} />
                                                                        </FormControl>
                                                                        <DeleteIcon sx={{ color: '#E39435', fontSize: 24, mr: 2 }} style={cursor} onClick={() => subOptionDeleted(subOption, option, variation)}></DeleteIcon>
                                                                    </Stack>

                                                            ))}
                                                        </>

                                                        <Button variant="contained" style={{ backgroundColor: '#E39435', color: "#FFF", width: '150px', height: '40px', margin: '4px', fontSize: '12px' }}
                                                            onClick={() => addSubOption(option, variation)}>
                                                            <AddIcon sx={{ color: '#FFF', fontSize: 18 }} style={cursor}></AddIcon>
                                                            Add Options
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        ))}


                                </Grid>
                            </Grid>

                        ))
                    }

                    <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={4}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                Variation Information
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Stack direction="row" spacing={2}>
                                <FormControl sx={{ minWidth: 120 }} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        value={optionValues.price}
                                        onChange={handleChangeO('price')}
                                        endAdornment={<InputAdornment position="start">S$</InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'price',
                                        }}
                                    />
                                </FormControl>
                                <FormControl sx={{ minWidth: 120 }} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        value={optionValues.stock}
                                        onChange={handleChangeO('stock')}
                                        endAdornment={<InputAdornment position="end">Pcs</InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'stock',
                                        }}
                                    />
                                </FormControl>
                                <FormControl sx={{ minWidth: 120 }} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        value={optionValues.sku}
                                        onChange={handleChangeO('sku')}
                                        endAdornment={<InputAdornment position="start"></InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'sku',
                                        }}
                                    />
                                </FormControl>
                                <Button variant="contained" style={{ backgroundColor: '#E39435', color: "#FFF", width: '200px', height: '56px', marginLeft: '8px', fontSize: '12px' }}
                                    onClick={setValuestoVariation}>
                                    Apply to All
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={4}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                Variation List
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 600 }} aria-label="spanning table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={{ width: '100px' }}>Wholesale Plan</TableCell>
                                            <TableCell align="center" sx={{ width: '100px' }}>Wholesale Type</TableCell>
                                            <TableCell align="center" sx={{ width: '100px' }}>Price</TableCell>
                                            <TableCell align="center" sx={{ width: '100px' }}>Stock</TableCell>
                                            <TableCell align="center" sx={{ width: '100px' }}>SKU</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {variationList.map((row: any) => (
                                            <>
                                                {row.options.map((option: any) => (
                                                    <TableRow >

                                                        <TableCell rowSpan={row.options.length} align="center"
                                                            sx={{ width: '150px' }}>
                                                            {option.optionName}
                                                        </TableCell>
                                                        <TableCell sx={{ width: '100%' }}>
                                                            {option.subOptions.map((subOption: any) => (
                                                                <TableRow sx={{ width: '100%' }}>
                                                                    <TableCell sx={{ width: '150px' }}>{subOption.subOptionName}</TableCell>
                                                                    <TableCell sx={{ width: '150px' }}>{subOption.price}</TableCell>
                                                                    <TableCell sx={{ width: '150px' }}>{subOption.stock}</TableCell>
                                                                    <TableCell >{subOption.sku}</TableCell>
                                                                </TableRow>

                                                            ))}
                                                        </TableCell>
                                                    </TableRow>

                                                ))}
                                            </>

                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>

                    {/* <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={4}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                Wholesale
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                Wholesale Prices  is only available when all variations of the same price.
                            </Typography>
                        </Grid>
                    </Grid> */}

                    {/* <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={4}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                Color Family
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            {ImageWrapperColorFamily()}
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={4}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, p: 1 }}>
                                Size Chart
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            {ImageWrapperSizeChart()}
                        </Grid>
                    </Grid> */}
                </div>
                <div style={{ float: 'right', margin: '15px' }}>
                    <Button variant="contained" style={{ backgroundColor: '#E39435', color: "#FFF", width: '150px', height: '56px', marginLeft: '8px', fontSize: '12px' }}>
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ProductEntry


