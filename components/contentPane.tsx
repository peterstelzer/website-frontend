import { useEffect, useState } from "react";
import {MenuItemType } from './app';
import PictureElement from './pictureElement';
import {ImagePaneDetailsType} from './pictureElement'


export interface ContentProps {
   selectedMenuItem: MenuItemType | undefined;
}

const ContentPane = ({ selectedMenuItem }: ContentProps) =>  {
  const [content, setContent] = useState<ImagePaneDetailsType | undefined>(undefined);
  useEffect(() => {
    const fetchContent = async () => {
        const response:void | Response = await fetch("http://localhost:8080/api/menuItemContent?menuItemId="+selectedMenuItem?.id);
        const content = await response.json();  
        setContent(content);
    }
    if (selectedMenuItem && selectedMenuItem.id){ fetchContent();}
  }, [selectedMenuItem])

    return (
    <>
      <main className="main_view ">
        <section>
            <div dangerouslySetInnerHTML={{__html: ((content && content.content) || '')}}>
            </div>
        </section>
        <section className="pictureGrid">
        {content && content.images && content.images.map(image => (
          <PictureElement key={image.imageId} image={image} selectedMenuItem={selectedMenuItem}/>
      ))}

        </section>
      </main>
    </>
    );
}

export default ContentPane;