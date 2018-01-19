<!-- Answers to the Short Answer Essay Questions go here -->
### 1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

- Middleware is any function invoked by express brfore the final request handler is and sits in the middle of a request and the final route.
- Sessions in express are used to store the application state across multiple requests. Sessions are often stored in cookies, database, and memory cache.
- Bcrypt sessions are utilized to store encrypted data into a database. 
- In JWT, web tokens are used to store and transmit private data. It can only be verified with a trusted signature. When using JWT a client will ask for a token that the server will generate and is then used to authenticate the client.

### 2. What does bcrypt do in order to prevent attacks?

- The core premise of bcrypt is to encrypt a password and then limit the number of times this process can execute. 

### 3. What are the three parts of the JSON Web Token?

- The Header, Signature and payload. It is structured by being separated by dots: Header.Signature.Payload


