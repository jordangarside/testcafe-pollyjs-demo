This is a demo of [testcafe](https://github.com/DevExpress/testcafe) with api-recording through [pollyjs](https://github.com/Netflix/pollyjs).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the Tests

Start the server:

```sh
yarn start
```

Start the [Polly](https://netflix.github.io/pollyjs/) REST persister server:

```sh
yarn start:polly
```

Run the tests:

```sh
yarn test
```

The first run will generate the recording and subsequent runs can be done offline.

## Additional Information

If for some reason you want to change the initialization of Polly you can modify `test/polly/index.js`.
Then run:

```
npx webpack --config test/polly/webpack.config.js
```
