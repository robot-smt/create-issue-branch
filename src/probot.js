const IssueAssigned = require('./webhooks/issue-assigned')
const { version } = require('./version')

module.exports = (app) => {
    app.log(`Create Issue Branch, revision: ${version.revision}, built on: ${version.date}`)

    app.on('issues.assigned', async (ctx) => {
        await IssueAssigned.handle(app, ctx)
    })
    app.on('issue_comment.created', async (ctx) => {
        await IssueAssigned.handle(app, ctx)
    })
}
