const yargs = require('yargs')

const addData = require('./add_data.js')

const removeData = require('./remove_data.js')

yargs.version('1.1.0');

const command = process.argv[2]

if(command === 'add'){
    console.log('Adding note!');
    console.log('');
}else if(command === 'remove'){
    console.log('Removing note!');
    console.log('');
}

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        // console.log('Adding a new note!')
        // console.log('Title: ' + argv.title);
        // console.log('Body: ' + argv.body);
        let note_title = argv.title;
        let note_body = argv.body;
        let note = JSON.stringify({title: note_title, body: note_body});
        // console.log(note);
        addData(note);
        // addData();
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove selected note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        let note_title = argv.title;
        // let note_target = JSON.stringify({title: note_title});
        // console.log(note_target);
        // console.log(note_title);
        removeData(note_title);
        // removeData(note_target);
    }
})

console.log(yargs.argv);

console.log()

const square = (x) => {
    return x * x
}

console.log(square(2));

console.log()

const squareAlt = (x) => x * x

console.log(squareAlt(2));

console.log()

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList(){
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()

console.log()

const users = [{
    name: 'Andrew Mead',
    age: 27
},{
    name: 'George Hudson',
    age: 72
},{
    name: 'Clay Klay',
    age: 45
}]

const user = users.find((user) => user.name === 'George Hudson')

console.log(user)