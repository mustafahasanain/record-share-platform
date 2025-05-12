import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />

      <VideoCard
        id="1"
        title="SnapChat Messages"
        thumbnail="/assets/samples/thumbnail (1).png"
        createdAt={new Date("2025-05-01")}
        userImg="/assets/images/jason.png"
        username="Jason"
        views={10}
        visibility="public"
        duration={156}
      />
    </main>
  );
};

export default Page;
