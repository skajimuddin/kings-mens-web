const fs = require('fs');
const path = require('path');
const https = require('https');

// Helper function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image, status code: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
      
      file.on('error', err => {
        fs.unlink(filepath, () => {}); // Delete the file if there was an error
        reject(err);
      });
    }).on('error', err => {
      fs.unlink(filepath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
}

// Image mappings from image-sources.txt
const imageMap = [
  // Banners
  {
    url: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7',
    path: 'public/images/banners/fashion-hero-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
    path: 'public/images/banners/fashion-hero-2.jpg'
  },
  
  // Products
  {
    url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
    path: 'public/images/products/tshirt-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990',
    path: 'public/images/products/tshirt-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb',
    path: 'public/images/products/jeans-1.jpg'
  },  {
    url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
    path: 'public/images/products/jeans-2.jpg'
  },
    // People/Models
  {
    url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    path: 'public/images/people/model-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    path: 'public/images/people/model-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    path: 'public/images/people/model-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    path: 'public/images/people/model-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    path: 'public/images/people/model-5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
    path: 'public/images/people/model-6.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    path: 'public/images/people/model-7.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    path: 'public/images/people/model-8.jpg'
  }
];

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (const image of imageMap) {
    try {
      await downloadImage(image.url, image.path);
    } catch (error) {
      console.error(`Error downloading ${image.url}:`, error.message);
    }
  }
  
  console.log('All downloads completed!');
}

// Execute the download
downloadAllImages();
