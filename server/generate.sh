#!/bin/bash

protoc -I=proto --go_out=. --go-grpc_out=. proto/helloworld.proto
