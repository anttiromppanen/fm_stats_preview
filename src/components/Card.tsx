import heroImgMobile from "../static/images/image-header-mobile.jpg";
import heroImgDesktop from "../static/images/image-header-desktop.jpg";

function Card() {
  return (
    <div className="flex max-w-md flex-col rounded-lg bg-userCardBG lg:max-w-[1200px] lg:flex-row">
      <div className="relative lg:order-2 lg:basis-1/2">
        <div className="opacity-85 absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-userViolet mix-blend-multiply" />
        <picture>
          <source media="(min-width: 900px)" srcSet={heroImgDesktop} />
          <img
            src={heroImgMobile}
            alt=""
            className="h-full w-full rounded-t-lg object-cover lg:rounded-none lg:rounded-r-lg"
          />
        </picture>
      </div>
      <div className="flex basis-1/2 flex-col justify-center px-8 pt-8 text-center lg:order-1 lg:px-28 lg:text-left">
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
          <h1 className="font-inter text-3xl font-bold text-userWhite">
            Get <span className="text-userViolet">insights</span> that help your
            business grow.
          </h1>
          <p className="font-inter text-[14px] font-extralight text-userMainParagraphWhite">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <div className="flex w-full flex-col gap-y-6 py-8 lg:mt-10 lg:flex-row lg:gap-x-12">
          <div>
            <h2 className="font-inter text-2xl font-bold text-white">10k+</h2>
            <p className="font-inter text-[11px] font-light tracking-widest text-userStatHeadingsWhite">
              COMPANIES
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-white">314</h2>
            <p className="font-inter text-[11px] font-light tracking-widest text-userStatHeadingsWhite">
              TEMPLATES
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-white">12M+</h2>
            <p className="font-inter text-[11px] font-light tracking-widest text-userStatHeadingsWhite">
              QUERIES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
