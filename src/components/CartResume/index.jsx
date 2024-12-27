import { Button } from "../Button";
import { Container } from "./styles";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import { api } from "../../services/api";
import { FormatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";


export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);

    const navigate = useNavigate()

    const { cartProducts } = useCart();

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);
        setFinalPrice(sumAllItems)
    }, [cartProducts]); 

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return {
                 id: product.id, 
                 quantity: product.quantity,
                price: product.price,
                };
        });

        try{
            const { data } = await api.post('/create-payment-intent', { products });

            navigate('/checkout', {
                state: data,
            })
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error('Erro, tente novamente', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
                });
        }

    }

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{FormatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{FormatPrice(deliveryTax)}</p>
                </div>

                <div className="container-bottom">
                    <p>Total</p>
                    <p>{FormatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}