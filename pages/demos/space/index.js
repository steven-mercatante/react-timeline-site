import Timeline from "@merc/react-timeline";

const events = [
  {
    type: "text",
    date: "May 25, 1961",
    text:
      "In a speech before Congress, President John Kennedy announces that an American will land on the moon and be returned safely to Earth before the end of the decade."
  },
  {
    type: "youtube",
    date: "July 20, 1969",
    id: "Zd2D3MKX3YE",
    text: `Six **years** after U.S. President John F. Kennedy's assassination, the Apollo 11 crew lands on the Moon, fulfilling his promise to put an American there by the end of the decade and return him safely to Earth. `
  },
  {
    type: "image",
    date: "April 13, 1970",
    src: "/static/images/space/apollo-13.png",
    text:
      "An explosion ruptures thecommand module of Apollo 13, days after launch and within reach of the moon. Abandoning the mission to save their lives, the astronauts climb into the Lunar Module and slingshot around the Moon to speed their return back to Earth."
  }
];

export default function Index() {
  return (
    <div className="container">
      <Timeline events={events} />
      {/* <style jsx>{`
        .container {
          // width: 100%;
          height: 100vh;
          background-image: url(/static/images/space/bg.jpg);
          background-size: cover;
        }
      `}</style> */}
    </div>
  );
}
