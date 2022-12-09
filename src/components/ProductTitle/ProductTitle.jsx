import styled from "styled-components";

const Title = styled.div`
padding-bottom: 30px;
font-size: 32px;
font-weight: 700;
@media (max-width:1023px) {
    font-size: 24px;
}
`;

function ProductTitle() {
    return (
        <Title>Смартфон Apple iPhone 13, синий</Title>
    )
}

export default ProductTitle;