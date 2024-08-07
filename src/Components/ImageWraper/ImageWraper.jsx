import './ImageWraper.css'
import product from '../../assets/product.jpg'
function ImageWraper() 
    {
        return(
            <div id="image">
            <img src={product}  />
            </div>
        )
    }
    export default ImageWraper