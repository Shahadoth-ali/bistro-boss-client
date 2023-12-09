import { loadStripe } from "@stripe/stripe-js"
import SharedTitle from "../../../components/SharededTitle/SharedTitle"
import CheckOutForm from "./CheckOutForm"
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const Payment = () => {

const [cart]=useCart();
const total=cart.reduce((sum,item)=>sum+item.price,0);
const price=parseFloat(total.toFixed(2));


  return (
    <div className="w-full">
        <SharedTitle 
        subHeading="please provide"
        heading="Payment"
        >
        </SharedTitle>
     <h2 className="text-3xl">taka would pay this way</h2>
     <Elements stripe={stripePromise}>
     <CheckOutForm cart={cart} price={price}></CheckOutForm>
     </Elements>
    </div>
  )
}

export default Payment
