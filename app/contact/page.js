import dynamic from "next/dynamic";

const Forms = dynamic(() => import("@/components/Contact/Forms"));
const HeroPages = dynamic(() => import("@/components/HeroPages"));
const Page = () => {
  const title1 = "";
  const desc = "Contact Us";
  return (
    <>
      <HeroPages
        tt={title1}
        desc={desc}
      />
      <Forms />
    </>
  );
};

export default Page;
