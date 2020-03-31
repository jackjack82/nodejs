const chalk = require('chalk')          // imported external libraries (chalk for printing log)
const yargs = require('yargs')          // check at npmjs.com, yargs for log management
const notes = require('./notes.js')     // import external file, returns a dictionary through 
                                        // "module.exports"

// Customize yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {                          // get with --help
        title: {
            describe: 'Note title',
            demandOption: true,         // is field required for command "add"
            type: 'string'
        },
        body: {
            describe: 'Note body',      
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body) // what to execute
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()