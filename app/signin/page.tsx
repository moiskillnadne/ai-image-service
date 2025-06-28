'use client'
import React, { useState } from 'react';
import { BackgroundPattern } from '../components/BackgroundPattern';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SigninWidget } from './SigninWidget/LoginWidget';

type Step = 'SEND_CODE' | 'CONFIRM_CODE';

const SignInPage = () => {
  const [step, setStep] = useState<Step>("SEND_CODE")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden flex items-center justify-center">
      
      <BackgroundPattern />

      <div className="relative z-10 w-full max-w-[600px] mx-auto px-6">
        <Header />

        <div className="space-y-6 max-w-[350px] mx-auto">
          <SigninWidget step={step} setStep={setStep} />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SignInPage;