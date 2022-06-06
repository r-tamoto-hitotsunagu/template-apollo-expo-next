FROM amazonlinux:2022

# dnf update & delete cache
RUN dnf update -y && dnf clean all

# create user
RUN useradd express -md /home/express && \
    echo 'express:express' | chpasswd && \
    echo 'express ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# package install
RUN dnf -y install \
        which \
        systemd \
        unzip \
        sudo \
        kernel-devel \
        kernel-headers \
        libyaml-devel \
        libffi-devel \
        tk-devel \
        zip \
        wget \
        tar \
        zlib \
        zlib-devel \
        bzip2 \
        bzip2-devel \
        readline \
        readline-devel \
        openssl \
        openssl-devel \
        gdbm-devel \
        procps \
        lsof \
        nodejs \
        npm

RUN dnf -y groupinstall "Development Tools"

# install aws cli v2
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install

# Synchronize
COPY package*.json ./
RUN npm install --production

# change user
USER express
ENV GOPATH="/home/express" \
    PATH="$PATH:/home/express/bin" \
    HOME="/home/express"

WORKDIR /home/express/app
CMD ["node", "index.js"]