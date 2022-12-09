import { useState } from 'react';
import './Configs.css';
import ConfigButton from './ConfigButton';

function Configs() {

    const configButtons = [
        {
            id: 1,
            memory: '128 ГБ',
        },
        {
            id: 2,
            memory: '256 ГБ',
        },
        {
            id: 3,
            memory: '512 ГБ',
        },
    ];

    const [activeConfigButtonId, setActiveConfigButtonId] = useState(1);

    const changeActiveMemory = (id) => {
        setActiveConfigButtonId(id)
    }

    return (
    <div className="phonememory">
        <div className="phonememory__title">
            Конфигурация памяти: { configButtons[activeConfigButtonId - 1].memory }
        </div>
        <div className="phonememory__buttons">
            {configButtons.map((item) => {
                return <ConfigButton key={item.id} id={item.id} memory={item.memory} changeActiveMemory={changeActiveMemory} activeId={activeConfigButtonId} />
            })}
        </div>
    </div>

    )
}

export default Configs;