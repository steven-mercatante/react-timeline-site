import Head from "next/head";
import Timeline, {
  Button,
  UrlButton,
  Events,
  Event,
  EventMarker,
  ImageAtom,
  ImageEvent,
  TextAtom,
  TextEvent,
  TweetAtom,
  TweetEvent,
  YouTubeAtom,
  YouTubeEvent
} from "@merc/react-timeline";

function CustomCard({ children }) {
  return <h1>CUSTOM CARD</h1>;
  return <div className="my-custom-card">{children}</div>;
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
  layout: "inline-evts-inline-date" // alt-evts, alt-evts-inline-date, inline-evts, inline-evts-inline-date
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
        <Timeline>
          <Events>
            <TextEvent date="1/1/19" text={`**Markdown** is *supported*`} />

            <ImageEvent
              date="2/14/19"
              src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
              alt="jellyfish swimming"
              credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
            >
              <div>
                <UrlButton href="https://unsplash.com/search/photos/undersea">
                  View more undersea photos
                </UrlButton>
              </div>
            </ImageEvent>

            <YouTubeEvent
              date="6/18/19"
              id="6UnRHtwHGSE"
              name="General Tso's Chicken recipe"
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
