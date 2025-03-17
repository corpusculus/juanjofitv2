import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Section } from '@/features/landing/Section';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <div id="about">
      <Section>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-2 text-3xl font-bold">{t('title')}</h2>
            <p className="mb-8 text-muted-foreground">{t('description')}</p>
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">About Juanjo</h3>
              <p className="mb-4 text-muted-foreground">
                With over 10 years of experience in the fitness industry, I've helped hundreds of clients transform their bodies and lives through personalized training and nutrition guidance.
              </p>
              <p className="mb-4 text-muted-foreground">
                I hold certifications in Personal Training (NASM), Nutrition Coaching (Precision Nutrition), and Functional Movement (FMS). My approach combines science-based methods with practical, sustainable habits that fit into your lifestyle.
              </p>
              <p className="text-muted-foreground">
                Whether you're just starting your fitness journey or looking to break through plateaus, my mission is to help you achieve lasting results while building a healthier relationship with fitness and nutrition.
              </p>
            </div>
            <Button size="lg">{t('button_text')}</Button>
          </div>
          <div className="flex-1">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/trainer.jpg"
                alt="Juanjo - Personal Trainer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
