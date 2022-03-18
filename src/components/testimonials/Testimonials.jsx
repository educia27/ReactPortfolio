import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Anon",
      title: "Coworker",
      img:
        "assets/coworker.png",
      desc:
        "Eddy epitomizes what it means to be team player. He is an excellent communicator and demonstrates excellent work ethic.",
    },
    {
      id: 2,
      name: "Anon",
      title: "Geospatial Manager",
      img:
        "assets/review.jpeg",
      desc:
        "Eddy's approach to work and desire to learn leads to efficiencies gained and goals accomplished.",
      featured: true,
    },
    {
      id: 3,
      name: "Anon",
      title: "Geo Supervisor",
      img:
        "assets/software.jpeg",
      desc:
        "Eddy's contributions to the program have been impactful and has demonstrated that he is ready for additional roles and responsibilities.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}