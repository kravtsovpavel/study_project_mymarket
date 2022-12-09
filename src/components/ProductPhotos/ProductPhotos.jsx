import './ProductPhotos.css';
import ProductPhoto from './ProductPhoto';

function ProductPhotos() {

    const productPhotos = [
        {
            id: 1,
            src: './img/image-1.webp',
            alt: 'Синий Apple iPhone 13',
        },
        {
            id: 2,
            src: './img/image-2.webp',
            alt: 'Синий Apple iPhone 13',
        },
        {
            id: 3,
            src: './img/image-3.webp',
            alt: 'Синий Apple iPhone 13',
        },
        {
            id: 4,
            src: './img/image-4.webp',
            alt: 'Синий Apple iPhone 13',
        },
        {
            id: 5,
            src: './img/image-5.webp',
            alt: 'Синий Apple iPhone 13',
        },
    ]


    return (
    <div className="product-photo">
        {productPhotos.map((item) => {
            return <ProductPhoto
            key={item.id}
            id={item.id}
            src={item.src}
            alt={item.alt}/>
        })}
    </div>

    )
}

export default ProductPhotos;