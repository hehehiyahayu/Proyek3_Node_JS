const fs = require("fs");

const add_book = (note) => {
    const data = fs.readFileSync('data.json', 'utf-8')
    let json_data = JSON.parse(data.toString())
        // console.log(note)
        // console.log(json_data)
    let notes = JSON.parse(note)
    json_data.push(notes)
    // console.log(json_data);
    console.log();
    // console.log(JSON.stringify(json_data));
    console.log(json_data);
    console.log();
    fs.writeFileSync('data.json', JSON.stringify(json_data));
}

module.exports = add_book;
//run : node index.js add --title="{Nama Judul}" --body="{Isi Konten Body}"