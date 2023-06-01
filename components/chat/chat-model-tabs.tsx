"use client"
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ChatModelsTabsProps {
    chatModel: string;
    setChatMode: (mode: string) => void;
}

const ChatModelsTabs: React.FC<ChatModelsTabsProps> = ({ chatModel, setChatMode }) => {
    return (
        <Tabs className="" defaultValue={chatModel}>
            <TabsList>
                <TabsTrigger className="w-[12rem]" value="creative" onClick={() => setChatMode("creative")}>creative</TabsTrigger>
                <TabsTrigger className="w-[12rem]" value="balanced" onClick={() => setChatMode("balanced")}>balanced</TabsTrigger>
                <TabsTrigger className="w-[12rem]" value="precise" onClick={() => setChatMode("precise")}>precise</TabsTrigger>
            </TabsList>
        </Tabs>
    );
};

export default ChatModelsTabs;