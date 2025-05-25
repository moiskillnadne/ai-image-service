'use client';
import { BackgroundPattern } from './components/BackgroundPattern';
import { Header } from './components/Header';
import { ExampleGallery } from './components/ExampleGallery';
import { HowItWorks } from './components/HowItWorks';
import { Amplify } from 'aws-amplify';
import outputs from "~/amplify_outputs.json";

Amplify.configure(outputs)

const AIGenerationLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden">
      <BackgroundPattern />

      <div className="relative z-10 container mx-auto px-6 py-8">
        <Header />

        <div className="mb-16">
          <p className="text-xl text-gray-600 max-w-2xl">
            Привет! Это сервис, который изменит твои фото с помощью искусственного интеллекта.
          </p>
        </div>

        <ExampleGallery />

        
        <HowItWorks />
      </div>
    </div>
  );
};

export default AIGenerationLanding;