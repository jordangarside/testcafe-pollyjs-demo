import { ClientFunction } from "testcafe";

const stopPollyRecording = ClientFunction(() => {
  return window.polly.stop();
});

fixture("Simple Test")
  .page("http://localhost:3000")
  .clientScripts([
    "../polly/build/index.js",
    {
      content: `
    window.polly = new Polly('simpleTest', {
      adapters: ['fetch', 'xhr'],
      persister: 'rest',
    })
    window.polly.configure({
      recordFailedRequests: true,
      persisterOptions: {
        keepUnusedRequests: true,
        rest: {
          host: 'http://localhost:4000'
        }
      },
    })
`
    }
  ]);

test("should click on the things to do the requests", async t => {
  await t.wait(3000);
  await stopPollyRecording();
});
