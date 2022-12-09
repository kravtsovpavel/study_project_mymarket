import './AdBlock.css';

function AdBlock () {
    return (
    <div className="ads-area specifications-aside__ads-area">
        <div className="ads-area__title">
            Реклама
        </div>
        <div className="iframes ads-area__iframes">
            <iframe src="../ads.html"  className="iframes__iframe" title="Заголовок1"></iframe>
            <iframe src="../ads.html" className="iframes__iframe" title="Заголовок2"></iframe>
        </div>
    </div>
    )
}

export default AdBlock;