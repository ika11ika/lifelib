import React from 'react';
import { useState } from 'react';
import './Tabs.css';

export interface IProps {
    activeKey?: number
    tabs: ITab[]
    onSelect: (key:number) => void
}

export interface ITab {
    key: number
    value: string
}

const Tabs = ({tabs, activeKey, onSelect}: IProps) => {
    const [activeTabKey, setActiveTabKey] = useState<number>(activeKey ? activeKey : 0)


    return(
        <div className="Tabs">
            {tabs.map((tab: ITab) => {
                const isActiveTab = tab.key === activeTabKey

                return(
                    <div 
                      onClick={() => {
                          onSelect(tab.key) 
                          setActiveTabKey(tab.key)}
                        }
                      className={'Tab '+(isActiveTab ? 'Tab__active' : '')}>
                        {tab.value}
                    </div>
                )
            })}
        </div>
    )
}

export default Tabs 