import { useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import '../styles.css'
import { useCart } from "../../../hooks/CartContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const { state: { dpmCheckerLink }, } = useLocation()

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()
    
        const { cartProducts, clearCart } = useCart();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error('Stripe ou Elements com falha, tente novamente')
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

       
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        });

       
        if (error) {
            setMessage(error.message);
            toast.error(error.message);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            

            
        try {
            const products = cartProducts.map((product) => {
                return {
                     id: product.id, 
                     quantity: product.quantity,
                    price: product.price,
                    };
            });
            const { status} = await api.post('/orders', {products},
               {
                   validateStatus: () => true,
               }, 
           );
           if (status === 201 || status === 200) {
          
            setTimeout(() => {
                navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
               
            },2000);
            clearCart()
               toast.success('Pagamento Realizado com Sucesso!');
           } else if(status === 400 || status === 409){
               toast.error('Falha ao realiza o seu pedido');
           }else{
            throw new Error();
           }  
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error('Falha no sistema, tente novamente');
        } 
        }
        else{
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "accordion"
    }

    return (
        <div className="container">
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar agora"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
            <div id="dpm-annotation">
                <p>
                    Os métodos de pagamento são disponibilizados de acordo com a sua região.&nbsp;
                    <a
                        href={dpmCheckerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="dpm-integration-checker"
                    >
                        Ver métodos de pagamento
                    </a>
                </p>
            </div>
        </div>
    );
}