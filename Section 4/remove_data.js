const fs = require("fs");

const remove_book = (note) => {
    // bookObject.push(note);
    const data = fs.readFileSync('data.json', 'utf-8')
    let json_data = JSON.parse(data.toString())

    // let index = json_data.findIndex(x => x.title === note);

    // delete json_data[index]

    let result = json_data.filter(x => x.title !== note);

    // console.log(index);

    console.log(result);

    // fs.writeFileSync('data.json', JSON.stringify(json_data));
    fs.writeFileSync('data.json', JSON.stringify(result));
    // console.log(note);
}

module.exports = remove_book;

//run : node index.js remove --title="{Judul yang ingin dihapus}"