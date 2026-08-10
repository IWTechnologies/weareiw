const careerPhotos = [
    { id: 1, src: "/careerImages/rectangle1.webp", alt: "IW customer service team" },
    { id: 2, src: "/careerImages/square1.webp", alt: "IW celebrating at annual employee appreciation week, playing in bags tournament" },
    { id: 3, src: "/careerImages/square2.webp", alt: "IW team celebrating Easter with the easter bunny" },
    { id: 4, src: "/careerImages/square3.webp", alt: "IW employees celebrating Cinco de Mayo" },
    { id: 5, src: "/careerImages/rectangle4.webp", alt: "IW employees conversing at front desk" },
    { id: 6, src: "/careerImages/Mike-and-Chester-Cat.png", alt: "Mike Thornton with Chester Cheetah" },
    { id: 7, src: "/careerImages/rectangle3.webp", alt: "IW employees working in the warehouse" },
    { id: 8, src: "/careerImages/Balta-Retirement-01.webp", alt: "IW celebrating Balta's retirement" },
    { id: 9, src: "/careerImages/square4.webp", alt: "IW team recruiting at the Elgin Community College job fair" },
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