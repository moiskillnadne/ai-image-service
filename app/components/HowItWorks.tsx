export const HowItWorks = () => {
  const steps = [
    "ЗАРЕГИСТРИРУЙСЯ",
    "ВЫБЕРИ ТЕМУ",
    "ОПЛАТИ ЗАКАЗ",
    "ЗАГРУЗИ СВОЁ ФОТО",
    "ПОЛУЧИ РЕЗУЛЬТАТ"
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">
        КАК ЭТО РАБОТАЕТ?
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-4 max-w-6xl mx-auto">
        {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                {index + 1}
              </div>
              
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-gray-700 font-medium text-sm">
                  {step}
                </span>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}