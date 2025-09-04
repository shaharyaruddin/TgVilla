import fs from 'fs';
import path from 'path';

/**
 * Dynamically imports all images from a specific directory
 * @param {string} directory - The directory path relative to public/images
 * @returns {Object} - An object containing all imported images
 */
export function importImagesFromDirectory(directory) {
  const images = {};
  const fullPath = path.join(process.cwd(), 'public', 'images', directory);
  
  try {
    const files = fs.readdirSync(fullPath);
    
    files.forEach(file => {
      if (file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
        const key = path.parse(file).name;
        images[key] = `/images/${directory}/${file}`;
      }
    });
    
    return images;
  } catch (error) {
    console.error(`Error importing images from ${directory}:`, error);
    return {};
  }
}

/**
 * Creates a gallery object from a directory of images
 * @param {string} directory - The directory path relative to public/images
 * @param {string} name - The name of the gallery section
 * @returns {Object} - A gallery object with name and images array
 */
export function createGallerySection(directory, name) {
  const images = importImagesFromDirectory(directory);
  return {
    name,
    images: Object.values(images).sort((a, b) => {
      // Sort by number in filename if present
      const numA = parseInt(a.match(/\d+/)?.[0] || 0);
      const numB = parseInt(b.match(/\d+/)?.[0] || 0);
      return numA - numB;
    })
  };
} 