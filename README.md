# UraServer
Simulation of 

## Setup the project on your machine
Make sure you have Nodejs installed (https://nodejs.org/)


### clone the repo on your machine
```sh
  git clone https://github.com/nadralia/UraServer.git
```

### Install dependencies
```sh
  cd UraServer && npm install
```

### Run the app
```sh 
  npm start
```

## API Spec
The preferred JSON object to be returned by the API should be structured as follows:

## API Endpoints

Example of endpoint. consume it using postman()
```sh
 http://localhost:4000/api/signup 
```

| Methods | EndPoint                                | Functionality                                    |Access
| ------- | --------------------------------------- | -------------------------------------------------|------
| POST    | /api/signup                             | Sign up a user                                   |PUBLIC
| POST    | /api/signin                             | Login a user                                     |PUBLIC
| POST    | /api/invoice/create/userId              | Create an invoice                                |PRIVATE
| POST    | /api/invoice/apply/                     | apply an invoice                                 |PRIVATE

### SignUp

Request body

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

### Create Invoice 
Endpoint api/invoice/create/:userId
```sh

 http://localhost:4000/api/invoice/create/5f22673236db0c8e8b8a54cf 
 
```

Request body
```source-json
{
    "invoiceNo": "00000000001",
    "oriInvoiceId": "00000000003",
    "oriInvoiceNo": "00000000002",
    "issuedDate": "15/06/2019 02:00:00",
    "buyerTin": "7777777777",
    "buyerLegalName": "test",
    "buyerNinBrn": "00000000001",
    "currency": "UGX",
    "grossAmount ": "2000.00",
    "taxAmount ": "2000.00",
    "dataSource": "101",
    "isInvalid": "1",
    "isRefund": "1",
    "invoiceType": "1",
    "invoiceKind": "1"
}

```

### Invoice (Apply for invoice inquiry)

Endpoint api/invoice/apply/

```source-json
{
   "invoiceNo": 1,
   "deviceNo": 31000092,
   "buyerTin": 7777777777,
   "buyerLegalName": "test",
   "invoiceType": "1",
   "startDate": "2020-06-14",
   "endDate": "2020-06-15",
   "pageNo": "1",
   "pageSize": "10"
}
```

### Invoice Detail (Invoice details are queried according to Invoice number.)

