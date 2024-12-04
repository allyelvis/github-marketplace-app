const core = require('@actions/core');
const github = require('@actions/github');

try {
  const input = core.getInput('example_input');
  console.log(`Input received: ${input}`);
} catch (error) {
  core.setFailed(error.message);
}
