import Link from 'next/link'

export const Header = () => {
  return (
    <header className="mb-8">
      <div className="flex justify-between items-start mb-6 flex-col md:flex-row">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
            AI-ГЕНЕРАЦИЯ
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            КАРТИНОК И ОТКРЫТОК
          </p>
        </div>

        <div className="flex justify-end mb-6">
          <Link href={`/auth`}>
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 transition-colors shadow-lg">
              НАЧАТЬ СОЗДАНИЕ
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}