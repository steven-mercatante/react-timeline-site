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

const customTheme = {
  track: {
    // backgroundColor: "white"
  },
  buttons: {
    backgroundColor: "cyan",
    color: "#000"
  },
  eventContent: {
    flexGrow: 1
  }
};

const opts = {
  animationsEnabled: false,
  layout: "alternateEvents",
  // layout: "alternateEventsInlineDate",
  // layout: "inlineEvents",
  // layout: "inlineEventsInlineDate",
  responsiveLayout: "inlineEventsInlineDate"
  // responsiveLayout: "inlineEvents"
};

function CustomDate({ children }) {
  return (
    <time>
      <h3>{children}</h3>
    </time>
  );
}

function CustomMarker(props) {
  // return <div>CUSTOM MARKER</div>;
  return <EventMarker {...props} />;
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
          theme={customTheme}
          // theme="ROLI"
          opts={opts}
        >
          <Events>
            <TextEvent
              // date="1/1/19"
              // date={() => <CustomDate>1/1/19</CustomDate>}
              date={<CustomDate>1/1/19</CustomDate>}
              marker={<CustomMarker />}
              text="**hello** *world* hmm this is kind of cool"
            >
              <div>
                <Button as="a" href="https://google.com" target="_blank">
                  CLICK ME
                </Button>
                <Button onClick={() => alert("CLICKED!")}>Alert!</Button>
              </div>
            </TextEvent>

            <TweetEvent
              date="x"
              id="20"
              text="cool tweet!"
              marker={<CustomMarker />}
            >
              <div>
                <Button>CLICK ME</Button>
              </div>
            </TweetEvent>

            <ImageEvent
              date="April 13, 1970"
              src="/static/images/space/apollo-13.png"
              alt="apollo 13"
              text="weeee, rockets!"
              credit="sup"
              marker={<CustomMarker />}
            >
              <div>
                <Button>CLICK ME</Button>
              </div>
            </ImageEvent>

            <YouTubeEvent
              date="???"
              id="Zd2D3MKX3YE"
              name="demo vide"
              text="lol"
              marker={<CustomMarker />}
            >
              <div>
                <Button>CLICK ME</Button>
              </div>
            </YouTubeEvent>

            <Event date="Tomorrow!">
              <Card date="Tomorrow!">
                <h1>you can literally put anything here</h1>
                <YouTubeAtom id="Zd2D3MKX3YE" name="demo video 2" />
                <TweetAtom id="100" />
                <TextAtom text="here's **some more** shit" />
                <p>and yet more!qa</p>
                <div>
                  <Button>CLICK ME</Button>
                </div>
              </Card>
            </Event>
          </Events>
        </Timeline>
        <style jsx>{`
          .container {
            height: 100%;
            background-color: #000;
            background-image: url(/static/images/space/bg.jpg);
            background-size: cover;
            background-position: 50%;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
}
