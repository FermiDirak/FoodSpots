FROM node:carbon

LABEL project_owner Bryan Manuele <ManueleBryan@gmail.com>

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn

EXPOSE 5000

CMD ["yarn", "production-start"]