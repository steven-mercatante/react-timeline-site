import Timeline from "@merc/react-timeline";

const events = [
  { type: "text", date: "7/16/19", text: "hello" },
  {
    type: "image",
    date: "7/13/19",
    src: "/static/images/mario/smb.png"
  },
  {
    type: "image",
    date: "7/13/19",
    src: "/static/images/mario/smb2.jpg"
  },
  {
    type: "image",
    date: "7/13/19",
    src: "/static/images/mario/smb3.png"
  },
  { type: "youtube", date: "7/13/19", id: "j8YFxB6rYIo" },
  { type: "twitter", date: "7/13/19", id: "1149702455590105089" }
];

export default function Mario() {
  return <Timeline events={events} />;
}
