import './ProductFeatures.css';

function ProductFeatures () {
    return (
    <div className="features">
        <div className="features__title">Характеристики товара</div>
        
        <div className="features__list">
            <div className="features__item">
                <div className="marker"></div>
                <div>Экран: <b>6.1</b></div>
            </div>

            <div className="features__item">
                <div className="marker"></div>
                <div>Встроенная память: <b>128 ГБ</b></div>                                    
            </div>
            
            <div className="features__item">
                <div className="marker"></div>
                <div>Операционная система: <b>iOS 15</b></div>
            </div>

            <div className="features__item">
                <div className="marker"></div>
                <div>Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b></div>                                
            </div>

            <div className="features__item">
                <div className="marker"></div>
                <div>Процессор: <a href="https://ru.wikipedia.org/wiki/Apple_A15" target="_blank" rel="noreferrer">Apple A15 Bionic</a></div>                              
            </div>

            <div className="features__item">
                <div className="marker"></div>
                <div>Вес: <b>173 г</b></div>     
            </div>
        </div>
    </div>
    )
}

export default ProductFeatures;