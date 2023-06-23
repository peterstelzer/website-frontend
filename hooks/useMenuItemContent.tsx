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
    commentsAllowed: boolean;
    images: ImageDetails[];
}  


const useMenuItemContent = (selectedMenuItem:MenuItemType | undefined ) => {
    const [content, setContent] = useState<ImagePaneDetailsType | undefined>(undefined);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>();
    const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.Loading)
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";

    useEffect(() => {
      const fetchContent = async () => {
          setLoadingState(LoadingState.Loading)
          try{
              const url = configUrl + "/api/menuItemContent?menuItemId="+selectedMenuItem?.id;
              const response:void | Response = await fetch(url);
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