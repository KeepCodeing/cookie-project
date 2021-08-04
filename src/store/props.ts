export interface SearchProp {
    keyword: string,
    tag: boolean
}

export interface MessageBoxProp {
    type: '警告' | '错误' | '成功' | '提示',
    timeout: number,
    show: boolean,
    message: string
}

export interface GlobalProp {
 search_prop: SearchProp,   
 message_box_prop: MessageBoxProp
}
