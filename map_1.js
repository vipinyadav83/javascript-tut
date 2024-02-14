const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
//console.log(map);
for (const [key, value] of map) {
    console.log([key,':-', value]);
}