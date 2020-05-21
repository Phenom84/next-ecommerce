import React from 'react';
import ProductItem from '../components/ProductItem'
import {
    Grid,
    Container
} from '@material-ui/core';

const products = [
    {
        name: 'Product 1',
        price: '$20',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageLink: "http://iqpuzzle.md/wp-content/uploads/2018/11/DSC09894_1-754x1024.png"
    },
    {
        name: 'Product 2',
        price: '$20',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageLink: "http://iqpuzzle.md/wp-content/uploads/2018/11/DSC09996_1-754x1024.png"
    },
    {
        name: 'Product 3',
        price: '$20',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageLink: "http://iqpuzzle.md/wp-content/uploads/2018/11/DSC09910_1-754x1024.png"
    },
    {
        name: 'Product 4',
        price: '$20',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageLink: "http://iqpuzzle.md/wp-content/uploads/2018/11/DSC09917_1-754x1024.png"
    },
    {
        name: 'Product 5',
        price: '$20',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageLink: "http://iqpuzzle.md/wp-content/uploads/2018/11/DSC09962_1-754x1024.png"
    }
];

export default () => {
    return (
        <Container maxWidth="lg">
            <h1>Products</h1>
            <Grid container spacing={2}>
                {products.map((products, index) => {
                    return (
                        <ProductItem {...products} />
                    )
                })}
            </Grid>
        </Container>
    )
}