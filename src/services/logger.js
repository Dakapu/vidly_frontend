import Raven from "raven-js";

function init() {
  Raven.config(
    "https://0a1f230d026a4924a6bee2c3ef401b73@o1283220.ingest.sentry.io/6492714"
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
