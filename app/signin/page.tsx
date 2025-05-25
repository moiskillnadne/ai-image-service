'use client'
import React, { useState } from 'react';
import { BackgroundPattern } from '../components/BackgroundPattern';
import { Header } from './components/Header';
import { TextInput } from './components/TextInput';
import { Footer } from './components/Footer';

type Step = 'SEND_CODE' | 'CONFIRM_CODE';

const SignInPage = () => {
  const [email, setEmail] = useState('babkinskam@gmail.com');
  const [code, setCode] = useState('');

  const [step, setStep] = useState<Step>("SEND_CODE")

  const handleSendCode = () => {
    // Handle sending code logic here
    console.log('Sending code to:', email);
    // After successful code send, change step
    setStep('CONFIRM_CODE');
  };

  const handleConfirmCode = () => {
    // Handle code confirmation logic here
    console.log('Confirming code:', code);
  };

  const handleResendCode = () => {
    // Handle resend code logic here
    console.log('Resending code to:', email);
  };

  const handleSubmit = () => {
    if (step === 'SEND_CODE') {
      handleSendCode();
    } else {
      handleConfirmCode();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden flex items-center justify-center">
      
      <BackgroundPattern />

      <div className="relative z-10 w-full max-w-[600px] mx-auto px-6">
        <Header />

        {/* Form */}
        <div className="space-y-6 max-w-[350px] mx-auto">
          <TextInput 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="введите email"
            required
            disabled={step === 'CONFIRM_CODE'}
            className={step === 'CONFIRM_CODE' 
                  ? 'bg-gray-100 border-gray-300 cursor-not-allowed' 
                  : 'bg-white/80 border-pink-300 focus:border-pink-500'}
          />

          <TextInput
            type='text'
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="введите код из email"
            required
            disabled={step === 'SEND_CODE'}
            className={step === 'SEND_CODE'
                  ? 'text-gray-400 bg-gray-100 border-gray-300 cursor-not-allowed'
                  : 'text-gray-800 bg-white/80 border-pink-300 focus:border-pink-500'}
            />

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl font-bold py-4 rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {step === 'SEND_CODE' ? 'ОТПРАВИТЬ КОД' : 'ВОЙТИ'}
          </button>
        </div>

        <Footer />

        {step === "CONFIRM_CODE" && (
          <div className="text-center mt-6">
            <button 
              type="button" 
              onClick={handleResendCode}
              className="text-blue-600 hover:text-blue-800 font-medium underline decoration-1 underline-offset-2 hover:decoration-2 transition-all duration-200 cursor-pointer"
            >
              Отправить код повторно
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInPage;