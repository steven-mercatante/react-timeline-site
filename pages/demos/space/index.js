import Timeline, { themes } from "@merc/react-timeline";

const events = [
  {
    type: "text",
    date: "1/1/2019",
    text: `This one has buttons!
    \nsup?
    \n> this is a quote
    \n
    \n\-- _some famous person_`,
    buttons: [
      { url: "http://reactjs.org", label: "Click me!", cssClass: "some-link" },
      { label: "HELLO!", cssClass: "foo" }
    ]
  },
  {
    type: "text",
    date: "May 25, 1961",
    text:
      "In a speech before Congress, President John Kennedy announces that an American will land on the moon and be returned safely to Earth before the end of the decade."
    // component: CustomNode,
    // opts: { cssClass: "my-custom-node" }
  },
  {
    type: "youtube",
    date: "July 20, 1969",
    id: "Zd2D3MKX3YE",
    text: `Six **years** after U.S. President John F. Kennedy's assassination, the Apollo 11 crew lands on the Moon, fulfilling his promise to put an American there by the end of the decade and return him safely to Earth. `,
    buttons: [{ url: "http://reactjs.org", label: "Click me!" }]
  },
  {
    type: "image",
    date: "April 13, 1970",
    src: "/static/images/space/apollo-13.png",
    text:
      "An explosion ruptures the command module of Apollo 13, days after launch and within reach of the moon. Abandoning the mission to save their lives, the astronauts climb into the Lunar Module and slingshot around the Moon to speed their return back to Earth.",
    credit: "sup",
    buttons: [{ url: "http://reactjs.org", label: "Click me!" }]
  },
  {
    type: "twitter",
    date: "July 1, 2019",
    id: "1145741202936881152",
    text: "#hello world",
    buttons: [{ url: "http://reactjs.org", label: "Click me!" }]
  }
];

function CustomNode({ event }) {
  return (
    <div className="my-custom-node">
      <h1>Hello from CustomNode!</h1>
      <p>{event.text}</p>
    </div>
  );
}

const customTheme = {
  track: {
    backgroundColor: "cyan"
  },
  buttons: {
    backgroundColor: "cyan",
    color: "#000"
  },
  eventContent: {
    //  minWidth: "50%"
    flexGrow: 1
  }
};

const opts = { inlineTimestamp: false, animationsEnabled: false };

export default function Index() {
  return (
    <div className="container">
      <Timeline
        className="space-exploration"
        events={events}
        theme={customTheme}
        // theme="ROLI"
        opts={opts}
      />
      <style jsx>{`
        .container {
          height: 100%;
          background-color: #000;
          // background-image: url(/static/images/space/bg.jpg);
          background-size: cover;
          background-position: 50%;
        }
      `}</style>
    </div>
  );
}
