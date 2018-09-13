# MailerMaster
## Basic usage
We can use MailerMaster to **send a qq mail**

## Preparation In Advance
1. Before you use MailerMaster , you should have a qq(Of course most of us have one).
2. Access [QQ邮箱](https://mail.qq.com),then sign in.
3. Get your Authorization Code(Setting - **POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务**)
4. Use your account and Authorization Code when creating your Transport

```javascript
  let transporter = nodemailer.createTransport({
    host:'smtp.qq.com',
    port:'587',
    secure:false,
    auth:{
      user:'***',//mail
      pass:'***'//Authorization Code
    }
  })
```

## Send Mailer
```javascript
  let mailOptions ={
    from:'***',
    to:'***',
    subject:'***',
    text:'***',
    html:'***'
  }
  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      return console.log(error)
    }
    console.log('message send : %s',info.messageId)
    console.log('Preview URL: %s',nodemailer.getTestMessageUrl(info))
  })
```

[Chinese Doc](https://blog.csdn.net/zzsan/article/details/79990138)
