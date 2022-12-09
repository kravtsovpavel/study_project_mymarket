import './ReviewForm.css';
import { useState } from 'react';


function ReviewForm ()  {

    const [nameValue, setNameValue] = useState(localStorage.getItem('reviewName') || '');
    const [scoreValue, setScoreValue] = useState(localStorage.getItem('reviewScore') || '');

    const [nameValueErrorStr, setNameValueErrorStr] = useState('');
    const [scoreValueErrorStr, setScoreValueErrorStr] = useState('');

    const handleFocusNameValue = () => {
        setNameValue('');
    };

    const handleFocusScoreValue = () => {
        setScoreValueErrorStr('');
    };

    const handleInputNameValue = (e) => {
        localStorage.setItem('reviewName', e.target.value);
        setNameValue(e.target.value);
    };
    
    const handleInputScoreValue = (e) => {
        localStorage.setItem('reviewScore', e.target.value);
        setScoreValue(e.target.value);
    };

      // Валидация полей, set локальных стейтов для ошибок
    const validateName = () => {
    if (nameValue === '') {
        setNameValueErrorStr('Вы забыли указать имя и фамилию');
        return false;
    } else if (nameValue.length < 2) {
        setNameValueErrorStr('Имя не может быть короче двух символов');
        return false;
    } else {
        setNameValueErrorStr('');
        return true;
    }
    };

    const validateScore = () => {
    if (scoreValue === '') {
        setScoreValueErrorStr('Оценка должна быть от 1 до 5');
        return false;
    } else if (!scoreValue.match(/^\d+$/)) {
        setScoreValueErrorStr('Оценка должна быть от 1 до 5');
        return false;
    } else if (!scoreValue.match(/^[1-5]$/)) {
        setScoreValueErrorStr('Оценка должна быть от 1 до 5');
        return false;
    } else {
        setScoreValueErrorStr('');
        return true;
    }
    };

      // Отправка формы
    const handleSubmitForm = (e) => {
    e.preventDefault();

    if(validateName() && validateScore()) {
        setNameValue('');
        setScoreValue('');

        localStorage.removeItem('reviewName');
        localStorage.removeItem('reviewScore');

        console.log('Форма успешно отправлена');
        alert('Ваш отзыв был успешно отправлен и будет отображён после модерации');
    }
    };


    return(
    <form className="add-review-form" name="main" action="#" onSubmit={handleSubmitForm}>
        <div className="add-review-form__heading">Добавить свой отзыв</div>
        <div className="add-review-form__row">
            <div className="form-review__name-wrapper">
                <input type="text" placeholder="Имя и фамилия" value={nameValue} onInput={handleInputNameValue} onFocus={handleFocusNameValue} className="add-review-form__name" />
                {nameValueErrorStr && <div className="form-review__error">{ nameValueErrorStr }</div>}
            </div>
            <div className="form-review__score-wrapper">
                <input type="text" placeholder="Оценка" value={scoreValue} onInput={handleInputScoreValue} onFocus={handleFocusScoreValue} className="add-review-form__score" />
                {!nameValueErrorStr && scoreValueErrorStr && <div className="form-review__error">{ scoreValueErrorStr }</div>}
            </div>
        </div>
        <div>
            <textarea name="review" placeholder="Текст отзыва" className="add-review-form__review"></textarea><br />
        </div>

        <button type="submit" className="add-review-form__btn btn">Отправить отзыв</button>
    </form>
    )
}

export default ReviewForm;