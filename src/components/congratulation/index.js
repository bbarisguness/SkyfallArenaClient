import Link from 'next/link'
import { FaCheck } from "react-icons/fa";


export default function CongratulationPage() {
    return (
        <div class="congratulation-area text-center mt-5">
            <div class="container">
                <div class="congratulation-wrapper">
                    <div class="congratulation-contents center-text">
                        <div class="congratulation-contents-icon">
                            <FaCheck />
                        </div>
                        <h4 class="congratulation-contents-title"> Congratulations! </h4>
                        <p class="congratulation-contents-para"> Your account is ready to submit proposals and get work. </p>
                        <div class="btn-wrapper mt-4">
                            <Link href="/" class="cmn-btn btn-bg-1"> Go to Home </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}