

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
