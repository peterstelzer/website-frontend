import { useEffect, useState } from "react";
import {MenuItemType, ImagePaneDetailsType} from './app'

export interface ContentProps {
   selectedMenuItemId: number | undefined;
}

const ContentPane = ({ selectedMenuItemId}: ContentProps) =>  {
  const [content, setContent] = useState<ImagePaneDetailsType>();
  useEffect(() => {
    const fetchContent = async () => {
        const response:void | Response = await fetch("http://localhost:8080/api/menuItemContent?menuItemId="+selectedMenuItemId);
        const content = await response.json();
        setContent(content);
    }
    if (selectedMenuItemId) { fetchContent();}
})

    return (
    <>
      <main className=".main_view ">
        <section>
            <div>{content && content.content}
            </div>
        </section>
        <section className="pictureGrid">
        </section>
      </main>
    </>
    );
}

export default ContentPane;