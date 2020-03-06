# X-Men Detector
This API will tell you if a given DNA matrix is from a Mutant or not.

## Test remote
The API is deployed at: https://xmendetector.appspot.com.

### Request example
```
POST: https://xmendetector.appspot.com/api/mutations
Body:
{
    "dna": [
        "ATGCGA",
        "CAGTGC",
        "TTATGT",
        "AGAAGG",
        "CCCCTA",
        "TCACTG"
    ]
}
```
_You can use the file `xMenDetector.postman_collection.json` (in the root folder) in Postman._

## Run locally
1. Clone this repo:
```
$ git clone https://github.com/paulsancer/x-men-detector
```

2. Install dependencies:
```
$ npm i
```

3. Start in development mode:
```
$ npm run dev
```

4. Test the `/api/mutations` endpoint.
_You can use the file `xMenDetector.postman_collection.json` (at the root folder) in Postman and change the request url to `http://localhost:8080/api/mutations`._
