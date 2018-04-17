
const nodemailer = require('nodemailer')
nodemailer.createTestAccount((err,account)=>{
  let transporter = nodemailer.createTransport({
    host:'smtp.qq.com',
    port:'587',
    secure:false,
    auth:{
      user:'*********@qq.com',
      pass:'ybdwfwupgkjqbhda'
    }
  })
  let mailOptions ={
    from:'*********@qq.com',
    to:'*********@qq.com',
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