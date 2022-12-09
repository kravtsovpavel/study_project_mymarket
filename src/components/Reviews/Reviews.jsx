import './Reviews.css';
import Review from './Review';

function Reviews () {

    const reviewItem = [
        {   
            id: 1,
            author: 'Марк Г.',
            authorPhoto: './img/author1.png',
            raiting: './img/star-5.png',
            experience: 'менее месяца',
            advantages: 'это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.',
            disadvantages: 'к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное',
        },

        {   
            id: 2,
            author: 'Валерий Коваленко',
            authorPhoto: './img/author2.png',
            raiting: './img/star-4.png',
            experience: 'менее месяца',
            advantages: 'OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго',
            disadvantages: 'Плохая ремонтопригодность',
        },
    ]

    return(
    <>
        <div className="review-section">
            <div className="review-section__header">
                <div className="review-section__wrapper">
                    <h3 className="review-section__title">Отзывы</h3>
                    <div className="review-section__count">425</div>
                </div>
            </div>
            <div className="review-section__list">
                {reviewItem.map((item) => {
                    return <Review
                            key={item.id}
                            id={item.id}
                            author={item.author}
                            authorPhoto={item.authorPhoto}
                            raiting={item.raiting}
                            experience={item.experience}
                            advantages={item.advantages}
                            disadvantages={item.disadvantages}
                            />
                })
                }
            </div>
        </div>
    </>

    )
}

export default Reviews;