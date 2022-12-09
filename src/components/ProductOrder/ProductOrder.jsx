import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../store/cartSlice";
import { addProductToFav, removeProductFromFav } from "../../store/favSlice";
import cn from 'classnames';
import './ProductOrder.css';

function ProductOrder ({ id }) {
        const dispatch = useDispatch();

        const currentCartProducts = useSelector((store) => store.cartSlice.products);
        const isIncurrentCartProducts = currentCartProducts.some((item) => item === id);

        const buyBtnClasses = cn({
            'btn order__btn': true,
            'order__btn_active': isIncurrentCartProducts,
        });

        const currentFavProducts = useSelector((store) => store.favSlice.products)
        const isIncurrentFavProducts = currentFavProducts.some((item) => item === id);

    const handleCartButton = () => {
        if (isIncurrentCartProducts) {
            dispatch(removeProductFromCart(id));
        } else {
            dispatch(addProductToCart(id));
        }
    };

    const handleFavButton = () => {
        if (isIncurrentFavProducts) {
            dispatch(removeProductFromFav(id));
        } else {
            dispatch(addProductToFav(id));
        }
    };
    


    return (
    <div className="important specifications-aside__important">
        <div className="price important__price">
            <div className="old-price price__old-price">
                <div className="old-price__value">
                    <s>75 990₽</s>
                </div>
                <div className="old-price__discount">
                    -8%
                </div>
                <div className="price__like-icon" onClick={handleFavButton}>
                    {isIncurrentFavProducts ? 
                        <svg width="28" height="22" viewBox="0 0 44 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.30841 2.95447C7.29791 -0.875449 13.7444 -0.875449 17.7339 2.95447L22.0002 7.05027L26.2667 2.95447C30.2563 -0.875449 36.7027 -0.875449 40.6923 2.95447C44.6817 6.78439 44.6817 12.973 40.6923 16.803L22.0002 34.7472L3.30841 16.803C-0.681091 12.973 -0.681091 6.78439 3.30841 2.95447ZM14.7876 5.78289C12.4253 3.51507 8.61701 3.51507 6.25468 5.78289C3.89237 8.05071 3.89237 11.7067 6.25468 13.9746L22.0002 29.0904L37.7461 13.9746C40.1084 11.7067 40.1084 8.05071 37.7461 5.78289C35.3838 3.51507 31.5755 3.51507 29.2132 5.78289L22.0002 12.7072L14.7876 5.78289Z" fill="#F36223"/>
                            <path d="M6 5.5L22 21L38 5.5" stroke="#F36223" strokeWidth="13"/>
                        </svg>
                        :
                        <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z" fill="#888888"/>
                        </svg>
                    }
                </div>
            </div>
            <div className="price__new-price">
                67 990₽
            </div>                            
        </div>

        <div className="delivery important__delivery">
            <div className="delivery__get">
                Самовывоз в четверг, 1 сентября — <b>бесплатно</b>
            </div>
            <div className="delivery__courier">
                Курьером в четверг, 1 сентября — <b>бесплатно</b>
            </div>                            
        </div>
        <div className="order important__order">
            <button className={buyBtnClasses} onClick={handleCartButton}>
                {isIncurrentCartProducts ? 'Товар уже в корзине' : 'Добавить в корзину'}
            </button>
        </div>
    </div>
    )
}

export default ProductOrder;