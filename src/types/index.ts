interface message_form {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
    language_code?: string;
}

interface chat {
    id: number;
    first_name: string;
    username: string;
    type: string;
}

interface entities {
    offset: number;
    length: number;
    type: string;
}

interface reply_markup{
    inline_keyboard:[]
}

interface message {
    message_id: number,
    from: message_form;
    chat: chat;
    date: number;
    text: string;
    reply_markup:reply_markup
}

export interface message_object {
    message_id: number;
    from: message_form,
    chat: chat,
    date: number,
    text: string,
    entities: entities[]
}


export interface request_object {
    id: string;
    from: message_form;
    message: message;
    chat_instance: string,
    data: string;
}

export interface ProcessEnv {
    [key: string]: string | undefined
}