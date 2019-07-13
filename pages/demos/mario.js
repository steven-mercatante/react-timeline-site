import Timeline from "@merc/react-timeline";

const events = [
  {
    type: "image",
    date: "7/13/19",
    src:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png"
  },
  {
    type: "image",
    date: "7/13/19",
    src: "https://upload.wikimedia.org/wikipedia/en/0/00/Super_Mario_Bros_2.jpg"
  },
  {
    type: "image",
    date: "7/13/19",
    src:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Super_Mario_Bros._3_coverart.png"
  }
];

export default function Mario() {
  return <Timeline events={events} />;
}
