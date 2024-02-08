import { api_url } from "@/Auth";
import HeroPages from "@/components/HeroPages";

export async function generateStaticParams() {
  const postsResponse = await fetch(
    "https://myearnitapp.com/blog/wp-json/wp/v2/pages?categories=33&per_page=100"
  );

  const posts = await postsResponse.json();

  return posts.map((post) => ({
    single: String(post.slug),
  }));
}

const getData = async (slug) => {
  const res = await fetch(`${api_url}/pages?slug=${slug}`, {
    next: {
      revalidate: 2,
    },
  });
  const data1 = await res.json();
  return data1;
};

const Page = async ({params}) => {
  const title1 = "";
  let data = await getData(params.single);
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
      <section className={`appie-project-3-area`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="
                appie-project-3-box
                d-block d-md-flex
                justify-content-between
                align-items-center
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <h4 className="title">
                  Need more help? No problem! Contact our phenomenal
                  <br />
                  support team!
                </h4>
                <a
                  className="main-btn"
                  href="mailto:support@myearnitapp.com"
                >
                  Email a Human
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

// export async function getStaticSideProps(context) {
//   const id = context.params?.slug;
//   const postResponse = await fetch(
//     "https://myearnitapp.com/blog/wp-json/wp/v2/pages?categories=33&per_page=100"
//   );
//   const post = await postResponse.json();

//   return {
//     props: {
//       post,
//     },
//   };
// }



// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://myearnitapp.com/blog/wp-json/wp/v2/pages?categories=33&per_page=100`
//   );
//   const pages = await res.json();
//   const paths = pages.map((item) => ({
//     params: { slug: `${item.slug}` },
//   }));
//   // const paths = [{params: {slug: ''}}]
//   return { paths: paths, fallback: false };
// }

// export async function getStaticProps(slug) {
//   //let url = router.query.slug;
//   console.log("new resource", slug);
//   const res = await fetch(
//     `https://myearnitapp.com/blog/wp-json/wp/v2/pages?slug=${slug}`
//   );
//   const data = await res.json();
//   return { props: { data: data[0] } };
// }
