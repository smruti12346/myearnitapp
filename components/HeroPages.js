import thumb from "@/assets/images/fun-fact-thumb.png";
import Image from "next/image";
function HeroPages(props) {
  return (
    <>
      <div className="appie-page-title-area appie-page-service-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-page-title-item">
                <span>{props.tt}</span>
                <h3
                  className="title"
                  dangerouslySetInnerHTML={{ __html: props.desc }}
                ></h3>
                <div className="thumb">
                  <Image
                    src={thumb}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPages;
