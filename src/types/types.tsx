export type USER = {
    token:string|null,
    user:USER_DETAIL | {};
}

export type USER_DETAIL = {
    firstName:string | null,
    email:string|null,
    password:string|null
}

export type NOTE = {
    _id?:string,
    title:string,
    description:string,
    tag:string
}