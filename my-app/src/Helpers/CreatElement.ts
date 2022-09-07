
import { CardState } from '../Types/type';

const removeElement = (element: HTMLElement) => {  }

const creatButton = (id: string, text: string) => {  }

const creatStrong = (card: CardState, notion_or_def: boolean) => { 
    const strong = document.createElement('strong')
    if (notion_or_def){
        strong.innerText = card.notion
        strong.className = "notion"
    }
    else {
        strong.innerText = card.definition
        strong.className = "definition"
    }
    return strong
 }

export const creatElement = (card: CardState) => {

}