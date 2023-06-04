import { MenuItemType } from "components/app";
import { useEffect, useState } from "react";
import { PresentationStyle } from "components/app";


export type ImageDetails = {
    imageId: number;
    imageCaption: string;
    imageIndex: number;
    description: string;
}

export type ImagePaneDetailsType = {
    content: string;
    images: ImageDetails[];
  }  

const useMenuItemContent = (selectedMenuItem:MenuItemType | undefined ) => {
    const [content, setContent] = useState<ImagePaneDetailsType | undefined>(undefined);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>();

  
    useEffect(() => {
      const fetchContent = async () => {
          const response:void | Response = await fetch("http://localhost:8080/api/menuItemContent?menuItemId="+selectedMenuItem?.id);
          const content = await response.json();  
          setContent(content);
      }
      if (selectedMenuItem && selectedMenuItem.id){ 
        fetchContent();
      }
    }, [selectedMenuItem]);
    return {content, setContent, currentImageIndex, setCurrentImageIndex};
  
}

export default useMenuItemContent;