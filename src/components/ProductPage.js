import Product from './Product';

const ProductPage = ({ products }) => {
    return (
        <>
            <h2>Best Sellers</h2>
            <div className="container">
                {products && 
                    products.map((product) => {
                        return (
                            <Product key={product.id} items={product.items} />
                        )
                    })
                }
            </div>
        </>
    );
};

export default ProductPage
