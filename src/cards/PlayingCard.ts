// represents a single standard playing card
import {Card} from './Card';

export class PlayingCard implements Card {
    constructor(
        public value: string,
        public identifier: string,  // suit
    ) {}

    static generateFullDeck(): Card[] {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const deck: Card[] = [];

        for (const suit of suits) {
            for (const value of values) {
                deck.push(new PlayingCard(value, suit));
            }
        }
        return deck;
    }
}