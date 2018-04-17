
const nodemailer = require('nodemailer')
nodemailer.createTestAccount((err,account)=>{
  let transporter = nodemailer.createTransport({
    host:'smtp.qq.com',
    port:'587',
    secure:false,
    auth:{
      user:'291136654@qq.com',
      pass:'ybdwfwupgkjqbhda'
    }
  })
  let mailOptions ={
    from:'291136654@qq.com',
    to:'296099296@qq.com',
    subject:'hello',
    text:'hi~',
    html:'<b>hello</b>'
  }
  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      return console.log(error)
    }
    console.log('message send : %s',info.messageId)
    console.log('Preview URL: %s',nodemailer.getTestMessageUrl(info))
  })
})