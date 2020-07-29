# UraServer
Simulation of UraServer


## API Spec
The preferred JSON object to be returned by the API should be structured as follows:

### SignUp

EndPoint api/signup

```source-json
{
    "name": "ganesh",
    "email": "xeno125r@gmail.com",
    "password": "@3567xeno"
}
```

### SignIn

Endpoint api/signin

Request body
```source-json
{
    "email": "xeno125r@gmail.com",
    "password": "@3567xeno"
}

```
Reponse

```source-json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjIxM2VkMzZlNGRjMzZmODQ0NjU5NGEiLCJpYXQiOjE1OTYwMTQ3OTF9.HzKqSsujHXP0XBUE2pcJ5YG4dk_iu_WdcP9EK4I8tJ8",
    "user": {
        "_id": "5f213ed36e4dc36f8446594a",
        "email": "xeno125r@gmail.com",
        "name": "ganesh",
        "role": 0
    }
}

```

### Invoice (apply for invoice)

Endpoint api/invoice/{invoiceNo}/

```source-json
{
   "invoiceNo": "00000000001",
   "deviceNo": "00031000092",
   "buyerTin": "7777777777",
   "buyerLegalName": "test",
   "invoiceType": "1",
   "startDate": "2020-06-14",
   "endDate": "2020-06-15",
   "pageNo": "1",
   "pageSize": "10"
}
```
