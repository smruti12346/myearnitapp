import AboutHomeThree from "@/components/HomeThree/AboutHomeThree";
import BlogHomeThree from "@/components/HomeThree/BlogHomeThree";
import DownloadHomeThree from "@/components/HomeThree/DownloadHomeThree";
import FunFactHomeThree from "@/components/HomeThree/FunFactHomeThree";
import HeroHomeThree from "@/components/HomeThree/HeroHomeThree";
import ServicesHomeThree from "@/components/HomeThree/ServicesHomeThree";
import ShowCaseHomeThree from "@/components/HomeThree/ShowCaseHomeThree";
export default function Home() {
  return (
    <>
      <HeroHomeThree />
      <ServicesHomeThree />
      <FunFactHomeThree />
      <AboutHomeThree />
      <ShowCaseHomeThree />
      <DownloadHomeThree />
      <BlogHomeThree />
    </>
  );
}
