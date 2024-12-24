import {Table} from '../index';
import { useCart } from '../../hooks/CartContext';
import { FormatPrice } from '../../utils/formatPrice';
import { ProducImage, ButtonGrop, EmptyCart, ProductTotalPrice} from './styles';

export function CartItems() {
const { cartProducts, increaseProduct, decreaseProduct } = useCart();

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Items</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((product)=> (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProducImage src={product.url}/>
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{product.currencyValue}</Table.Td>
                            <Table.Td>
                                <ButtonGrop>
                                    <button onClick={() => decreaseProduct(product.id) }>-</button>
                                {product.quantity}
                                <button onClick={() => increaseProduct(product.id) }>+</button>
                                </ButtonGrop>
                                </Table.Td>

                            <Table.Td>
                                <ProductTotalPrice>
                                {FormatPrice(product.quantity * product.price)}
                                </ProductTotalPrice>
                                </Table.Td>
                        </Table.Tr>
                    )) 
                ) : ( <EmptyCart>Carrinho vazio</EmptyCart>
                )}
            </Table.Body>
        </Table.Root>
    );
}