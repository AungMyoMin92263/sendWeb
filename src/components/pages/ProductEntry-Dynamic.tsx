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

//image uploading
import ImageUploading, { ImageListType } from "react-images-uploading";
import noImage from './../../assets/images/no-image.png';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { SelectionRange } from 'typescript';
import { Category, SubCategory } from '../interfaces/ProductInterface';
import { Product } from "../interfaces/Product";
import categories from './categories';
import shops from './shops';
import subCategories from './subCategories';
import products from './products';
import mainColFields from './mainColField';
import { BreakfastDiningTwoTone } from '@mui/icons-material';

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
    const selectTemplate = [];
    for (let cate of categories) {
        selectTemplate.push(<MenuItem value={cate.categoryId}> {cate.name} </MenuItem>);
    }

    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    const handleChangeCategory = (event: any) => {
        console.log('event', event)
        let index = categories.findIndex(cat => cat.categoryId == event.target.value)
        if (index > 0) {
            setSelectedCategory(categories[index]);
        }
    };

    const [product, setProduct] = React.useState(products[0]);
    const [tempInputValue, setTempInputValue] = React.useState(null);
    const [currentKey, setCurrentKey] = React.useState('');
    const [input, setInput] = React.useState(mainColFields[0].inputs[0]);

    const changedInput = (key: string) => {
        //setTempInputValue(event.target.value);
        let temp: any = product;
        temp.basicInformation[key] = tempInputValue;
        setProduct(temp);
    }

    const checkKey = (input: {
        id: string,
        label: string,
        inputType: string,
        key: string
    }) => {
        switch (input.key) {
            case 'productName': {
                return (
                    <TextField className={styles.send_textfield}  id="outlined-basic" label="" variant="outlined" sx={{ width: '100%' }}
                        value={product.basicInformation.productName} onChange={() => changedInput(input.key)} />
                )
                break;
            }
            case 'productDescription': {
                return (
                    <TextField className={styles.send_textfield}  id="outlined-basic" label="" variant="outlined" sx={{ width: '100%' }}
                        value={product.basicInformation.productDescription} onChange={() => changedInput(input.key)} />
                )
                break;

            }
            case 'brand': {
                return (
                    <TextField className={styles.send_textfield}  id="outlined-basic" label="" variant="outlined" sx={{ width: '100%' }}
                        value={product.specification.brand} onChange={() => changedInput(input.key)} />
                )
                break;

            }
            case 'manufacturer': {
                return (
                    <TextField className={styles.send_textfield}  id="outlined-basic" label="" variant="outlined" sx={{ width: '100%' }}
                        value={product.specification.manufacturer} onChange={() => changedInput(input.key)} />
                )
                break;

            }
            case 'manufacturedDate': {
                return (
                    <TextField className={styles.send_textfield}  id="outlined-basic" label="" variant="outlined" sx={{ width: '100%' }}
                        value={product.specification.manufacturedDate} onChange={() => changedInput(input.key)} />
                )
                break;
            }
            case 'expiryDate': {
                return (
                    <TextField className={styles.send_textfield}  id="outlined-basic" label="" variant="outlined" sx={{ width: '100%' }}
                        value={product.specification.expiryDate} onChange={() => changedInput(input.key)} />
                )
                break;
            }
            case 'weight': {
                return (

                    <TextField className={styles.send_textfield}  id="outlined-basic" label="" variant="outlined" sx={{ width: '100%' }}
                        value={product.specification.weight} onChange={() => changedInput(input.key)} />
                )
                break;
            }
            case 'length': {
                return (
                    <TextField className={styles.send_textfield}  id="outlined-basic" label="" variant="outlined" sx={{ width: '100%' }}
                        value={product.specification.length} onChange={() => changedInput(input.key)} />
                )
                break;
            }
        }
    }
    // {
    //     id: string,
    //     label: string,
    //     inputType: string,
    //     key: string
    // }
    const dynamicInputs = (input: any) => {
        switch (input.inputType) {
            case 'image': {
                return (
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={4} sx={{ p: 1 }}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                {input.label}
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ p: 1 }}>
                            {ImageWrapper()}
                        </Grid>
                    </Grid>
                );
                break;
            }
            case 'video': {
                return (
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={4} sx={{ p: 1 }}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                {input.label}
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ p: 1 }}>
                            {ImageWrapperVideo()}
                        </Grid>
                    </Grid>
                );
                break;
            }
            case 'textfield': {
                return (
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item xs={4} sx={{ p: 1 }}>
                            <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                {input.label}
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ p: 1 }}>
                            { }
                        </Grid>
                    </Grid>
                );
                break;
            }
            case 'textarea': {
                break;
            }
            case 'label': {
                break;
            }
            case 'datepicker': {
                break;
            }
            case 'numeric': {
                break;
            }
            case 'select': {
                break;
            }
            case 'form': {
                break;
            }
            case 'button': {
                break;
            }
            case 'table': {
                break;
            }
            default: {
                break;
            }
        }
    }

    return (
        <>
            <div style={{ alignItems: "center" }}>
                <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "30px" }}>
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
                    {mainColFields.map((col) => (
                        <div>
                            <Typography className={styles.send_typography} variant="subtitle2" component="div" sx={{ flexGrow: 1, mb: 3 }}>
                                {col.label}
                            </Typography>
                           <>
                           { col.inputs.map((input) => (
                               <div>
                               { dynamicInputs(input) }
                               </div>
                            ))}
                            </>
                        </div>
                    ))}
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


