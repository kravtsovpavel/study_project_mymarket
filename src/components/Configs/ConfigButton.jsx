import './ConfigButton.css';

function ConfigButton ({ id, memory, changeActiveMemory, activeId }) {

    const handleClick = () => {
        changeActiveMemory(id)
    }

    const btnClasses = (activeId === id) ? 
        'btn phonememory__button phonememory__button_selected' : 'btn phonememory__button';

    return (
        <button className={btnClasses} onClick={handleClick}>{ memory }</button>
    )
}

export default ConfigButton;