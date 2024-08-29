#!/bin/bash

# Start the gRPC server
echo "Starting gRPC server..."
(cd ../server && go run main.go) &

# Start Nginx
echo "Starting Nginx..."
sudo nginx -c /path/to/your/nginx.conf
