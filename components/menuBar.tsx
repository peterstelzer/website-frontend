import MenuItem from "./menuItem";
import { useState } from "react";

export type MenuItemType = {
    id: number;
    index: number;
    name: string;
    children: MenuItemType[];
    hasParent?: boolean;
}

const menuItemArray: MenuItemType [] = [
   {
       "id": 1,
       "index": 0,
       "name": "Home Page",
       "children": [],
   },
   {
       "id": 60,
       "index": 1,
       "name": "China 2014",
       "children": [
           {
               "id": 62,
               "index": 0,
               "name": "Beijing",
               "hasParent": true,
               "children": []
           },
           {
               "id": 63,
               "index": 1,
               "name": "Xi'an",
               "hasParent": true,
               "children": []
           },
           {
               "id": 64,
               "index": 2,
               "name": "Wuhan/Xiaogan",
               "hasParent": true,
               "children": []
           },
           {
               "id": 65,
               "index": 3,
               "name": "Guilin/Yangshuo",
               "hasParent": true,
               "children": []
           },
           {
               "id": 66,
               "index": 4,
               "name": "Guangzhou/Maoming",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 52,
       "index": 2,
       "name": "Summer 2012",
       "children": [
           {
               "id": 53,
               "index": 0,
               "name": "NYC",
               "hasParent": true,
               "children": []
           },
           {
               "id": 54,
               "index": 1,
               "name": "Rochester",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 55,
       "index": 3,
       "name": "Spring 2012",
       "children": [
           {
               "id": 56,
               "index": 0,
               "name": "Visit to Oma's house",
               "hasParent": true,
               "children": []
           },
           {
               "id": 57,
               "index": 1,
               "name": "Disney World",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 50,
       "index": 4,
       "name": "Fall and Winter 2005 - 2006",
       "children": []
   },
   {
       "id": 48,
       "index": 5,
       "name": "Summer 2005",
       "children": []
   },
   {
       "id": 45,
       "index": 6,
       "name": "Trip to China - Spring 2005",
       "children":[{
               "id": 44,
               "index": 0,
               "name": "Hong Kong",
               "hasParent": true,
               "children": []
           },
           {
               "id": 46,
               "index": 1,
               "name": "Wuhan and Xiaogan",
               "hasParent": true,
               "children": []
           },
           {
               "id": 51,
               "index": 2,
               "name": "Guangzhou",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 43,
       "index": 7,
       "name": "Maya Xinrou",
       "children": [
           {
               "id": 47,
               "index": 0,
               "name": "Adoption Day",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 49,
       "index": 8,
       "name": "Spring 2005",
       "children": []
   },
   {
       "id": 42,
       "index": 9,
       "name": "Fall and Winter 2004 - 2005",
       "children": []
   },
   {
       "id": 41,
       "index": 10,
       "name": "Summer 2004",
       "children": []
   },
   {
       "id": 40,
       "index": 11,
       "name": "Spring and Summer 2004",
       "children": []
   },
   {
       "id": 39,
       "index": 12,
       "name": "Fall and Winter 2003",
       "children": []
   },
   {
       "id": 38,
       "index": 13,
       "name": "Trip Back East - Fall 2003",
       "children": []
   },
   {
       "id": 36,
       "index": 14,
       "name": "Spring and Summer 2003",
       "children": []
   },
   {
       "id": 33,
       "index": 15,
       "name": "Trip to China - Spring 2003",
       "children": [
           {
               "id": 34,
               "index": 0,
               "name": "Beijing",
               "hasParent": true,
               "children": []
           },
           {
               "id": 35,
               "index": 1,
               "name": "Guangzhou",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 29,
       "index": 16,
       "name": "The Path to Katie Samyi",
       "children": [
           {
               "id": 32,
               "index": 0,
               "name": "Gotcha!",
               "hasParent": true,
               "children": []
           },
           {
               "id": 31,
               "index": 1,
               "name": "Referral!",
               "hasParent": true,
               "children": []
           },
           {
               "id": 30,
               "index": 2,
               "name": "Paperchase and Wait",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 24,
       "index": 17,
       "name": "Trip to Europe 2001",
       "children": [
           {
               "id": 26,
               "index": 0,
               "name": "London",
               "hasParent": true,
               "children": []
           },
           {
               "id": 25,
               "index": 1,
               "name": "Paris",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 4,
       "index": 18,
       "name": "Trip to Europe 2000",
       "children": [
           {
               "id": 6,
               "index": 0,
               "name": "Florence",
               "hasParent": true,
               "children": []
           },
           {
               "id": 7,
               "index": 1,
               "name": "Venice",
               "hasParent": true,
               "children": []
           },
           {
               "id": 8,
               "index": 2,
               "name": "Salzburg",
               "hasParent": true,
               "children": []
           },
           {
               "id": 9,
               "index": 3,
               "name": "Garmisch-P.",
               "hasParent": true,
               "children": []
           },
           {
               "id": 10,
               "index": 4,
               "name": "Oberammergau",
               "hasParent": true,
               "children": []
           },
           {
               "id": 11,
               "index": 5,
               "name": "Rothenburg",
               "hasParent": true,
               "children": []
           },
           {
               "id": 12,
               "index": 6,
               "name": "Langenburg",
               "hasParent": true,
               "children": []
           },
           {
               "id": 13,
               "index": 7,
               "name": "Schwaebisch Hall",
               "hasParent": true,
               "children": []
           },
           {
               "id": 14,
               "index": 8,
               "name": "Neckarsteinach",
               "hasParent": true,
               "children": []
           },
           {
               "id": 15,
               "index": 9,
               "name": "Heidelberg",
               "hasParent": true,
               "children": []
           },
           {
               "id": 16,
               "index": 10,
               "name": "Rhein",
               "hasParent": true,
               "children": []
           },
           {
               "id": 17,
               "index": 11,
               "name": "Mosel",
               "hasParent": true,
               "children": []
           },
           {
               "id": 18,
               "index": 12,
               "name": "Trier",
               "hasParent": true,
               "children": []
           },
           {
               "id": 19,
               "index": 13,
               "name": "Luxembourg",
               "hasParent": true,
               "children": []
           },
           {
               "id": 20,
               "index": 14,
               "name": "Paris",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 27,
       "index": 19,
       "name": "Family History",
       "children": [
           {
               "id": 28,
               "index": 0,
               "name": "Fassel",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 21,
       "index": 20,
       "name": "Recipes",
       "children": [
           {
               "id": 22,
               "index": 0,
               "name": "Poultry",
               "hasParent": true,
               "children": []
           },
           {
               "id": 23,
               "index": 1,
               "name": "Pizza/Pasta",
               "hasParent": true,
               "children": []
           }
       ]
   },
   {
       "id": 5,
       "index": 21,
       "name": "Links",
       "children": []
   },
   {
       "id": 58,
       "index": 22,
       "name": "Password utility",
       "children": []
   },
   {
       "id": 59,
       "index": 23,
       "name": "Comments",
       "children": []
   }
];


const MenuBar = () => {
    const [selectedMenuItemId, setSelectedMenuitemId] = useState();
    return (
        <>
    <nav>   
      <ul>
      {menuItemArray.map(menu => (
      <MenuItem key={menu.id} menuItem={menu} setSelectedMenuItemId={setSelectedMenuitemId} selectedMenuItemId={selectedMenuItemId} />
      ))}
      
      </ul>
    </nav>
    </>);
};


export default MenuBar;