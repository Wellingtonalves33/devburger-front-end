import PropTypes from 'prop-types';
import { CardImage, Container } from './styles';
import { CartButton } from '../CartButton';

// eslint-disable-next-line no-unused-vars
export function CardProduct({product}) {
    console.log('Produto:', product);
    return (
        <Container>
            <CardImage src={product.url} alt={product.name}/>
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CartButton></CartButton>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object,
}