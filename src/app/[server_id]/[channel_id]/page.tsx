export default function Channel({ params }: { params: {  channel_id: string } }) {
  const channel_id = params.channel_id;
  return (
    <main className="md:p-8 h-full flex md:gap-8 ">
      Server Channel ID: { channel_id }
    </main>
  );
}
