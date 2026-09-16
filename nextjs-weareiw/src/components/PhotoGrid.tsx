const careerPhotos = [
    { id: 1, src: "/careerImages/BagsChamps2026.webp", alt: "IW employee appreciation week Bags Champs 2026" },
    { id: 2, src: "/careerImages/square1.webp", alt: "IW celebrating at annual employee appreciation week, playing in bags tournament" },
    { id: 3, src: "/careerImages/square2.webp", alt: "IW team celebrating Easter with the easter bunny" },
    { id: 4, src: "/careerImages/PeopleWaving.webp", alt: "IW employees group photo during employee appreciation week 2026" },
    { id: 5, src: "/careerImages/GuyHoldingBag.webp", alt: "IW employee posing with goodie bag during employee appreciation week 2026" },
    { id: 6, src: "/careerImages/Mike-and-Chester-Cat.png", alt: "Mike Thornton with Chester Cheetah" },
    { id: 7, src: "/careerImages/PeopleWatching.webp", alt: "IW employees listening to speech given by founder Al Moorhouse" },
    { id: 8, src: "/careerImages/Balta-Retirement-01.webp", alt: "IW celebrating Balta's retirement" },
    { id: 9, src: "/careerImages/RedCarpet.webp", alt: "IW employees posing for the red carpet during employee appreciation week 2026" },
]

export default function PhotoGrid() {
    return (
        <div className="w-full">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                {careerPhotos.map((photo) => (
                    <div key={photo.id} className="mb-4">
                        <img src={photo.src} alt={photo.alt}
                        className="w-full h-auto rounded-2xl" />
                    </div>
                ))}
            </div>
        </div>
    );
}