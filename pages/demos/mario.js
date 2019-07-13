import { Timeline } from "@merc/react-timeline";

const events = [{ type: "text", date: "7/13/19", text: "Hello!" }];

export default function Mario() {
  return <Timeline events={events} />;
}
