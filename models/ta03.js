const fetch = require('node-fetch');

const itemsUrl = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

module.exports = class Item {

  static fetchAll(cb) {
    fetch(itemsUrl)
    .then(response => response.json())
    .then(data => {
      cb(data);
    })
    .catch((err) => console.log(err));
  }

  static search(query, cb) {
    fetch(itemsUrl)
    .then(response => response.json())
    .then(data => {
      const filteredItems = data.filter(item => {
        let tagFound = false;
        item.tags.forEach((tag) => {
          if (tag.toLowerCase().includes(query)) tagFound = true;
        });
        
        return (
          tagFound ||
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
      });
      cb(filteredItems);
    })
    .catch((err) => console.log(err));
  }
}
