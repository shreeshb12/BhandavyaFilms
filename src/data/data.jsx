import { Camera, Heart, Baby, Sparkles } from 'lucide-react';
import { supabase } from "../config/config";

const bucketNames = ['prewedding', 'wedding', 'babyshoot', 'modelshoot'];

// Function to fetch images from Supabase
export async function fetchAllImages() {
  const images = {};
  
  try {
    for (let index = 0; index < bucketNames.length; index++) {
      const bucketName = bucketNames[index];
      
      const { data, error } = await supabase
        .storage
        .from(bucketName) // Fixed: removed curly braces
        .list("", { limit: 100 });

      if (error) {
        console.error(`Error fetching from ${bucketName}:`, error);
        images[bucketName] = [];
        continue;
      }

      // Generate URLs for each image
      const imageUrls = data
        .filter(file => file.name !== '.emptyFolderPlaceholder') // Filter out placeholder files
        .map((file) => {
          return `https://vaxdddjzhvwgrgffyjvo.supabase.co/storage/v1/object/public/${bucketName}/${file.name}`; // Fixed: dynamic bucket name
        });
      
      images[bucketName] = imageUrls; // Fixed: correct property access
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }
  
  return images;
}

// Base categories configuration
export const getCategoriesConfig = (images = {}) => [
  {
    id: 'prewedding',
    title: 'Pre-Wedding',
    icon: Heart,
    description: 'Capture your love story before the big day',
    image: 'https://res.cloudinary.com/dcxnayxgx/image/upload/v1771717142/bhandavyafilms-18022026-0020_ezqpv6.jpg',
    photos: images.prewedding || []
  },
  {
    id: 'wedding',
    title: 'Wedding',
    icon: Sparkles,
    description: 'Timeless memories of your special day',
    image: 'https://res.cloudinary.com/dcxnayxgx/image/upload/v1771767909/Bhandavya_Films-_Hubli_Dharwad_l1anir.jpg',
    photos: images.wedding || []
  },
  {
    id: 'baby',
    title: 'Baby Shoots',
    icon: Baby,
    description: 'Precious moments of your little ones',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop',
    photos: images.babyshoot || []
  },
  {
    id: 'model',
    title: 'Model Shoots',
    icon: Camera,
    description: 'Professional portfolio & fashion photography',
    image: 'https://res.cloudinary.com/dcxnayxgx/image/upload/v1771768167/Bhandavya_Films_Model_Shoot_-_Hubli_Dharwad_wlyyro.jpg',
    photos: images.modelshoot || []
  }
];

export const testimonials = [
  {
    name: 'Priya & Rahul',
    text: 'Bhandavya Films captured our wedding beautifully. Every moment was preserved with such artistry and emotion. Highly recommended!',
    rating: 5,
    event: 'Wedding',
    image: 'https://res.cloudinary.com/dcxnayxgx/image/upload/v1771077631/WhatsApp_Image_2026-02-14_at_7.20.33_PM_1_yzgdzx.jpg'
  },
  {
    name: 'Sneha Reddy',
    text: 'The pre-wedding shoot was magical! The team made us feel comfortable and the photos turned out absolutely stunning.',
    rating: 5,
    event: 'Pre-Wedding',
    image: 'https://res.cloudinary.com/dcxnayxgx/image/upload/v1771077630/WhatsApp_Image_2026-02-14_at_7.20.33_PM_2_er64j3.jpg'
  },
  {
    name: 'Arjun & Kavya',
    text: 'Professional, creative, and incredibly talented. Our baby shoot photos are treasures we will cherish forever.',
    rating: 5,
    event: 'Baby Shoot',
    image: 'https://res.cloudinary.com/dcxnayxgx/image/upload/v1771077630/WhatsApp_Image_2026-02-14_at_7.20.33_PM_hip9az.jpg'
  }
];