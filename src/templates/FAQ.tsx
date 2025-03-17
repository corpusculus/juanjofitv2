import Image from 'next/image';

import { Section } from '@/features/landing/Section';

type TestimonialProps = {
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
};

const Testimonial = ({ name, role, quote, imageSrc }: TestimonialProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center shadow-sm">
      <div className="relative size-20 overflow-hidden rounded-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground">
          {`"${quote}"`}
        </p>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  // Sample testimonials - in a real app, these would come from a CMS or API
  const testimonials = [
    {
      id: 'testimonial-1',
      name: 'Maria Rodriguez',
      role: 'Lost 15kg in 6 months',
      quote: 'Working with Juanjo completely transformed my approach to fitness. His personalized program and constant support helped me achieve results I never thought possible.',
      imageSrc: '/images/testimonials/client1.jpg',
    },
    {
      id: 'testimonial-2',
      name: 'David Chen',
      role: 'Marathon runner',
      quote: 'Juanjo\'s specialized training program improved my marathon time by 15 minutes. His knowledge of proper form and recovery techniques was invaluable.',
      imageSrc: '/images/testimonials/client2.jpg',
    },
    {
      id: 'testimonial-3',
      name: 'Sarah Johnson',
      role: 'Post-pregnancy fitness',
      quote: 'After having my baby, I was struggling to get back in shape. Juanjo created a safe, effective program that helped me regain my strength and confidence.',
      imageSrc: '/images/testimonials/client3.jpg',
    },
  ];

  return (
    <div id="testimonials">
      <Section
        subtitle="Client Success Stories"
        title="Transformations & Results"
        description="Don't just take my word for it. Here's what my clients have to say about their fitness journeys and the results they've achieved."
      >
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(testimonial => (
            <Testimonial
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};
