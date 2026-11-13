
import { useState } from "react";
import "../portfolio.css";

// She Code Africa Summit photos
import summitImg from "../assets/summitImg.png";
import summitImg1 from "../assets/summitImg1.png";
import summitImg2 from "../assets/summitImg2.png";
import summitImg3 from "../assets/summitImg3.png";
import summitImg4 from "../assets/summitImg4.png";
import summitImg5 from "../assets/summitImg5.png";
import summitImg6 from "../assets/summitImg6.png";
import summitImg7 from "../assets/summitImg7.png";
import summitImg8 from "../assets/summitImg8.png";
import summitImg9 from "../assets/summitImg9.png";
import summitImg10 from "../assets/summitImg10.png";
import summitImg11 from "../assets/summitImg11.png";
import summitImg12 from "../assets/summitImg12.png";

// Sewing photos
import sewingImg1 from "../assets/sewingImg1.png";
import sewingImg2 from "../assets/sewingImg2.png";
import sewingImg3 from "../assets/sewingImg3.png";
import sewingImg4 from "../assets/sewingImg4.png";
import sewingImg5 from "../assets/sewingImg5.png";

// Student Progressive Forum photos
import impact from "../assets/impact.png";
import impact2 from "../assets/impact2.png";
import impact3 from "../assets/impact3.png";
import impact4 from "../assets/impact4.png";
import impact5 from "../assets/impact5.png";
import impact6 from "../assets/impact6.png";

type GalleryPhoto = {
  image: string;
  title: string;
};

type GalleryCollectionProps = {
  label: string;
  heading: string;
  headingHighlight: string;
  description: string;
  coverText: string;
  itemLabel: string;
  modalTitle: string;
  photos: GalleryPhoto[];
};

// One reusable gallery for all collections
function GalleryCollection({
  label,
  heading,
  headingHighlight,
  description,
  coverText,
  itemLabel,
  modalTitle,
  photos,
}: GalleryCollectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeGallery = () => {
    setIsOpen(false);
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + photos.length) % photos.length
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % photos.length
    );
  };

  return (
    <div className="gallery-section">
      <p className="section-label">{label}</p>

      <h2>
        {heading} <span>{headingHighlight}</span>
      </h2>

      <p className="gallery-intro">{description}</p>

      {!isOpen && (
        <button
          type="button"
          className="gallery-cover"
          onClick={() => setIsOpen(true)}
          aria-label={`Open ${modalTitle} gallery`}
        >
          <img src={photos[0].image} alt={photos[0].title} />

          <span className="gallery-cover-overlay">
            <span className="gallery-cover-icon">＋</span>
            <span>{coverText}</span>
            <span className="gallery-item-count">
              {photos.length} {itemLabel}
            </span>
          </span>
        </button>
      )}

      {isOpen && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${modalTitle} gallery`}
        >
          <div className="gallery-modal-header">
            <div>
              <h3>{modalTitle}</h3>
              <p>
                All {photos.length} {itemLabel.toLowerCase()}
              </p>
            </div>

            <button
              type="button"
              className="gallery-close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              &times;
            </button>
          </div>

          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <figure className="gallery-item" key={photo.image}>
                <button
                  type="button"
                  className="gallery-photo-button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View larger image: ${photo.title}`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                  />

                  <span className="gallery-zoom-hint">
                    View larger ↗
                  </span>
                </button>

                <figcaption>
                  <span className="gallery-photo-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{photo.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>

          {selectedIndex !== null && (
            <div
              className="gallery-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged photo viewer"
              onClick={() => setSelectedIndex(null)}
            >
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close enlarged photo"
              >
                &times;
              </button>

              <button
                type="button"
                className="gallery-lightbox-arrow gallery-lightbox-prev"
                aria-label="Previous photo"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
              >
                &#10094;
              </button>

              <div
                className="gallery-lightbox-content"
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={photos[selectedIndex].image}
                  alt={photos[selectedIndex].title}
                />

                <div className="gallery-lightbox-caption">
                  <p className="gallery-lightbox-count">
                    {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                    {String(photos.length).padStart(2, "0")}
                  </p>

                  <h3>{photos[selectedIndex].title}</h3>
                </div>
              </div>

              <button
                type="button"
                className="gallery-lightbox-arrow gallery-lightbox-next"
                aria-label="Next photo"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
              >
                &#10095;
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Blog() {
  // Sewing collection
  const sewingPieces: GalleryPhoto[] = [
    {
      image: sewingImg1,
      title: "Convocation straight gown",
    },
    {
      image: sewingImg2,
      title: "Putting smiles on adults' and children's faces through sewing",
    },
    {
      image: sewingImg3,
      title: "A well-tailored pair of trousers",
    },
    {
      image: sewingImg4,
      title: "Bridesmaid outfit",
    },
    {
      image: sewingImg5,
      title: "Fitted Owanbe outfit",
    },
  ];

  // She Code Africa Summit collection
  const summitPhotos: GalleryPhoto[] = [
    {
      image: summitImg,
      title: "I made the pant suit I'm putting on",
    },
    {
      image: summitImg1,
      title: "Beautiful moment with my tech partner, Olamide Folorunsho",
    },
    {
      image: summitImg2,
      title: "The decoration complements my pant suit",
    },
    {
      image: summitImg3,
      title: "Beautiful moment with Oreoluwa Adetula",
    },
    {
      image: summitImg4,
      title: "Another beautiful moment",
    },
    {
      image: summitImg5,
      title: "Smile",
    },
    {
      image: summitImg6,
      title: "Feeling myself",
    },
    {
      image: summitImg7,
      title: "Nice shot",
    },
    {
      image: summitImg8,
      title: "Network moment with Apify",
    },
    {
      image: summitImg9,
      title: "YiiPee",
    },
    {
      image: summitImg10,
      title: "A special moment with my DevOps tutor, Mary Mbaoma",
    },
    {
      image: summitImg11,
      title: "I have grown wings",
    },
    {
      image: summitImg12,
      title: "A Summit to Remember",
    },
  ];

  // Student Progressive Forum collection
  const spfPhotos: GalleryPhoto[] = [
    {
      image: impact,
      title: "A moment with the Student Progressive Forum",
    },
    {
      image: impact2,
      title: "Representing the Student Progressive Forum",
    },
    {
      image: impact3,
      title: "Award presentation ceremony",
    },
    {
      image: impact4,
      title: "A memorable moment at the ceremony",
    },
    {
      image: impact5,
      title: "Student leadership and engagement",
    },
    {
      image: impact6,
      title: "A moment to remember",
    },
  ];

  return (
    <main className="portfolio-site">
      <section className="portfolio-section blog-section">
        <p className="section-label">BEYOND TECHNOLOGY</p>

        <h1>
          A little beyond <span>technology.</span>
        </h1>

        <p className="hero-description">
          Welcome to my creative corner — a space where I share
          my fashion designs, pieces I've sewn, events I've
          attended, and experiences that inspire me. From
          bringing ideas to life through fabric and design to
          capturing meaningful moments, this is where you get
          to see the creative side of me beyond the code.
        </p>

        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-number">01 / FASHION</div>
            <h2>Fashion &amp; Design</h2>
            <p>
              A collection of clothes I've sewn, designs I've
              created, and the details behind my work.
            </p>
          </article>

          <article className="blog-card">
            <div className="blog-number">02 / EXPERIENCES</div>
            <h2>Events &amp; Experiences</h2>
            <p>
              Moments from events I've attended, people I've
              met, and experiences worth remembering.
            </p>
          </article>

          <article className="blog-card">
            <div className="blog-number">03 / INSPIRATION</div>
            <h2>Life &amp; Inspiration</h2>
            <p>
              Little things that inspire me, personal highlights,
              and moments from my creative journey.
            </p>
          </article>
        </div>

        {/* ALL THREE COLLECTIONS USE THE SAME GALLERY COMPONENT */}
        <div className="blog-collections-grid">

          {/* 01 — SEWING */}
          <GalleryCollection
            label="FASHION & DESIGN"
            heading="Pieces I've"
            headingHighlight="sewn."
            description="A collection of clothes I've designed and sewn for people, bringing ideas to life through fabric, creativity, and attention to detail."
            coverText="Explore my sewn pieces"
            itemLabel="PIECES"
            modalTitle="Pieces I've Sewn"
            photos={sewingPieces}
          />

          {/* 02 — SHE CODE AFRICA SUMMIT */}
          <GalleryCollection
            label="EVENTS & EXPERIENCES"
            heading="She Code Africa"
            headingHighlight="Summit."
            description="Moments, connections, and memories from the She Code Africa Summit."
            coverText="Explore all summit photos"
            itemLabel="PHOTOS"
            modalTitle="SCA Summit Memories"
            photos={summitPhotos}
          />

          {/* 03 — STUDENT PROGRESSIVE FORUM */}
          <GalleryCollection
            label="STUDENT LEADERSHIP & EXPERIENCES"
            heading="Student Progressive"
            headingHighlight="Forum."
            description="I joined the Student Progressive Forum alongside fellow comrades on campus and currently serve as its Director of Gender. I also had the opportunity to join the team in presenting an award to His Excellency, Prince Dapo Abiodun, at the Gbemiga Abiodun ceremony."
            coverText="Explore my SPF moments"
            itemLabel="PHOTOS"
            modalTitle="Student Progressive Forum"
            photos={spfPhotos}
          />

        </div>
      </section>
    </main>
  );
}

export default Blog;
