import { Grid } from '@material-ui/core';
import Product from './Product';

const Products = ({ products }) => {
    return (
        <main className="mt-3">
            <Grid container justify="space-evenly" spacing={2}>
                {products.map((product) => (
                    <Grid item key={product.id} >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
