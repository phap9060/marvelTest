import { Navbar } from "../../components/Navbar/navbar";
import { Img, Section, Div } from "./style";
import wallpaper from "../../assets/images/wallpaper.jpg";
import Carousel from "react-elastic-carousel";

export function Home() {
  let items = [
    { id: 1, title: wallpaper },
    { id: 2, title: wallpaper },
    { id: 3, title: wallpaper },
    { id: 4, title: wallpaper },
    { id: 5, title: wallpaper },
  ];

  return (
    <div>
      <Navbar />
      <Section>
        <Div>
          <Carousel>
            {items.map((item) => (
              <Img key={item.id} src={item.title} />
            ))}
          </Carousel>
        </Div>
      </Section>
    </div>
  );
}
