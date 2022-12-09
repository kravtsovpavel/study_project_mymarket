import './ColorButton.css';
// import { useCallback } from 'react';

function ColorButton(props) {
    const {id, name, src, alt, active, changeActiveColor} = props;

    const handleClick = () => {
        console.log(id, name);
        changeActiveColor(id);
    }

    // const handleClickColor = useCallback(() => {
    //     setActiveColor(color)
    // }, [color])
    
    
    const itemClassName = active 
                            ? 'phonecolours__photos-card phonecolours__photos-card_selected'
                            : 'phonecolours__photos-card';
    
    return(
        <div className={itemClassName} onClick={handleClick}>
            <img src={src} alt={alt} className="phonecolours__img" />
        </div>
    )
}
export default ColorButton;
