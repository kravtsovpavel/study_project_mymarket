import './ProductPhoto.css';

function ProductPhoto(props) {
    const { id, src, alt } = props;

    return (
        <img src={src} alt={alt} key={id} className="product-photo__img" />
    )
}

export default ProductPhoto;