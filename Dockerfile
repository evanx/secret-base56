FROM mhart/alpine-node
ADD package.json .
RUN npm install
ADD index.js .
CMD ["node", "--harmony-async-await", "index.js"]
