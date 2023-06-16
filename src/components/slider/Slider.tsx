import React from "react";

export const Slider = () => {
  const images = [
    "carpintero.webp",
    "electricista.webp",
    "plomero.webp",
    "gasista.webp",
  ];
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState(images[0]);

  const selectnewImage = (index: number, images: string[], next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectnewImage(selectedIndex, images, false);
  };
  const next = () => {
    selectnewImage(selectedIndex, images);
  };
  return (
    <>
      <img src={require(`slider/image${selectedImage}`).default} alt="image" />
      <button onClick={previous}>{"<"}</button>
      <button onClick={next}>{">"}</button>
    </>
  );
};
