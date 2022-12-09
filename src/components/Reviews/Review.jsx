import './Review.css';

function Review (props) {
    
    const { author, authorPhoto, raiting, experience, advantages, disadvantages} = props;

    return (
    <>
        <div className="review">
            <img src={authorPhoto} alt="author2" className="review__photo" />
            <div className="review__content">
                <div className="review__author">{author}</div>
                <div className="raiting review__raiting">
                    <img src={raiting} alt="star" className="raiting__img" />
                </div>
                <div className="review__text">
                    <div><strong>Опыт использования:</strong>{experience}</div>
                    <div><strong>Достоинства:</strong><br />{advantages}</div>
                    <div><strong>Недостатки:</strong><br />{disadvantages}</div>                           
                </div>
            </div>
        </div>
    </>

    )
};

export default Review;