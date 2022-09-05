const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require('octokit');

try {
    const github_token = core.getInput('github-token');
    const repositories = core.getInput('repositories');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const labels = core.getInput('labels');

    console.log(`Got ${repositories.length}, ${repositories} repositories!`);
    console.log(`Got ${title} title!`);
    console.log(`Got ${body} body!`);
    console.log(`Got ${labels} labels!`);
    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
        auth: github_token
    })

    for(let repository of repositories) {
        let repoValue = repository.split("/");
        let owner = repoValue[0];
        let repo = repoValue[1];

        await octokit.request(`POST /repos/${owner}/${repo}/issues`, {
            owner,
            repo,
            title,
            body,
            labels: [
                'bug'
            ]
        })
    }
    

    core.setOutput("are-issues-created", true);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}
