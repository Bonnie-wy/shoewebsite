import { useHistory } from "react-router-dom";

const Showcase = ({ products }) => {
    const history = useHistory();

    return (
        <>  
            <div className="showcaseContainer">
                <div className="stackUnder">
                </div>
                <div className="stackTop">
                    <h1 className="showcaseText">
                        Check out our latest season
                    </h1>
                    <button className="btn btn-shop-now btn-lg" >
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="container row">
                {products && 
                    products.map((product) => {
                        return (
                            <div key={product._id} className="showcaseOptions col-md-4 col-sm-12">  
                                <img 
                                    className="showcaseImg" 
                                    src={product.image}
                                >
                                </img>
                                <button 
                                    className="showcaseBtn" 
                                    onClick={() => history.push(`/category/${product._id}`)}
                                >
                                    {product.category}
                                </button>
                            </div>
                        )
                    })
                }   
            </div>
        </>
    )
}

export default Showcase
