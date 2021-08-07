FROM python:3-alpine

COPY src /home/ctf/app
WORKDIR /home/ctf/app

RUN apk add --no-cache gcc
RUN apk add --no-cache g++ make libffi-dev openssl-dev ca-certificates
RUN apk add --no-cache musl-dev jpeg-dev zlib-dev libffi-dev
RUN apk add --no-cache cairo-dev pango-dev gdk-pixbuf-dev ttf-freefont

ENV CRYPTOGRAPHY_DONT_BUILD_RUST=1

RUN pip install -r requirements.txt --upgrade
RUN addgroup -S ctf
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/home/ctf" \
    --ingroup "ctf" \
    --uid "1337" ctf

RUN rm /usr/bin/wget /usr/bin/nc
RUN chown -R root:root /home/ctf/app

COPY flag.txt /REDACTED

USER ctf

EXPOSE 8000

CMD ["flask", "run", "-h", "0.0.0.0", "-p", "8000"]
