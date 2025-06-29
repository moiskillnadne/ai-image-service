'use client'
import React from 'react';
import { BackgroundPattern } from '../components/BackgroundPattern';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Link from 'next/link';


const SignInPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden flex items-center justify-center">
      
      <BackgroundPattern />

      <div className="relative z-10 w-full max-w-[600px] mx-auto px-6">
        <Header title="ВХОД В СИСТЕМУ" description="ЧТОБЫ НЕ ПОТЕРЯТЬ ВАШИ КАРТИНКИ, ВОЙДИТЕ С ПОМОЩЬЮ EMAIL"/>

        <div className="space-y-6 max-w-[350px] mx-auto">
          <div className="text-center flex flex-col gap-4">
            <Link href={`/auth/login`}>
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 transition-colors shadow-lg">
                ВОЙТИ
              </button>
            </Link>

            <Link href={`/auth/signup`}>
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 transition-colors shadow-lg">
                Создать аккаунт
              </button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SignInPage;