const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Job {
    _id: ID!
    title: String!
    description: String!
    company: String!
    location: String!
    createdAt: String!
    updatedAt: String!
}


type Application {
    _id: ID!
    job: Job!
    applicantName: String!
    applicantEmail: String!
    coverLetter: String!
    submittedAt: String!
}


input JobInput {
    title: String!
    description: String!
    company: String!
    location: String!
}

input ApplicationInput {
    jobId: ID!
    applicantName: String!
    applicantEmail: String!
    coverLetter: String!
}

type RootQuery {
    jobs: [Job!]!
    job(id: ID!): Job!
    applicationsByJob(jobId: ID!): [Application!]!
}

type RootMutation {
    createJob(jobInput: JobInput): Job
    createApplication(applicationInput: ApplicationInput): Application
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);