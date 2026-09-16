const careerPhotos = [
    { id: 1, src: "/careerImages/iw-technologies-bags-tournament-champions.webp", title: "IW Technologies Bags Champions, Crowned", alt: "Bags tournament winners hold their trophies on stage at IW Technologies Employee Appreciation Week." },
    { id: 2, src: "/careerImages/square1.webp", title: "Bags Duo In Action", alt: "IW celebrating at annual employee appreciation week, playing in bags tournament" },
    { id: 3, src: "/careerImages/square2.webp", title: "IW Crew Posing With Easter Bunny", alt: "IW team celebrating Easter with the easter bunny" },
    { id: 4, src: "/careerImages/iw-technologies-50-years-team-shirts-outdoor.webp", title: "The Crew Behind Fifty Years at IW Technologies", alt: "IW Technologies team members in 50 Years shirts wave together outside the Elgin facility." },
    { id: 5, src: "/careerImages/iw-technologies-50th-anniversary-gift-bag.webp", title: "A Little Thank-You, Bagged Up from IW Technologies", alt: "An IW Technologies team member smiles holding a 50 Years gift bag at a company event." },
    { id: 6, src: "/careerImages/iw-technologies-trade-show-booth-representative.png", title: "Mike Thornton On the Floor at the NRF Trade Show With Mascot", alt: "An IW Technologies representative stands at a partner trade show booth holding a drink with a mascot." },
    { id: 7, src: "/careerImages/iw-technologies-50th-anniversary-founder-speech.webp", title: "IW Technologies Employees Watching Al Moorhouse Speak", alt: "IW Technologies employees watch founder Al Moorhouse speak at the 50th anniversary celebration during Employee Appreciation Week." },
    { id: 8, src: "/careerImages/iw-technologies-employee-retirement-celebratio.webp", title: "IW Technologies Retirement Celebration", alt: "IW Technologies team members celebrate Balta’s retirement with a signed shirt and card." },
    { id: 9, src: "/careerImages/iw-technologies-employee-appreciation-week-red-carpet.webp", title: "Rolling Out the Red Carpet for Our Team", alt: "IW Technologies team members pose on the red carpet at Employee Appreciation Week." },
]

export default function PhotoGrid() {
    return (
        <div className="w-full">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                {careerPhotos.map((photo) => (
                    <div key={photo.id} className="mb-4">
                        <img src={photo.src} title={photo.title} alt={photo.alt}
                        className="w-full h-auto rounded-2xl" />
                    </div>
                ))}
            </div>
        </div>
    );
}