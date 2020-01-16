const {ReplaySubject} = require('rxjs')
const {finalize} = require('rxjs/operators')

const subject = new ReplaySubject()
subject.next()

module.exports = subject
