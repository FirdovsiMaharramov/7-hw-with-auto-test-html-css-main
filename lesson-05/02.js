const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    if (this.resources.hasOwnProperty(resource)) {
      this.resources[resource] += amount;
    } else {
      console.log("Invalid resource");
    }
  }
};

// Примеры использования:
game.addResource("gold", 50);  // Увеличит золото на 50
console.log(game.resources.gold); // 300
game.addResource("stone", 30); // "Invalid resource"

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(gallery, title, newValue) {
  gallery[title] = newValue;
}

// Примеры использования:
updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506');
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali');

console.log(gallery);
