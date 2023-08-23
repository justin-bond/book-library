import Image from "next/image";

import bearsPic from "../assets/bears.jpg";
import kittensPic from "../assets/kittens.jpg";
import puppiesPic from "../assets/puppies.jpg";
import fictionPic from "../assets/fiction.jpg";

export const renderSubjectImage = (subject: string) => {
  switch (subject) {
    case "bears":
      return <Image src={bearsPic} alt="bears" priority fill />;
    case "kittens":
      return <Image src={kittensPic} alt="kittens" priority fill />;
    case "puppies":
      return <Image src={puppiesPic} alt="puppies" priority fill />;
    case "fiction":
      return <Image src={fictionPic} alt="fiction" priority fill />;
    default:
      break;
  }
};
