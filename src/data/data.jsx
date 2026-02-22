import { Camera, Heart, Baby, Sparkles, Mail, Phone, MapPin} from 'lucide-react';
export const categories = [
    {
      id: 'prewedding',
      title: 'Pre-Wedding',
      icon: Heart,
      description: 'Capture your love story before the big day',
      image: 'https://res.cloudinary.com/dcxnayxgx/image/upload/v1771717142/bhandavyafilms-18022026-0020_ezqpv6.jpg'
    },
    {
      id: 'wedding',
      title: 'Wedding',
      icon: Sparkles,
      description: 'Timeless memories of your special day',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop'
    },
    {
      id: 'baby',
      title: 'Baby Shoots',
      icon: Baby,
      description: 'Precious moments of your little ones',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop'
    },
    {
      id: 'model',
      title: 'Model Shoots',
      icon: Camera,
      description: 'Professional portfolio & fashion photography',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop'
    }
  ];

  export const testimonials=[
    {
      name: 'Priya & Rahul',
      text: 'Bhandavya Films captured our wedding beautifully. Every moment was preserved with such artistry and emotion. Highly recommended!',
      rating: 5,
      event: 'Wedding',
      image:'https://res.cloudinary.com/dcxnayxgx/image/upload/v1771077631/WhatsApp_Image_2026-02-14_at_7.20.33_PM_1_yzgdzx.jpg'
    },
    {
      name: 'Sneha Reddy',
      text: 'The pre-wedding shoot was magical! The team made us feel comfortable and the photos turned out absolutely stunning.',
      rating: 5,
      event: 'Pre-Wedding',
      image:'https://res.cloudinary.com/dcxnayxgx/image/upload/v1771077630/WhatsApp_Image_2026-02-14_at_7.20.33_PM_2_er64j3.jpg'
    },
    {
      name: 'Arjun & Kavya',
      text: 'Professional, creative, and incredibly talented. Our baby shoot photos are treasures we will cherish forever.',
      rating: 5,
      event: 'Baby Shoot',
      image:'https://res.cloudinary.com/dcxnayxgx/image/upload/v1771077630/WhatsApp_Image_2026-02-14_at_7.20.33_PM_hip9az.jpg'
    }
  ]