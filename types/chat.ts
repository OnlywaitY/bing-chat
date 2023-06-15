export enum ChatModelID {
    creative = 'creative',
    balanced = 'balanced',
    precise = 'precise',
}

export const ChatModels: Record<ChatModelID, string> = {
    [ChatModelID.creative]: ChatModelID.creative,
    [ChatModelID.balanced]: ChatModelID.balanced,
    [ChatModelID.precise]: ChatModelID.precise,

};

export interface Message {
    tag?: Tag
    text?: string
    error?: boolean
    hiddenText?: string
    suggestions?: [string]
    searchResults?: string
    revoked?: boolean
}

export enum Tag {
    user_msg = '[user](#message)',
    system_instructions = '[system](#additional_instructions)',
    assistant_suggest = '[assistant](#suggestions)',
    assistant_search = '[assistant](#search_results)',
    assistant_query = '[assistant](#search_query)',
    assistant_msg = '[assistant](#message)'
}

export interface ErrorMessage {
    code: String | null;
    title: String;
    messageLines: String[];
}


