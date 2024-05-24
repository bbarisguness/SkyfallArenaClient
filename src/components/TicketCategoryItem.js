import { useDispatch } from "react-redux";
import { changeSelectedTicket } from "@/store/buyPageSelectedTicket";
import { useRouter } from "next/navigation";

export default function ({ data }) {
    const dispatch = useDispatch();
    const router = useRouter();

    const selectTicket = () => {
        dispatch(changeSelectedTicket({ categoryId: data.id, categoryName: data.name, datetime: data.datetime, price: data.price }))
        router.push("/checkout");
    }

    return (
        <div onClick={selectTicket} className="ticketCategoryItem">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#252427" }}>{data.name}</span>
                <span style={{ fontSize: 12 }}>{data.datetime}</span>
            </div>
            <span style={{ color: "#252427" }}>{data.price} TL</span>
            <div className="buyButton">
                <svg width="12px" height="12px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.383 4.99998L6.93 0.756981L6.07 0.242981L3.217 4.99998H0.703C0.516553 4.99998 0.337742 5.07405 0.205904 5.20589C0.0740659 5.33772 0 5.51653 0 5.70298L0 6.14198C0 9.08598 0.685 11.989 2.002 14.622C2.05893 14.7355 2.14632 14.831 2.25439 14.8978C2.36247 14.9645 2.48697 14.9999 2.614 15H12.386C12.646 15 12.882 14.854 12.998 14.621C14.3146 11.9881 15 9.08474 15 6.14098V5.70298C15 5.51653 14.9259 5.33772 14.7941 5.20589C14.6623 5.07405 14.4834 4.99998 14.297 4.99998H11.783L8.93 0.242981L8.07 0.756981L10.617 4.99998H4.383ZM5 9.99998H10V8.99998H5V9.99998Z" fill="currentColor"></path>
                </svg>
                <span className="text">SATIN AL</span>
            </div>
        </div>
    )
}