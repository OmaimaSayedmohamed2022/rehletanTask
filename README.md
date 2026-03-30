## Travel Task (Rehletna)
### Ovierview 
this task is the to fetch data from two diffirent suppliers api (supplierA , suplierB),
and normalize data and unifying and displaying the data within a single API.

### Technologies
 node.js
 express.js

 ### Setup project 
 git clone https://github.com/OmaimaSayedmohamed2022/rehletanTask.git

 ### API Endpoint 
 fetch all hotels :
 http://localhost:5000/hotels     
 filter by city ex :
 http://localhost:5000/hotels?city=Antalya

### Respone
{
    "status": 200,
    "message": "hotels fetched successfully",
    "count": 4,
    "data": [
        {
            "id": "A-101",
            "name": "Grand Istanbul Hotel",
            "city": "Istanbul",
            "price": 120,
            "currency": "USD",
            "stars": 5,
            "available": true,
            "supplier": "A"
        },
        {
            "id": "A-102",
            "name": "Blue Sea Hotel",
            "city": "Antalya",
            "price": 80,
            "currency": "USD",
            "stars": 4,
            "available": false,
            "supplier": "A"
        },
        {
            "id": "B-9001",
            "name": "Grand Istanbul Hotel",
            "city": "Istanbul",
            "price": 118,
            "currency": "USD",
            "stars": 5,
            "available": true,
            "supplier": "B"
        },
        {
            "id": "B-9002",
            "name": "Lara Beach Resort",
            "city": "Antalya",
            "price": 95,
            "currency": "USD",
            "stars": 4,
            "available": true,
            "supplier": "B"
        }
    ]
}

after filter :
{
    "status": 200,
    "message": "hotels fetched successfully",
    "count": 2,
    "data": [
        {
            "id": "A-102",
            "name": "Blue Sea Hotel",
            "city": "Antalya",
            "price": 80,
            "currency": "USD",
            "stars": 4,
            "available": false,
            "supplier": "A"
        },
        {
            "id": "B-9002",
            "name": "Lara Beach Resort",
            "city": "Antalya",
            "price": 95,
            "currency": "USD",
            "stars": 4,
            "available": true,
            "supplier": "B"
        }
    ]
}
 
 
 
 
