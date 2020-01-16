const {finalize, first} = require('rxjs/operators')
const anotherModule$ = require('b')
const sameModule$ = require('./c')

anotherModule$.pipe(
	finalize(() => console.log('a finalized b')), // Stream from another module doesn't finalize
	first()
).subscribe()

sameModule$.pipe(
	finalize(() => console.log('a finalized c')), // Stream from same module finalize
	first()
).subscribe()
