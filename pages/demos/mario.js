import Timeline from "@merc/react-timeline";

const events = [
  { type: "text", date: "7/13/19", text: "Hello!" },
  { type: "text", date: "7/13/19", text: "What's for lunch?" }
];

export default function Mario() {
  return <Timeline events={events} />;
}
