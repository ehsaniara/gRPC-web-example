# server/Dockerfile

# Use an official Golang image to build the Go app
FROM golang:1.23-alpine AS build-stage

# Set the current working directory inside the container
WORKDIR /app

# Copy the Go Modules files
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source code from the host to the working directory inside the container
COPY . .

# Build the Go app
RUN go build -o main .

# Stage 2: Run the Go server
FROM alpine:latest

WORKDIR /root/

# Copy the binary from the build stage
COPY --from=build-stage /app/main .

# Expose the port that the server will listen on
EXPOSE 50051

# Command to run the executable
CMD ["./main"]
