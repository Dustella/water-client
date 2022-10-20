export default () => (
  <>
    <div>This is infomation about this toy</div>
    <h1>What is this project?</h1>
    <p>
      This is a third party, none-official realization of <></>
    </p>
    <p>
      In order to overcome the limitations of CORS policy, another project is
      built to act as a proxy server.
    </p>
    <h1>Is my data leaked using the project?</h1>
    <p>
      We are not responsible for any data leak. <br />
      We do not store any data. All data is stored in your browser. The proxy
      server act as a bridge between your browser and the official server. It is
      completely stateless and transparent, running on a cloudflare worker in
      edge network in cloudflare. You can even deploy your own proxy server.{" "}
      <br />
      However, some measures are taken to prevent CSRF attack. Your token is
      stored in localStorage and your credentials are passed to using
      Authorization header in HTTP request. <br />
    </p>
  </>
);
