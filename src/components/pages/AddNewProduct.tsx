import React from 'react';
// import component 👇
import styles from '../css/pages.module.css';

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { MenuItem, Paper, Select } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
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
import categories from './categories';
import products from './products';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CachedIcon from '@mui/icons-material/Cached';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

//custom textfield
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import makeStyles from '@mui/styles/makeStyles';

//layout
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#E39435 !important',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#E39435 !important',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E39435 !important',
            color: '#1E2F23 !important'
        },
        '&:hover fieldset': {
            borderColor: '#E39435 !important',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#E39435 !important',
        },
    },
});

const useStyles = makeStyles({
    select: {
        '& fieldset': {
            borderColor: '#E39435 !important',
            color: '#1E2F23 !important'
        },
        '&:before': {
            borderColor: '#E39435 !important',
        },
        '&:after': {
            borderColor: '#E39435 !important',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: '#E39435 !important',
        },
    },
    icon: {
        fill: '#E39435 !important',
    },
    root: {
        color: '#E39435 !important',
    },
})


const ProductEntry = (props: any) => {
    const classes = useStyles();

    const [product, setProduct] = React.useState(products[0]);

    const [serviceType, setServiceType] = React.useState('grocery');

    if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);

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

    const onChangeSizeChartImage = (
        imageList: ImageListType,
    ) => {
        if (imageList.length > 0) {
            let temp: any[] = sizeChart;
            if (temp.length > 0) {
                temp[0].dataURL = imageList[0].dataURL;
                setSizeChart(temp);
                let tempProduct: any = product;
                tempProduct.sizeChart = temp;
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
                        {/* {imageDiv(images[0].dataURL, 0)} */}
                        <img src={images[0].dataURL == '' ? noImage : images[0].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onOpenBrowse(0); onImageUpload(); }} />
                        <img src={images[1].dataURL == '' ? noImage : images[1].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(1); }} />
                        <img src={images[2].dataURL == '' ? noImage : images[2].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(2); }} />
                        <img src={images[3].dataURL == '' ? noImage : images[3].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(3); }} />
                        <img src={images[4].dataURL == '' ? noImage : images[4].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(4); }} />
                        <img src={images[5].dataURL == '' ? noImage : images[5].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(5); }} />
                    </div>
                )}
            </ImageUploading>
        )
    }

    // const imageDiv = (url: string, index: number) => {
    //     if (url == '') {
    //         return <div className={styles.add_image_div}><div style={{ marginTop : '35px' }}>+ Add photo </div></div>;
    //     } else {
    //         return <img src={url} alt="Product" className={styles.product_imageStyle} onClick={() => { onOpenBrowse(index); }} />
    //     }
    // }

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
                        <img src={video[0].dataURL == '' ? noImage : video[0].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onOpenBrowse(0); onImageUpload(); }} />
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
    //                     <img src={colorFamilyImages[0].dataURL == '' ? noImage : colorFamilyImages[0].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onOpenBrowse(0); onImageUpload(); }} />
    //                     <img src={colorFamilyImages[1].dataURL == '' ? noImage : colorFamilyImages[1].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(1); }} />
    //                     <img src={colorFamilyImages[2].dataURL == '' ? noImage : colorFamilyImages[2].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(2); }} />
    //                     <img src={colorFamilyImages[3].dataURL == '' ? noImage : colorFamilyImages[3].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onImageUpload(); onOpenBrowse(3); }} />
    //                 </div>
    //             )}
    //         </ImageUploading>
    //     )
    // }

    const ImageWrapperSizeChart = () => {
        return (
            <ImageUploading
                multiple
                value={tempData_SizeChartImages}
                onChange={onChangeSizeChartImage}
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
                        <img src={sizeChart[0].dataURL == '' ? noImage : sizeChart[0].dataURL} alt="Product" className={styles.product_imageStyle} onClick={() => { onOpenBrowse(0); onImageUpload(); }} />
                    </div>
                )}
            </ImageUploading>
        )
    }

    const ImageWrapperVariation = () => {
        return (
            <ImageUploading
                multiple
                value={tempData_SizeChartImages}
                onChange={onChangeSizeChartImage}
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
                        <img src={sizeChart[0].dataURL == '' ? noImage : sizeChart[0].dataURL} alt="Product" className={styles.product_imageVarStyle} onClick={() => { onOpenBrowse(0); onImageUpload(); }} />
                    </div>
                )}
            </ImageUploading>
        )
    }
    const [subOptionList, setOptionList] = React.useState([]);

    const [variationList, setVariationList] = React.useState([
        {
            id: 0,
            name: 'variation 1', // variation 1 , variation2 etc.,
            options: [
                {
                    optionName: 'Colors',
                    subOptions: [
                        {
                            subOptionId: 0,
                            subOptionName: 'Pink',
                            price: 10,
                            stock: 5,
                            sku: 100
                        },
                        {
                            subOptionId: 1,
                            subOptionName: 'Yellow',
                            price: 8,
                            stock: 10,
                            sku: 100
                        },
                        {
                            subOptionId: 2,
                            subOptionName: 'Blue',
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
                    optionName: 'Sizes',
                    subOptions: [
                        {
                            subOptionId: 0,
                            subOptionName: 'XS',
                            price: 10,
                            stock: 5,
                            sku: 100
                        },
                        {
                            subOptionId: 2,
                            subOptionName: 'S',
                            price: 8,
                            stock: 10,
                            sku: 100
                        },
                        {
                            subOptionId: 3,
                            subOptionName: 'M',
                            price: 8,
                            stock: 10,
                            sku: 100
                        },
                        {
                            subOptionId: 4,
                            subOptionName: 'L',
                            price: 8,
                            stock: 10,
                            sku: 100
                        },
                        {
                            subOptionId: 5,
                            subOptionName: 'XL',
                            price: 8,
                            stock: 10,
                            sku: 100
                        },
                        {
                            subOptionId: 6,
                            subOptionName: 'XXL',
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

    const changedOptionName = (props: { optionName: string, id: number }) => (event: any) => {
        console.log('event', event)
        let temp = variationList;
        let ind = temp.findIndex(v => v.id == props.id);
        if (ind > -1) temp[ind].options[0].optionName = event.target.value;
        setVariationList([...temp]);
    }

    const changedVariationName = (props: { name: string, id: number }) => (event: any) => {
        let temp = variationList;
        let ind = temp.findIndex(v => v.id == props.id);
        if (ind > -1) temp[ind].name = event.target.value;
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

    // const variationDeleted = (variation: any) => {
    //     console.log('subOptionDeleted', subOption, option, variation);
    //     let tempV = variationList;

    //     let ind = tempV.findIndex(v => v.id == variation.id);

    //     if (ind > -1) {
    //         let suboptions = tempV[ind].options[0].subOptions;
    //         let ind3 = suboptions.findIndex(y => y.subOptionId == subOption.subOptionId);
    //         if (ind3 > -1) {
    //             tempV[ind].options[0].subOptions.splice(ind3, 1);
    //             setVariationList([...tempV]);
    //             console.log('tempV', tempV, variationList)

    //         }
    //     }
    // }

    const addVariation = () => {
        let temp = Object.assign([], variationList);
        temp.push(
            {
                id: variationList.length,
                name: 'variation ' + (variationList.length + 1), // variation 1 , variation2 etc.,
                options: [
                    {
                        optionName: 'Gender',
                        subOptions: [
                            {
                                subOptionId: 0,
                                subOptionName: 'Men Wear',
                                price: 0,
                                stock: 0,
                                sku: 0
                            },
                            {
                                subOptionId: 1,
                                subOptionName: 'Women Wear',
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
        let index = variation.options[0].subOptions.length - 1;
        temp.push(
            {
                subOptionId: variation.options[0].subOptions[index].subOptionId + 1,
                subOptionName: 'SubOption Name',
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

    const addIconDisplay = (subOption: any, variation: any) => {
        let temp = variationList;
        let index = temp.findIndex(v => v.id == variation.id);
        if (index > -1) {
            //let ind = variationList[index].options[0].subOptions.findIndex(o=> o.subOptionId == subOption.subOptionId);
            if (subOption.subOptionId == temp[index].options[0].subOptions[temp[index].options[0].subOptions.length - 1].subOptionId) {
                return <AddIcon className={`${styles.primary_color} ${styles.cursor}`} onClick={() => addSubOption(variation.options[0], variation)} />;
            } else <></>;
        } else <></>;
        // setVariationList([...temp]);
    }

    const selectTemplate = [];
    for (let cate of categories) {
        selectTemplate.push(<MenuItem value={cate.categoryId}> {cate.name} </MenuItem>);
    }

    return (
        <>
            <div className={styles.wrapper}>
                <Box
                    sx={{
                        bgcolor: '#E5E5E5',
                        maxWidth: '100%',
                        padding: '15px',
                        marginBottom: '15px'
                    }}
                >
                    <Typography className={styles.send_typography_page_title} variant="h6" component="div" sx={{ flexGrow: 1, mb: 4, mt: 1 }}>
                        Add new product
                    </Typography>
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item md={3} sm={12} xs={12}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Product Images
                            </Typography>
                            <Typography className={styles.send_typography_small} variant="caption" component="div" sx={{ flexGrow: 1 }}>
                                (Max photos : 10)
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12}>
                            <div className={styles.mb_15}>
                                {ImageWrapper()}
                            </div>
                        </Grid>

                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Product Name
                            </Typography>
                            <Typography className={styles.send_typography_small} variant="caption" component="div" sx={{ flexGrow: 1 }}>
                                (0/120)
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            <CssTextField label="Product Name" id="custom-css-outlined-input" sx={{ width: '100%', height: '40px' }} />
                        </Grid>
                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Short description
                            </Typography>
                            <Typography className={`${styles.send_typography_small} ${styles.primary_color}`} variant="caption" component="div" sx={{ flexGrow: 1 }}>
                                (0/240)
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            <CssTextField label="Short description" id="custom-css-outlined-input" sx={{ width: '100%', height: '40px' }} />
                        </Grid>

                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Full description
                            </Typography>
                            <Typography className={styles.send_typography_small} variant="caption" component="div" sx={{ flexGrow: 1 }}>
                                (0/2000)
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            {/* <TextareaAutosize
                                aria-label="minimum height"
                                minRows={5}
                                placeholder="Full description"
                                style={{ width: '100%' }}
                            /> */}
                            <CssTextField id="custom-css-outlined-input" sx={{ width: '100%' }} />
                        </Grid>


                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Category
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                                    <TableBody>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>
                                            <TableCell align="center" className={styles.active_cell}>Category A</TableCell>
                                            <TableCell align="center" className={styles.active_cell}>Subcategory</TableCell>
                                            <TableCell align="center" className={styles.active_cell}>Subcategory</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell align="center" className={styles.active_cell}>Category B</TableCell>
                                            <TableCell align="center" className={styles.active_cell}>Subcategory</TableCell>
                                            <TableCell align="center" className={styles.active_cell}>Subcategory</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell align="center" className={styles.active_cell}>Category C</TableCell>
                                            <TableCell align="center" className={styles.active_cell}>Subcategory</TableCell>
                                            <TableCell align="center" className={styles.active_cell}>Subcategory</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell align="center" className={styles.active_cell}>Category D</TableCell>
                                            <TableCell align="center" className={styles.active_cell}>Subcategory</TableCell>
                                            <TableCell align="center" className={styles.active_cell}>Subcategory</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{
                        bgcolor: '#E5E5E5',
                        maxWidth: '100%',
                        padding: '15px',
                        marginBottom: '15px'
                    }}
                >
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Brand
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            <CssTextField label="Brand" id="custom-css-outlined-input" sx={{ width: '320px' }} />
                        </Grid>

                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Country of origin
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>

                            <Box sx={{ width: '320px' }}>
                                <FormControl fullWidth>
                                    <Select
                                        className={classes.select}
                                        inputProps={{
                                            classes: {
                                                icon: classes.icon,
                                                root: classes.root,
                                            },
                                        }}
                                        value='1'
                                    >
                                        <MenuItem value='1'> Foo 1</MenuItem>
                                        <MenuItem value='2'> Foo 2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Pattern
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>

                            <Box sx={{ width: '320px' }}>
                                <FormControl fullWidth>
                                    <Select
                                        className={classes.select}
                                        inputProps={{
                                            classes: {
                                                icon: classes.icon,
                                                root: classes.root,
                                            },
                                        }}
                                        value='1'
                                    >
                                        <MenuItem value='1'> Foo 1</MenuItem>
                                        <MenuItem value='2'> Foo 2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>                        </Grid>

                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Style
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>

                            <Box sx={{ width: '320px' }}>
                                <FormControl fullWidth>
                                    <Select
                                        className={classes.select}
                                        inputProps={{
                                            classes: {
                                                icon: classes.icon,
                                                root: classes.root,
                                            },
                                        }}
                                        value='1'
                                    >
                                        <MenuItem value='1'> Foo 1</MenuItem>
                                        <MenuItem value='2'> Foo 2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box
                    sx={{
                        bgcolor: '#E5E5E5',
                        maxWidth: '100%',
                        padding: '15px', marginBottom: '15px'
                    }}
                >
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Price
                            </Typography>
                            <Typography className={`${styles.send_typography_small} ${styles.primary_color}`} variant="caption" component="div" sx={{ flexGrow: 1 }}>
                                Singapore Dollar (S$)
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            <CssTextField label="Price" id="custom-css-outlined-input" sx={{ width: '320px' }} />
                        </Grid>

                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Stock Count
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            <CssTextField label="Stock Count" id="custom-css-outlined-input" sx={{ width: '320px' }} />
                        </Grid>

                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                SKU
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            <CssTextField label="SKU" id="custom-css-outlined-input" sx={{ width: '320px' }} />
                        </Grid>
                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Variations
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            {variationList.map((variation: any) => (
                                <>
                                    <div className={styles.send_variation_div}>

                                        <div className={styles.send_variation_div_header}>
                                            <Stack direction="row" spacing={3} sx={{ m: 1 }}>
                                                <div style={{ width: '130px' }}><span className={styles.primary_color}>Group name</span></div>
                                                <div><span>{variation.options[0].optionName}</span></div>
                                                <div>
                                                    <EditIcon style={{ marginLeft: '341px' }} className={`${styles.primary_color} ${styles.cursor}`} 
                                                    onClick={changedVariationName({ name: variation.name,id: variation.id })}/>
                                                    <DeleteForeverIcon style={{ marginLeft: '8px' }} className={`${styles.primary_color} ${styles.cursor}`} />
                                                    <CachedIcon style={{ marginLeft: '8px' }} className={`${styles.primary_color} ${styles.cursor}`} />
                                                </div>
                                            </Stack>
                                        </div>
                                        <div className={styles.send_variation_div_body}>
                                            <Stack direction="row" spacing={1} sx={{ m: 1 }}>
                                                <div style={{ width: '130px' }}>
                                                    <span className={styles.primary_color}>Option</span>
                                                </div>
                                                <div style={{ width: '80px' }}>
                                                    <span className={styles.primary_color}>Price</span>

                                                </div>
                                                <div style={{ width: '52px' }}>
                                                    <span className={styles.primary_color}>Stock</span>

                                                </div>
                                                <div style={{ width: '209px' }}>
                                                    <span className={styles.primary_color}>SKU</span>

                                                </div>
                                                <div style={{ width: '60px' }}>
                                                    <span className={styles.primary_color}>Photo</span>

                                                </div>
                                                <div style={{ width: '40px' }}>
                                                </div>
                                                <div style={{ width: '40px' }}>
                                                </div>
                                            </Stack>
                                            {
                                                variation.options[0].subOptions.map((subOption: any) => (

                                                    <Stack direction="row" spacing={1} sx={{ m: 1 }}>
                                                        <div style={{ width: '130px' }}>
                                                            <CssTextField id="custom-css-outlined-input" size="small" variant="outlined" sx={{ width: '100%', fontSize: '11px' }}
                                                                value={subOption.subOptionName}
                                                                onChange={subOptionChanged(subOption, variation.options[0], variation)} />
                                                        </div>
                                                        <div style={{ width: '80px' }}>
                                                            <CssTextField id="custom-css-outlined-input" size="small" variant="outlined" sx={{ width: '100%', fontSize: '11px' }}
                                                                value={subOption.price}
                                                                onChange={subOptionChanged(subOption, variation.options[0], variation)} />
                                                        </div>
                                                        <div style={{ width: '52px' }}>
                                                            {/* <TextField className={styles.send_textfield} id="outlined-basic" size="small" variant="outlined" sx={{ width: '100%' }}
                                                                value={subOption.stock}
                                                                onChange={subOptionChanged(subOption, variation.options[0], variation)} /> */}
                                                            <CssTextField id="custom-css-outlined-input" size="small" variant="outlined" sx={{ width: '100%', fontSize: '11px' }}
                                                                value={subOption.stock}
                                                                onChange={subOptionChanged(subOption, variation.options[0], variation)} />
                                                        </div>
                                                        <div style={{ width: '209px' }}>
                                                            <CssTextField id="custom-css-outlined-input" size="small" variant="outlined" sx={{ width: '100%', fontSize: '11px' }}
                                                                value={subOption.sku}
                                                                onChange={subOptionChanged(subOption, variation.options[0], variation)} />
                                                        </div>
                                                        <div style={{ width: '60px' }}>
                                                            {ImageWrapperVariation()}

                                                        </div>
                                                        <div style={{ width: '40px' }}>
                                                            <RemoveIcon className={`${styles.primary_color} ${styles.cursor}`} onClick={() => subOptionDeleted(subOption, variation.options[0], variation)} />

                                                        </div>
                                                        <div style={{ width: '40px' }}>
                                                            {addIconDisplay(subOption, variation)}
                                                        </div>
                                                    </Stack>
                                                ))}
                                        </div>
                                    </div>

                                </>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{
                        bgcolor: '#E5E5E5',
                        maxWidth: '100%',
                        padding: '15px', marginBottom: '15px'
                    }}
                >
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Wholesale
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Wholesale Prices  is only available when all variations of the same price.
                            </Typography>
                        </Grid>

                        <Grid item md={3} sm={12} xs={12} sx={{ pb: 3 }}>
                            <Typography className={`${styles.send_typography} ${styles.primary_color}`} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Size Chart
                            </Typography>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} sx={{ pb: 3 }}>
                            {ImageWrapperSizeChart()}
                        </Grid>
                    </Grid>
                    <div>
                        <Button variant="contained" className={styles.send_button}>
                            Cancel
                        </Button>
                        <div style={{ float: 'right' }}>
                            <Button variant="contained" className={styles.send_button_active}>
                                Save
                            </Button>
                        </div>

                        <div style={{ float: 'right' }}>
                            <Button variant="contained" className={styles.send_button}>
                                Save as draft
                            </Button>
                        </div>
                    </div>
                </Box>
            </div>
        </>
    );
}

const mapStateToProps = ({
    menuState, headerState, navState
}: StoreState): { open: MenuDataInterFace; headerOpen: HeaderDataInterFace; navOpen: NavigatorDataInterFace } => {
    return {
        open: menuState,
        headerOpen: headerState,
        navOpen: navState
    };
};

export default connect(mapStateToProps, {
    ToggleMenuACT, HeaderOpenACT, NavOpenACT
})(ProductEntry);


