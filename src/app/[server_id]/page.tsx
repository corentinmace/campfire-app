import Chat from "@/components/channel/chat";

export default function Server({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main className="h-full w-full ">
      { /* TO DO: Check if the id is a valid DM or a valid server ID */ }
      <Chat />
    </main>
  );
}
