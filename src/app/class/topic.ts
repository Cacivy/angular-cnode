class Author {
    loginname: string
    avatar_url: string
}

class Replies {
    id: string
    author: Author
    content: string
    ups: string[]
    create_at: Date
    reply_id: string
}

export class Topic {
    id: string
    author_id: string
    tab: string
    content: string
    title: string
    last_reply_at: Date
    good: boolean
    top: boolean
    reply_count: number 
    visit_count: number
    create_at: Date
    author: Author
    replies: Replies
}
