import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51QZgDXIpyFZr7kTl6ggsKzEWhDblWdC8PpT8B8wDfmOQF5f1g9vRUEhkIPcFAMoPPuh4qLOvVqLJtUY4NdoO8o4W00JSq4dX0R'
);

export default stripePromise;