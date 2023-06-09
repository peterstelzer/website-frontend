import { MenuItemType, LoadingState} from "components/app";
import { useEffect, useState } from "react";




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
    const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.Loading)
  
    useEffect(() => {
      const fetchContent = async () => {
          setLoadingState(LoadingState.Loading)
          try{
            const response:void | Response = await fetch("http://localhost:8080/api/menuItemContent?menuItemId="+selectedMenuItem?.id);
            const content = await response.json();  
            setContent(content);
            setLoadingState(LoadingState.Loaded);
          } catch {
            setLoadingState(LoadingState.Error)
          }
       }
      if (selectedMenuItem && selectedMenuItem.id){ 
        fetchContent();
      }
    }, [selectedMenuItem]);
    return {content, setContent, currentImageIndex, setCurrentImageIndex, loadingState};
  
}

export default useMenuItemContent;