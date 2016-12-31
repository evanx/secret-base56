FROM mhart/alpine-node
ADD package.json .
RUN npm install
ADD src/index.js /src/index.js
CMD ["node", "--harmony-async-await", "src/index.js"]
