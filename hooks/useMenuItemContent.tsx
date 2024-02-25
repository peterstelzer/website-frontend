'use client'

import {useEffect, useState} from "react";
import {LoadingState} from "@/app/models/models";
import {MenuItemType} from "@/app/models/menuItemType";
import * as menuItemsApi from "../api/menuItems/menuItems"


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

    useEffect(() => {
      const fetchContent = async () => {
          setLoadingState(LoadingState.Loading)
          try{
              menuItemsApi.getMenuItemContent(selectedMenuItem).then((response) => setContent(response));
              setLoadingState(LoadingState.Loaded);
          } catch {
              setLoadingState(LoadingState.Error)
          }
       }
      if (selectedMenuItem?.id){
        fetchContent();
      }
    }, [selectedMenuItem]);
    return {content, setContent, currentImageIndex, setCurrentImageIndex, loadingState};
  
}

export default useMenuItemContent;