import HeroPages from "@/components/HeroPages";
const Page = () => {
  const title1 = "";
  const desc = "FAQs";
  return (
    <div>
      <HeroPages
        tt={title1}
        desc={desc}
      />
      <div className="container my-5 text-center">
        <h3>Page Under Construction</h3>
      </div>
    </div>
  );
};

export default Page;
