import React from 'react';
import { useState } from 'react';
import './BookCards.css';

export interface IProps {
    bookKey?: number
    cards: ICard[]
}

export interface ICard {
    key: number
    //status: string
    author: string
    title: string
    description: string
    tags: string
}


const Cards = ({cards, bookKey}: IProps) => {
    return(
        <div className="Cards">
            {cards.map((card: ICard) => {
                return(
                    <div 
                      className={'BookCard'}>
                        <div className={'Author'}>{card.author}</div>
                        <div className={'Title'}>{card.title}</div>
                        <div className={'Decription'}>{card.description}</div>
                        <div className={'Tags'}>{card.tags}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards 