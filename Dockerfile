#########################################
# Build UI stage
#########################################
from node:lts-buster AS uiBuilder

COPY . readflow
WORKDIR readflow 
RUN git clone --depth=1 https://github.com/ncarlier/makefiles
RUN make bookmarklet && rm -rf bookmarklet/node_modules
RUN make ui && rm -rf ui/node_modules


#########################################
# Build stage
#########################################
FROM golang:1.16 AS builder

COPY --from=uiBuilder readflow /go/src/github.com/ncarlier/readflow
WORKDIR /go/src/github.com/ncarlier/readflow

RUN make

#########################################
# Distribution stage
#########################################
FROM gcr.io/distroless/base-debian10

COPY --from=builder /go/src/github.com/ncarlier/readflow/release/readflow /usr/local/bin/readflow

EXPOSE 8080 9090

ENTRYPOINT [ "readflow" ]

