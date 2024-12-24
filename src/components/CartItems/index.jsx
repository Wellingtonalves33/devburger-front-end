import { Table } from '../index';
import TrashIcon from '../../assets/trash.svg';
import { useCart } from '../../hooks/CartContext';
import { FormatPrice } from '../../utils/formatPrice';
import { ProducImage, ButtonGrop, EmptyCart, ProductTotalPrice, TrashImgem } from './styles';

export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Items</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProducImage src={product.url} />
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{product.currencyValue}</Table.Td>
                            <Table.Td>
                                <ButtonGrop>
                                    <button onClick={() => decreaseProduct(product.id)}>-</button>
                                    {product.quantity}
                                    <button onClick={() => increaseProduct(product.id)}>+</button>
                                </ButtonGrop>
                            </Table.Td>

                            <Table.Td>
                                <ProductTotalPrice>
                                    {FormatPrice(product.quantity * product.price)}
                                </ProductTotalPrice>
                            </Table.Td>
                            <Table.Td>
                                <TrashImgem src={TrashIcon} alt='lixeira' onClick={()=>deleteProduct(product.id)}/>
                            </Table.Td>


                        </Table.Tr>
                    ))
                ) : (<EmptyCart>Carrinho vazio</EmptyCart>
                )}
            </Table.Body>
        </Table.Root>
    );
}