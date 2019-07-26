import Head from "next/head";
import Timeline, {
  Button,
  Card,
  Events,
  Event,
  EventMarker,
  ImageCard,
  ImageEvent,
  TextAtom,
  TextCard,
  TextEvent,
  TweetAtom,
  TweetEvent,
  YouTubeAtom,
  YouTubeCard,
  YouTubeEvent
} from "@merc/react-timeline";

function CustomCard({ event }) {
  return (
    <Card>
      <div className="my-custom-node">
        <h1>Hello from CustomNode!</h1>
        <p>{event.text}</p>
      </div>
    </Card>
  );
}

const theme1 = {
  timeline: {
    backgroundColor: "#FE7071"
  },
  timelineTrack: {
    backgroundColor: "#fff"
  },
  card: {
    backgroundColor: "#FE9B9B",
    color: "#fff"
  },
  marker: {
    border: "2px dashed #fff",
    backgroundColor: "#FE7071"
  },
  dateContainer: {
    margin: 0,
    padding: 0
  },
  date: {
    backgroundColor: "none",
    margin: 0,
    padding: 0
  }
};

const theme2 = {
  timeline: {
    backgroundColor: "#1D1D1D"
  },
  timelineTrack: {
    backgroundColor: "#fff",
    boxShadow: "none"
  },
  event: {
    ":nth-child(even) .card-col.alternate-events .card": {
      "align-items": "flex-end"
    }
  },
  eventCardColumn: {
    // border: "1px solid red"
  },
  card: {
    display: "none",
    backgroundColor: "none",
    border: "none",
    padding: 0,
    // color: "#000",
    color: "#fff",
    boxShadow: "none",
    top: "6px",
    marginBottom: "30px",
    "&.inline-events-inline-date": {
      top: "auto"
    }
  },
  eventMarkerColumn: {
    // border: "1px solid red",
    justifyContent: "flex-start"
  },
  marker: {
    border: "2px solid #fff",
    backgroundColor: "#1D1D1D",
    top: "4px"
  },
  dateContainer: {
    margin: 0,
    padding: 0
  },
  eventDateColumn: {
    // border: "1px solid red",
    justifyContent: "flex-start"
  },
  date: {
    backgroundColor: "none",
    margin: 0,
    padding: 0,
    fontSize: "1.5rem"
  },
  button: {
    // backgroundColor: "#1AD4DB",
    color: "#031C1D"
  },
  imageAtom: {
    borderRadius: "10px"
  },
  youTubeAtom: {
    borderRadius: "10px"
  }
};

const opts = {
  animationsEnabled: false,
  layout: "alt-evts" // alt-evts, alt-evts-inline-date, inline-evts, inline-evts-inline-date
};

function CustomDate({ children }) {
  return (
    <time>
      <h3>{children}</h3>
    </time>
  );
}

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Demos | Space Exploration</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <Timeline
          className="space-exploration"
          // theme={theme2}
          // theme="ROLI"
          opts={opts}
        >
          <Events>
            <TextEvent
              date="1/1/19"
              text="**hello** *world* hmm this is kind of cool"
            />

            <TweetEvent
              date="6/11/18"
              id="1006202911632904197"
              text="I put together a resource for folks learning GraphQL"
              // tweetOpts={{ linkColor: "#FD7375" }}
              tweetOpts={{ linkColor: "#064443" }}
            >
              <div>
                <Button as="a" href="https://graphqlstack.com" target="_blank">
                  Check it out!
                </Button>
              </div>
            </TweetEvent>

            <ImageEvent
              date="4/13/70"
              src="https://images.unsplash.com/photo-1493839523149-2864fca44919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
              alt="jellyfish swimming"
              credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
            >
              <div>
                <Button
                  as="a"
                  href="https://unsplash.com/search/photos/undersea"
                >
                  View more undersea photos
                </Button>
              </div>
            </ImageEvent>

            <YouTubeEvent
              date="6/18/19"
              id="6UnRHtwHGSE"
              name="demo video"
              text="I learned how to make General Tso's Chicken!"
            />
          </Events>
        </Timeline>
        <style jsx>{`
          .container {
            height: 100%;
            background-color: #f3f7f9;
            // background-image: url(/static/images/space/bg.jpg);
            // background-size: cover;
            // background-position: 50%;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
}
