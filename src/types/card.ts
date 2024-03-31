export type Card = {
  bgColor: string
  id: string
  image: string
  name: string
  tags: TagsType[]
}

//todo тип я должен получить с сервера
export type TagsType = string
