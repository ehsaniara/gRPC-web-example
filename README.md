# gRPC-Web Example Project

This project demonstrates how to set up a simple gRPC-Web client and server with Nginx as a reverse proxy.

## Project Structure

- **client/**: Contains the gRPC-Web client code.
- **server/**: Contains the gRPC server code written in Go.
- **nginx/**: Nginx configuration file.
- **scripts/**: Optional scripts for managing the project.

## How to Run

### Prerequisites

- [Go](https://golang.org/doc/install)
- [Node.js and npm](https://nodejs.org/)
- [Nginx](https://nginx.org/)
- [protoc compiler](https://grpc.io/docs/protoc-installation/)

### Steps

1. **Generate gRPC Code**:
   ```bash
   protoc -I=server/proto --go_out=server --go-grpc_out=server server/proto/helloworld.proto
   protoc -I=server/proto --js_out=import_style=commonjs:client/src/generated --grpc-web_out=import_style=typescript,mode=grpcwebtext:client/src/generated server/proto/helloworld.proto
