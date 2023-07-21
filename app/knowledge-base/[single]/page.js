import { api_url } from "@/Auth";
import HeroPages from "@/components/HeroPages";
const getData = async (slug) => {
  const res = await fetch(`${api_url}/pages?slug=${slug}`, {
    next: {
      revalidate: 2,
    },
  });
  const data = await res.json();
  return data;
};
const Page = async (props) => {
  const title1 = "";
  let data = await getData(props.params.single);
  return (
    <div>
      <HeroPages
        tt={title1}
        desc={data[0]?.title.rendered}
      />
      {data.length > 0 ? (
        <section className="appie-blog-3-area cHomeNavigationTiles">
          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col-12">
                <div style={{ textAlign: "center" }}>
                  {data[0]?.acf.video_url == "" ? (
                    ""
                  ) : (
                    <iframe
                      src={data[0]?.acf.video_url}
                      width="100%"
                      height="360"
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
                <section
                  className="center-responsive-contactus"
                  style={{ textAlign: "center", marginTop: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: data[0].content.rendered,
                  }}
                ></section>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;
