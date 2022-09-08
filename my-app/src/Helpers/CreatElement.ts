
import { CardState } from '../Types/type';

export const removeElement = (element: HTMLElement) => { 
    element.remove()
 }

const creatButton = (id: string, text: string) => {
    const btn = document.createElement('button')
    btn.id = id
    btn.innerHTML = text
    return btn
  }

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
    console.log('creatElemen: ', card   )
    const div_card = document.querySelector('.card');
    console.log(div_card)
    div_card?.appendChild(creatStrong(card, true))
    div_card?.appendChild(creatButton("show", "Pokaż odpowieć"))

}