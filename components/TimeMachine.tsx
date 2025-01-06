'use client'
import React from 'react';
import {
    Timeline,
} from 'flowbite-react';
import TimelineElement from '@/types/TimelineElement';


const TimeMachine = ({ items }: { items: TimelineElement[] }) => {
    return (

        <Timeline>
            {items.map((item, index) => (
                <Timeline.Item key={index}>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>{item.date}</Timeline.Time>
                        <Timeline.Title>{item.title}</Timeline.Title>
                        <Timeline.Body>{item.description}</Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            ))}
        </Timeline>
    )
}

export default TimeMachine;
