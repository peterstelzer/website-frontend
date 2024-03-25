import {ImageDetails} from 'hooks/useMenuItemContent';
import {useGlobalContext} from "@/app/context/store";
import Link from "next/link";


type PictureElementProps = {
    image: ImageDetails;
}


const PictureElement  = ({ image }: PictureElementProps) => {
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";
    const { selectedMenuItem } = useGlobalContext();

    
    return (
           <div className="pictureElement">
              <Link href={"/menuId/" + selectedMenuItem?.id+"/imageIndex/"+image.imageIndex}>
                  {image?.imageId ?
                <img src={configUrl + "/showImageById.mvc?imageId=" + (image?.imageId) + "&isThumbnail=y"} alt=""/>
                  :
                  null}
              </Link>
              <div>{image.imageCaption}</div>
         </div>         
   );
};

export default PictureElement;