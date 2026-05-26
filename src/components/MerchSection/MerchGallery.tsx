import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { PicturesContainer, PicturesHeader } from "components/PhotoGallery/PhotoGallery.styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "components/Loading";

const MerchGallery = () => {
  const [photosURL, setPhotosURL] = useState<string[]>([]); 
  const getAlbum = useCallback(async () => {
    const galleryPicsURL = process.env.REACT_APP_PIC_API_URL;
    try {
      if (!galleryPicsURL) {
        throw new Error("URL is not defined");
      }
      const { data } = await axios.get<string[]>(`${galleryPicsURL}/merchgallery`);

      if (!data.length) {
        throw new Error("No images found");
      }
      setPhotosURL(data);
    } catch (error) {
      console.error(
        `Error fetching images from the server on  ${galleryPicsURL}/merchgallery`,
        error
      );
    }
  }, []);

  useEffect(() => {
    getAlbum();
  }, [getAlbum]);

  return (
    <>
      {photosURL.length === 0 ? (
        <Loading />
      ) : (
        <PicturesHeader
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <PicturesContainer>
            {photosURL.map((photo, index) => (
              <LazyLoadImage
                height="auto"
                key={index}
                src={photo}
                width="100%"
              />
            ))}
          </PicturesContainer>
        </PicturesHeader>
      )}
    </>
  );
};

export default MerchGallery;
