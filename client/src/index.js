// Import the generated gRPC-Web client stubs and message classes
import {GreeterClient} from './generated/helloworld_grpc_web_pb';
import {HelloRequest} from './generated/helloworld_pb';

// Create an instance of the Greeter client
const client = new GreeterClient('http://localhost/api');

// Function to send a greeting request
function sayHello(name) {
    // Create a new request
    const request = new HelloRequest();
    request.setName(name);

    // Call the sayHello method on the Greeter client
    client.sayHello(request, {}, (err, response) => {
        if (err) {
            console.error('Error:', err.message);
            document.getElementById('output').textContent = 'Error: ' + err.message;
        } else {
            console.log('Greeting:', response.getMessage());
            document.getElementById('output').textContent = 'Greeting: ' + response.getMessage();
        }
    });
}

// Example usage: sending a request when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const name = 'World';
    sayHello(name);
});
