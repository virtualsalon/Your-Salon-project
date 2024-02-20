const Razorpay = require('razorpay');
const QRCode = require('qrcode');
const express = require ('express')
const app = express();
const cors = require('cors')

app.use(cors)
const upiId = 'ayushbire222@oksbi'
var amount = 100;
var orderID = ''
var qrUrl = ''
const razorpay = new Razorpay({
  key_id: 'rzp_test_xGiaA91fIgCdTS',
  key_secret: 'to2T2ZMUogw7WIS5VustHUdG'
});

const params = {
  "amount": amount, // Amount in paise (e.g., 50000 paise = ₹500)
  "currency": "INR",
  "method": "upi"
};


razorpay.orders.create(params, function(err, order) {
  if(err) {
    console.error(err);
    return;
  }

  orderID = order.id; // Use the payment ID as the QR code URL
  console.log("QR Code URL:", orderID);
});
const upiUrl = `upi://pay?pa=${upiId}&pn=MerchantName&mc=0000&tid=0123456789&tr=${orderID}&tn=PaymentDescription&am=${amount/100}&cu=INR`;

QRCode.toDataURL(upiUrl, function (err, url) {
  if (err) {
    console.error(err);
    return;
  }
  qrUrl = url;
});

app.get('/payment-qr-link', function(req, res){
  res.send("helloworld")
})
app.listen(3000, ()=>{
  console.log("Server is running on port 3000")
})