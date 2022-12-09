import styles from './ComparisonTable.module.css';

function ComparisonTable () {
    return (
<div className={styles.section}>
    <div className={styles.title}>Сравнение моделей</div>
    
        <div className={styles.table}>

            <div className={styles.table__heading}>Модель</div>
            <div className={styles.table__heading}>Вес</div>
            <div className={styles.table__heading}>Высота</div>
            <div className={styles.table__heading}>Ширина</div>
            <div className={styles.table__heading}>Толщина</div>
            <div className={styles.table__heading}>Чип</div>
            <div className={styles.table__heading}>Объём памяти</div>
            <div className={styles.table__heading}>Аккумулятор</div>
        
        <div className={styles.rowWrapper}>
            <div className={styles.table__row}><span>Iphone11</span></div>
            <div className={styles.table__row}><span>194 грамма</span></div>
            <div className={styles.table__row}><span>150.9 мм</span></div>
            <div className={styles.table__row}><span>75.7 мм</span></div>
            <div className={styles.table__row}><span>8.3 мм</span></div>
            <div className={styles.table__row}><span>A13 Bionic chip</span></div>
            <div className={styles.table__row}><span>до 128 Гб</span></div>
            <div className={styles.table__row}><span>До 17 часов</span></div>
        </div>
    
        <div className={styles.rowWrapper}>
            <div className={styles.table__row}><span>Iphone12</span></div>
            <div className={styles.table__row}><span>164 грамма</span></div>
            <div className={styles.table__row}><span>146.7 мм</span></div>
            <div className={styles.table__row}><span>71.5 мм</span></div>
            <div className={styles.table__row}><span>7.4 мм</span></div>
            <div className={styles.table__row}><span>A14 Bionic chip</span></div>
            <div className={styles.table__row}><span>до 256 Гб</span></div>
            <div className={styles.table__row}><span>До 19 часов</span></div>
        </div>
        
        <div className={styles.rowWrapper}>
            <div className={styles.table__row}><span>Iphone13</span></div>
            <div className={styles.table__row}><span>174 грамма</span></div>
            <div className={styles.table__row}><span>146.7 мм</span></div>
            <div className={styles.table__row}><span>71.5 мм</span></div>
            <div className={styles.table__row}><span>7.65 мм</span></div>
            <div className={styles.table__row}><span>A15 Bionic chip</span></div>
            <div className={styles.table__row}><span>до 512 Гб</span></div>
            <div className={styles.table__row}><span>До 19 часов</span></div>
        </div>                        
    </div>
</div>

    )
}

export default ComparisonTable;