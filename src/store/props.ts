export interface SearchProp {
    keyword: string,
    type: 'username' | 'tags' | 'sid' | 'all' | 'userid',
    join: 'OR' | 'AND',
    pn: number,
    limit: number
}

export interface MessageBoxProp {
    type: '警告' | '错误' | '成功' | '提示',
    timeout: number,
    show: boolean,
    message: string
}

export interface IllustProp {
    id: number,
    sid: string,
    user_id: string,
    username: string,
    title: string,
    description: string,
    source_url: string,
    created: string,
    tags: string[],
    cdn_url: string,
    updated: string,
    favorite?: number,
    favorited?: boolean
}

export interface IllustListProp {
    code: number,
    message: string,
    count: number,
    data: IllustProp[]
}

export interface GlobalProp {
 search_prop: SearchProp,   
 message_box_prop: MessageBoxProp,
 illust_list_prop: IllustListProp | null,
 can_back: number,
}
