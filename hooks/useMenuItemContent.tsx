import { MenuItemType } from "components/app";
import { ImagePaneDetailsType } from "components/contentPane";
import { useEffect, useState } from "react";
import { PresentationStyle } from "components/app";

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