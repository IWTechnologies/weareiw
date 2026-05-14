const careerPhotos = [
    { id: 1, src: "/careerImages/EmployeeAppreciationWeek2024.webp", alt: "test" },
    { id: 2, src: "/careerImages/life-at-iwt-07.jpg", alt: "test" },
    { id: 3, src: "/careerImages/ConventionBooth.webp", alt: "test" },
    { id: 4, src: "/careerImages/life-at-iwt-09.jpg", alt: "test" },
    { id: 5, src: "/careerImages/life-at-iwt-01.jpg", alt: "test" },
    { id: 6, src: "/careerImages/Mike-and-Chester-Cat.png", alt: "test" },
    { id: 7, src: "/careerImages/santa-2024.webp", alt: "test" },
    { id: 8, src: "/careerImages/Balta-Retirement-01.webp", alt: "test" },
    { id: 9, src: "/careerImages/life-at-iwt-02.jpg", alt: "test" },
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