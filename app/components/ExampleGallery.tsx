import Image from 'next/image';

export const ExampleGallery = () => {
  const examples = [
    {
      id: 1,
      title: "ВАША ЭКШН-ФИГУРКА",
      image: "/images/action-toy-example.png",
      description: "Превратите себя в экшн-фигурку"
    },
    {
      id: 2,
      title: "ПИТОМЕЦ В ОБРАЗЕ ЧЕЛОВЕКА",
      image: "/images/human-version-pet-example.png",
      description: "Ваш питомец в человеческом облике"
    },
    {
      id: 3,
      title: "ПАСХАЛЬНАЯ ОТКРЫТКА",
      image: "/images/gift-card-example.png",
      description: "Праздничные открытки с ИИ"
    }
  ];

  return (
    <div className="mb-20">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
          {examples.map((example) => (
            <div key={example.id} className="cursor-pointer">
              <div className="bg-white rounded-2xl p-4 shadow-xl">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="w-full flex items-center justify-center">
                    <div className="rounded-xl flex items-center justify-center">
                      <Image 
                        src={example.image} 
                        alt={example.description} 
                        width={320} 
                        height={230} 
                        quality={75}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 text-center">
                  {example.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}