import './PageProduct.css';
import Colors from '../../components/Colors/Colors';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Configs from '../../components/Configs/Configs';
import Reviews from '../../components/Reviews/Reviews';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ProductOrder from '../../components/ProductOrder/ProductOrder';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable';
import ProductTitle from '../../components/ProductTitle/ProductTitle';
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import ProductPhotos from '../../components/ProductPhotos/ProductPhotos';
import ProductFeatures from '../../components/ProductFeatures/ProductFeatures';
import AdBlock from '../../components/AdBlock/AdBlock';

function PageProduct({product}) {
    return(
<>   
    <Header />
    <div className="container">    
    <Breadcrumbs />
    <ProductTitle />
    <ProductPhotos />
        <div className="specifications-wrapper">
            <div className="specifications-main">
                <Colors />
                <Configs />
                <ProductFeatures />
                <ProductDescription />
                <ComparisonTable />
            </div>            
            <div className="specifications-aside">
                <ProductOrder id={product.id} />
                <AdBlock />
            </div>
        </div>
        <Reviews />
        <ReviewForm />   
    </div>
    <Footer />
</>
    );
};

export default PageProduct;