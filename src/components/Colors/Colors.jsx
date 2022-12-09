import { useState } from "react";
import './Colors.css';
import ColorButton from './ColorButton';

function Colors() {
    const colorsImages = [
        {
            id: 1,
            name: 'Красный',
            src: 'img/color-1.webp',
            alt: 'Красный смартфон Apple iPhone 13',
        },
        {
            id: 2,
            name: 'Зеленый',
            src: 'img/color-2.webp',
            alt: 'Зеленый смартфон Apple iPhone 13',
        },
        {
            id: 3,
            name: 'Розовый',
            src: 'img/color-3.webp',
            alt: 'Розовый смартфон Apple iPhone 13',
        },
        {
            id: 4,
            name: 'Синий',
            src: 'img/color-4.webp',
            alt: 'Синий смартфон Apple iPhone 13',
        },
        {
            id: 5,
            name: 'Белый',
            src: 'img/color-5.webp',
            alt: 'Белый смартфон Apple iPhone 13',
        },
        {
            id: 6,
            name: 'Черный',
            src: 'img/color-6.webp',
            alt: 'Черный смартфон Apple iPhone 13',
        },
    ];

    const [activeColorImageId, setActiveColorImageId] = useState(1);

    const changeActiveColor = (id) => {
        setActiveColorImageId(id);
    }

    return(
        <>
            <div className="phonecolours">
                <div className="phonecolours__title">
                    Цвет товара: { colorsImages[activeColorImageId - 1].name }
                </div>
                <div className="phonecolours__photos">
                    {colorsImages.map((item) => {
                        return <ColorButton
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        src={item.src}
                        alt={item.alt}
                        active={activeColorImageId === item.id}
                        changeActiveColor={changeActiveColor}    
                        />
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Colors;