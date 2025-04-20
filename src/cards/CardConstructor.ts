import {Card} from "./Card";

export interface CardConstructor {
    generateFullDeck(): Card[];
}