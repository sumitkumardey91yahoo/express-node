const url = require('url');

const demo = "https://altdigital.atlassian.net/jira/your-work?test=100&ok=900";


const q = url.parse(demo, true);

console.log(q.host," ---" ,q.query.test,"----", q.protocol)


