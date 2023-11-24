import React from 'react'
import bkash from '../Assets/bkash.png'

function Online_Payment() {
    return (
        <div class="container" style={{ padding: "5% 30% 10% 30%" }}>
            <div style={{ padding: "0px 12px 40px 12px", borderRadius: "5px", background: "#da3e70" }}>
                <div class="row" style={{ background: "white", marginBottom: "50px" }}>
                    <img src={bkash} alt="bkash payment" />
                </div>

                <form action="" method="">
                    <div class="row g-3 align-items-center mb-4">
                        <div class="col">
                            <label for="inputNumber" class="col-form-label">Enter Phone Number: </label>
                        </div>
                        <div class="col">
                            <input type="text" name="number" id="inputNumber" class="form-control" required />
                        </div>
                    </div>

                    <div class="row g-3 align-items-center mb-4">
                        <div class="col">
                            <label for="inputAmount" class="col-form-label">Enter Amount: </label>
                        </div>
                        <div class="col">
                            <input type="number" name="amount" id="inputAmount" class="form-control" value="0" min="0" required />
                        </div>
                    </div>

                    <div className='mb-4' style={{ textAlign: "center" }}>
                        <p>Do your payment by bkash</p>
                        <p>By clicking on Confirm, you are agreeing to the terms & conditions</p>
                    </div>

                    <div class="d-grid gap-4 d-md-flex justify-content-md-center">
                        <button class="btn btn-secondary me-md-4" type="button">Confirm</button>
                        <button class="btn btn-secondary" type="button">Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Online_Payment
