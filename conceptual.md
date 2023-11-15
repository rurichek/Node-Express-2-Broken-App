### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
	- it's a secure way of transmitting information between parties as a JSON object. 
	- This information can be verified and trusted because it is digitally signed. 

- What is the signature portion of the JWT?  What does it do?
	- The signature portion of a JWT is created by taking the encoded header, the encoded payload, a secret, the algorithm specified in the header (like HMAC-SHA256), and signing that. 
	- The signature's main purpose is to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. 
	- Essentially it ensures the integrity and authenticity of the token. 

- If a JWT is intercepted, can the attacker see what's inside the payload?
	- yes, the attacker can see what's inside the payload because the payload is only encoded and not encrypted. 
	- Encoding can be easily reversed using a Base64 decoding tool. 
	- This is why sensitive information should not be stored in the JWT payload. 


- How can you implement authentication with a JWT?  Describe how it works at a high level.
	- make request with user name and password. 
	- application validates credentials: the server application validates these credentials against the data stores, often in a database. 
	- Token generation: if the credentials are valid, the server create a JWT token by placing the necessary information (like user identification details) in the payload, then signing the token with a secret key. 
	- token transmission: this token is then sent back to the user.
	- token storage: the user's client (usually a browser or mobile application) stores this token, often in local storage or a session variable, and includes this token often in local storage or a session variable, and includes this token in the header of future HTTP requests. 
	- token verification: each time the user tries to access a protected route, the token is sent to the server, which then verifies the token's signature to ensure that it's valide and has not been tampered with. 
	- Access granted or denied: if the verification is successful, the server grants access to the protected resource requester by the user. If verification fails, access is denied. 

- Compare and contrast unit, integration and end-to-end tests.
	- unit tests are used to test individual components o function of the software. 
	- integration tests are at a higher level that the unit tests, and focuse on the interaction between components and can be used to identify interface defects. Are usually slower than unit tests. 
	- End-to-end tests simulate real user scenarios from start to finish. 

- What is a mock? What are some things you would mock?
	- A mock is a technique used in unit testing where the test doubles an actual complex object with a simplified version that simulates its behavior. This allows the test to isolate and focus on the piece of code being tested without dealing with the complexity or side effects of the actual object.
	- Some things that you can mock include: AJAX requests, reading/writing to files, impure function like Math.random. The purpose of moching these items in tests is to ensure test isolation, increase test speed, control test scenarios, avoid unnecessary operations. 

- What is continuous integration?
	- continuous integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle. 


- What is an environment variable and what are they used for?
	- An environment variable is a variable stored in the operating system that is used to set configuration values for software and system processes.

- What is TDD? What are some benefits and drawbacks?
	- Test Driven Development is an approach that some developers take.
	- Write the tests first - they will fail. 
	- Only write the code necessary to get the tests to pass. 
	-  

- What is the value of using JSONSchema for validation?
	- allows user data to fail fast, before bad data gets to you db. 
	- reduces the amount of code for processing and validating data.
	- to get a validation system that is easy to setup and maintain. 

- What are some ways to decide which code to test?
	- test all the important stuff
	- make sure your applications have a readme
	- test API not DB's
	- stay consistent with what you are testing and how you are testing. 

- What does `RETURNING` do in SQL? When would you use it?
	- works with INSERT/UPDATE/DELETE 
	- this is to return the data that was inserted or deleted
	- 

- What are some differences between Web Sockets and HTTP?
	- WebSockets allows persistent bidirectional communication between the user and the server and allows the server to push real-time updates to clients. 
	- with HTTP the client initiates the requests and the server responds, typically used for retrieving web pages and resources. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
They seem to have an analogous logic but I think I prefered flask, because it seemed a little simpler, and the tests ran more smoothly than with express and jest. 
