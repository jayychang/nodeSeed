const cronJobs = require('../cron');

const cronLoader = async ({ app }) => {
  cronJobs({ app });
}

module.exports = cronLoader;
